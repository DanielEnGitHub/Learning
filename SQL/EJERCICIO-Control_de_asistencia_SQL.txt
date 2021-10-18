--CONTROL DE EMPLEADOS
---------------CREACION BASE DE DATOS
CREATE DATABASE controlEmpleados ;
USE controlEmpleados ;

---------------CREACION DE TABLAS

--EMPLEADOS
CREATE TABLE empleado (
	empleado_id INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(60) NOT NULL,
	apellido VARCHAR(60) NOT NULL,
	direccion VARCHAR(60) NOT NULL,
	telefono VARCHAR(20),
	fecha_nacimiento DATE,
	salario_hora MONEY,
	fk_puesto INT NOT NULL,
	fk_genero INT,
);
-- LLAVES FORANEAS
--ALTER TABLE empleado DROP COLUMN fk_registro ; --ELIMINAR UNA COLUMNA DE UNA TABLA

ALTER TABLE empleado ADD CONSTRAINT fk_puesto FOREIGN KEY (fk_puesto)
						 REFERENCES puesto (puesto_id) ;

ALTER TABLE empleado ADD CONSTRAINT fk_genero FOREIGN KEY (fk_genero)
						 REFERENCES genero (genero_id) ;

--PUESTO
CREATE TABLE puesto (
	puesto_id INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(50),
	descripcion VARCHAR(150)
);

--GENERO
CREATE TABLE genero (
	genero_id INT IDENTITY PRIMARY KEY NOT NULL,
	genero VARCHAR(50)
);

--REGISTRO DE MODIFICACIONES (TRIGGERS)
CREATE TABLE LogFechasModifico(
	LogID int primary KEY identity(1,1),
	Fecha DATETime,
	Usuario VARCHAR(100),
	EmpleadoID INT,
	FechaAnterior DATETIME
) ;

--REGISTRO
CREATE TABLE registro (
	registro_id INT IDENTITY PRIMARY KEY NOT NULL,
	fecha DATETIME,
	fk_empleado INT NOT NULL,
	tipo BIT NOT NULL
);

--LLAVES FORANEAS
ALTER TABLE registro ADD CONSTRAINT fk_empleado FOREIGN KEY (fk_empleado)
						 REFERENCES empleado (empleado_id) ;

---------------INSERTAR DATOS
INSERT INTO genero (genero)
			VALUES('MASCULINO'),
				  ('FEMENINO') ;
				 
INSERT INTO puesto (nombre, descripcion)
			VAlUES ('CEO', 'Responsables de la gestión y dirección administrativa de una empresa'),
				   ('Gerente Financiero', 'La gerencia financiera es el cargo de una empresa que se encarga de que las compañías están en buena situación económica'),
				   ('Gerente Comercial', 'Cuando se habla del ejecutivo comercial, es referirse específicamente al responsables de las ventas de una empresa'),
				   ('Gerente de Servicios Administrativos', 'Los ejecutivos de servicios administrativos planifican y coordinan las necesidades que puede tener una empresa para su buen funcionamiento'),
				   ('Gerente de Marketing', 'Los gerentes de marketing crean nuevas campañas y administran al personal para ejecutar planes'),
				   ('Gerente de Recursos Humanos', 'Los responsables de la gestión de personas determinan cuánto se paga a los empleados, cómo aumentan y se distribuyen bonos y salarios'),
				   ('Gerente de TI', 'Los administradores de TI determinan las necesidades tecnológicas de la empresa y planifican cómo satisfacer esas necesidades') ;

---------------INSERTAR EMPLEADO
CREATE PROC spCrearEmpleado 
	@nombre VARCHAR(60),
	@apellido VARCHAR(60),
	@direccion VARCHAR(60),
	@telefono VARCHAR(20),
	@fecha_nacimiento DATE,
	@salario MONEY,
	@puesto INT,
	@genero INT
AS
BEGIN
	INSERT INTO empleado (nombre, apellido, direccion, telefono, fecha_nacimiento, salario_hora, fk_puesto, fk_genero)
				VALUES(@nombre, @apellido, @direccion, @telefono, @fecha_nacimiento, @salario, @puesto, @genero)	
END ;

---------------REGISTRO ENTRADA Y SALIDA
CREATE PROC spEntradaSalida
	@empleado INT
