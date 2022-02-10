USE escuela ;

-- MANEJO DE FECHAS

SELECT GETDATE(); -- Devuelve la fecha actual

SELECT * FROM Clase c ;

-- DATETIME 2022-03-18 18:00:00

-- INSETAR DATOS CON FECHA CON GETDATE()
INSERT INTO Clase (Nombre,FechaApertura,HoraClase,precio,id_maestro,id_alumno)
VALUES('Estructura de datos',GETDATE(), '3pm', 30, 1, 2) ;


--DATEADD(): Aumneta un valor al dato especificado

/*
 * DAY
 * WEEK
 * YEAR
 * MONTH
*/

SELECT DATEADD(DAY, 1, GETDATE());


SELECT DATEADD(DAY, 1 ,'2020-03-25');

-- AGREGAR DIAS
SELECT DATEADD(DAY,2  ,'2020-03-25');

-- RESTAR DIAS
SELECT DATEADD(DAY,-2  ,'2020-03-25');

-- AGREGAR UN AÑO
SELECT DATEADD(YEAR, 1, '2020-03-25');

-- RESTAR UN AÑO
SELECT DATEADD(YEAR, -1, GETDATE());

SELECT *, DATEADD(MONTH, 2, FechaApertura) FechaFinaliza  FROM Clase ;



-- OBTENER SOLO UN DATO
/*
 * YEAR
 * MONTH
 * DAY
 */

-- YEAT
SELECT YEAR(GETDATE());

-- MONTH
SELECT MONTH(GETDATE());

-- DAY
SELECT DAY(GETDATE());


--CREAR TABLA MARCAMAESTROS
CREATE TABLE MarcaMaestros(
	MarcaID INT PRIMARY KEY IDENTITY(1,1),
	FechaEntrada DATETIME,
	FechaSalida DATETIME,
	id_maestro INT,
	CONSTRAINT fk_marcaMaestro FOREIGN KEY (id_maestro) REFERENCES Maestro (MaestroID), --LLAVE FORANEA
);

INSERT INTO MarcaMaestros(FechaEntrada, FechaSalida, id_maestro)
VALUES (GETDATE(), '02-10-2022 18:00:00', 1),
	   (GETDATE(), '02-10-2022 18:05:00', 2),
	   (GETDATE(), '02-10-2022 18:20:00', 3),
	   (GETDATE(), '02-10-2022 18:00:00', 4)
	  ;
	 
SELECT * FROM MarcaMaestros mm ;

-- DATEDIFF: Devuelve la diferencia entre una fecha y otra

-- HORA ENTRADA 13:00
-- HORA SALIDA	18:00


-- DATEDIFF(MES/DIA/AÑO, DATO1, DATO2)
SELECT DATEDIFF(MINUTE, '2022-02-10 13:00:00', FechaEntrada) [Diferencia Entrada],
	FechaEntrada,
	DATEDIFF(MINUTE, '2022-02-10 18:00:00', FechaSalida) [Diferencia Salida], 
	FechaSalida, id_maestro
	FROM MarcaMaestros mm ;

/*NORMALIZANDO DATOS*/
DROP TABLE CLASE;

/*CLASE*/
CREATE TABLE Clase(
	ClaseID INT PRIMARY KEY IDENTITY(1,1),
	Nombre VARCHAR(100),
	FechaApertura DATE,
	Precio MONEY,
);


SELECT * FROM Maestro m ;

CREATE TABLE inscripcion(
	InscripcionID INT PRIMARY KEY IDENTITY(1,1),
	Fecha DATETIME,
	Hora VARCHAR(20),
	id_alumno INT,
	id_clase INT,
	id_maestro INT,
	CONSTRAINT fk_alumno FOREIGN KEY (id_alumno) REFERENCES Alumno (AlumnoID), --LLAVE FORANEA
	CONSTRAINT fk_clase FOREIGN KEY (id_clase) REFERENCES Clase (ClaseID), --LLAVE FORANEA
	CONSTRAINT fk_maestro FOREIGN KEY (id_maestro) REFERENCES Maestro (MaestroID), --LLAVE FORANEA
) ;


INSERT INTO Clase (Nombre,FechaApertura,Precio)
	VALUES('Matematicas', '2022-03-01', 50.00),
		  ('Introduccion a la programacion', '2022-03-01', 50.00),
		  ('Literatura', '2022-03-01', 80.00),
		  ('Fisica', '2022-03-01', 40.00),
		  ('Arquitectura de computadoras', '2022-03-01', 50.00),
		  ('Dibujo', '2022-03-01', 50.00)
;

SELECT * FROM Clase c ;

INSERT INTO inscripcion (Fecha, Hora, id_alumno, id_clase, id_maestro)
	VALUES('2022-02-10', '1:00pm', 1, 1, 1),
		  ('2022-02-10', '2:00pm', 2, 2, 2),
		  ('2022-02-10', '2:30pm', 1, 3, 4)
		  ('2022-02-10', '2:30pm', 2, 3, 1)
;


SELECT * FROM inscripcion i ;
SELECT * FROM Alumno a ;
SELECT * FROM Maestro m ;





--INNER
--INNER JOIN
SELECT 
	i.Fecha, i.Hora,
	m.MaestroID, (m.Nombre + ' ' + m.Apellido)[Nombre Maestro], m.Telefono,
	a.AlumnoID, (a.Nombre + ' ' + a.Apellido)[Nombre Alumno], a.Telefono
FROM 
	inscripcion i 
INNER JOIN 
	Alumno a ON i.id_alumno = a.AlumnoID
INNER JOIN
	Maestro m ON i.id_maestro = m.MaestroID 
;

--LETF JOIN
SELECT * FROM Maestro m LEFT JOIN inscripcion i ON i.id_maestro = m.MaestroID ;
SELECT * FROM inscripcion i LEFT JOIN Maestro m ON i.id_maestro = m.MaestroID ;

--RIGHT JOIN
SELECT * FROM inscripcion i RIGHT JOIN Maestro m ON i.id_maestro = m.MaestroID ;
SELECT * FROM Maestro m RIGHT JOIN inscripcion i ON i.id_maestro = m.MaestroID ;

--UNION (ALL)
SELECT a.AlumnoID FROM Alumno a
UNION ALL --UNION: No muestra datos repetidos
		  --UNION ALL: Muestra datos repetidos
SELECT i.id_alumno FROM inscripcion i ;



/*VISTAS*/
CREATE VIEW vInscripciones
AS
	SELECT 
		i.Fecha, i.Hora,
		m.MaestroID, (m.Nombre + ' ' + m.Apellido)[Nombre Maestro], m.Telefono TelefonoMaestro,
		a.AlumnoID, (a.Nombre + ' ' + a.Apellido)[Nombre Alumno], a.Telefono TelefonoAlumno
	FROM 
		inscripcion i 
	INNER JOIN 
		Alumno a ON i.id_alumno = a.AlumnoID
	INNER JOIN
		Maestro m ON i.id_maestro = m.MaestroID
;

SELECT * FROM vInscripciones ;
SELECT v.[Nombre Maestro], COUNT(AlumnoID) NumeroAlumnos FROM vInscripciones v GROUP BY v.[Nombre Maestro];