AS
BEGIN
	DECLARE @noRegistro INT = (SELECT 
									COUNT(r.fk_empleado) 
							   FROM 
							  		registro r 
							   WHERE 
							 		r.fk_empleado = @empleado AND CONVERT (DATE, r.fecha) = CONVERT (DATE, GETDATE() ) ) ;

	IF (@noRegistro = 0)
	BEGIN
		INSERT INTO registro (fecha, fk_empleado, tipo)
				VALUES(GETDATE(), @empleado, 0)	
	END
	ELSE
	IF (@noRegistro = 1)
	BEGIN
		INSERT INTO registro (fecha, fk_empleado, tipo)
				VALUES(GETDATE(), @empleado, 1)	
	END
	ELSE
	BEGIN
		SELECT 'Este empleado ya marco 2 veces'
	END
END ;

----------------------------------
CREATE VIEW vReporte
AS
SELECT
	e.empleado_id,
	CONCAT(e.nombre, ' ', e.apellido) [NOMBRE EMPELEADO],
	e.salario_hora ,
	CONVERT (DATE, r.fecha) FECHA,
	MAX(Case WHEN tipo = 0 THEN r.fecha END) ENTRADA,
	MAX(Case WHEN tipo = 1 THEN r.fecha END) SALIDA
FROM 
	registro r INNER JOIN empleado e ON r.fk_empleado = e.empleado_id GROUP BY e.empleado_id, e.nombre, e.apellido, e.salario_hora, CONVERT (DATE, r.fecha) ;
----------------------------------
CREATE VIEW vHorasTrababjadas
AS
SELECT 
	*, ISNULL( (DATEDIFF(HOUR, r.ENTRADA, r.SALIDA)), 0) [HORAS TRABAJADAS]
FROM 
	vReporte r ;
----------------------------------
CREATE VIEW vHorasTotal
AS
SELECT
	hr.FECHA, hr.empleado_id, hr.[NOMBRE EMPELEADO], hr.salario_hora, SUM(hr.[HORAS TRABAJADAS]) [TOTAL HORAS]
FROM 
	vHorasTrababjadas hr 
GROUP BY 
	hr.empleado_id, hr.[NOMBRE EMPELEADO], hr.salario_hora, hr.FECHA;

-----------------------------------
------VARIABLES------------
CREATE PROC spHorasTrabajadas
@FechaInicio DATE,
@FechaFin DATE
AS
BEGIN
	SELECT
		ht.empleado_id, ht.[NOMBRE EMPELEADO] ,ht.salario_hora, ht.[TOTAL HORAS],MAX(ht.salario_hora * ht.[TOTAL HORAS]) [Total a pagar]
	FROM
		vHorasTotal ht
	WHERE 
		ht.FECHA BETWEEN @FechaInicio AND @FechaFin
	GROUP BY
		ht.empleado_id,
		ht.[NOMBRE EMPELEADO],
		ht.[TOTAL HORAS],
		ht.salario_hora
END	;


CREATE PROC spActualizarHoras
@EmpleadoID INT,
@Fecha DATE,
@Tipo BIT ,
@FechaNueva DATETIME
-- EI - Entrada Incicial
-- EF - Entrada Final
-- SI - Salida Inicial
-- SF - Salida Final
AS
BEGIN
	Update registro set fecha = @FechaNueva where CONVERT(Date, fecha) = @Fecha 
	AND fk_empleado = @EmpleadoID AND tipo = @Tipo
END ;


-----------------------TRIGGERS-----------------------------
CREATE TRIGGER trLogFechasModifico ON registro AFTER UPDATE 
AS 
BEGIN
	DECLARE @EmpleadoID INT, @FechaAnterior DATETIME;
	SET @EmpleadoID = (SELECT fk_empleado from DELETED)
	SET @FechaAnterior = (SELECT fecha from DELETED)
	INSERT INTO LogFechasModifico (Fecha, Usuario, EmpleadoID, FechaAnterior)
	VALUES (GETDATE(), SUSER_NAME(), @EmpleadoID, @FechaAnterior )
END ;

----------------EXECUTE 
EXEC spCrearEmpleado 'Camila', 'Villalobo', 'Guatemala', '446465464', '1998-05-05', 10, 1, 2 ;
EXEC spCrearEmpleado 'Pablo', 'Ortiz', 'Guatemala', '446465464', '1998-05-05', 10, 1, 2 ;--crear empleado (Nombre, Apellido, Direccion, Telefono, Fecha Nacimiento, salario por hora, puesto, genero )

EXEC spEntradaSalida 1 ; --Registro entrada salida (empleado_id)
EXEC spHorasTrabajadas '01-08-2021', '24-08-2021' ; --Reporte de horas trabajadas (Desde, hasta)
EXEC spActualizarHoras 1, '24-08-2021', 0, '24-08-2021 06:00:00' ; --Modificar registro de horas trabajadas (Usuario, fecha que buscara, tipo de registro, fecha nueva)