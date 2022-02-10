/* CREAR BASE DE DATOS */
CREATE DATABASE Escuela;


/* UTILIZAR BASE DE DATOS */
USE Escuela;


/* CREAR TABLA */
/*ALUMNO*/
CREATE TABLE Alumno(
	AlumnoID INT PRIMARY KEY IDENTITY(1,1) NOT NULL, /* llave foranea */ /* NOT NULL: no permite campos vacios */
	Nombre VARCHAR(20),
	Apellido VARCHAR(20),
	Edad INT,
	Genero VARCHAR(20)	
);
/*MAESTRO*/
CREATE TABLE Maestro(
	MaestroID INT PRIMARY KEY IDENTITY(1,1),
	Nombre VARCHAR(100),
	Apellido VARCHAR(100),
	Correo VARCHAR(300),
	Direccion VARCHAR(500),
	Edad INT,
	Sueldo MONEY,
	FechaIngreso DATE,
	Telefono VARCHAR(20)	
);
/*PRODUCTO*/
CREATE TABLE Producto(
	ProductoID INT PRIMARY KEY IDENTITY(1,1),
	Nombre VARCHAR(500),
	PrecioEspecial MONEY,
	PrecioPublico MONEY,
	Stock INT
);

/*CLASE*/
CREATE TABLE Clase(
	ClaseID INT PRIMARY KEY IDENTITY(1,1),
	Nombre VARCHAR(100),
	FechaApertura DATE,
	HoraClase VARCHAR(10),
	precio MONEY,
	id_maestro INT,
	id_alumno INT,
	CONSTRAINT fk_maestro FOREIGN KEY (id_maestro) REFERENCES Maestro (MaestroID), --LLAVE FORANEA
	CONSTRAINT fk_alumno FOREIGN KEY (id_alumno) REFERENCES Alumno (AlumnoID), --LLAVE FORANEA
);

/* AGREGAR COLUMNAS */
ALTER TABLE Alumno ADD Direccion VARCHAR(500);
ALTER TABLE Alumno ADD Telefono VARCHAR(100);


/* BORRAR COLUMNAS */
/* ALTER TABLE Alumno DROP Column Direccion; */


/* INSERTAR DATOS */
/*ALUMNOS*/
INSERT INTO Alumno (Nombre, Apellido, Edad, Genero, Telefono, Direccion)
VALUES('Selvin', 'Solis', 19, 'Masculino', '864652112', 'Guatemala'),
VALUES('Mariela', 'Guimenez', 24, 'Femenino', '98655445', 'Guatemala');
/*MAESTROS*/
INSERT INTO Maestro (Nombre, Apellido, Correo, Direccion, Edad, Sueldo, FechaIngreso, Telefono)
VALUES('Juan', 'Viallalvazo', 'villajuan@gmail.com', 'Antigua Guatemala', 35, 4500, '12-29-2016', '986465464'),
	  ('Margarita', 'Perez', 'marga89646@gmail.com', 'Chimaltenango', 45, 4800, '07-30-2013', '566465464'),
	  ('Ana', 'Garcia', 'anagarcia46@gmail.com', 'San Lucas', 38, 4000, '05-01-2019', '98646464'),
	  ('Lorenzo', 'Lanuz', 'lanuz789@gmail.com', 'San Lucas', 32, 4300, '01-01-2019', '5589464')  
;
/*PRODUCTOS*/
INSERT INTO Producto (Nombre, PrecioEspecial, PrecioPublico, Stock)
VALUES('Mouse Loghitech', 450, 500, 15),
	  ('Teclado Corsair RGB', 500, 600, 8),
	  ('Mouse Pad RGB', 120, 150, 20),
	  ('Ryzen 3 3400G', 800, 1200, 5),
	  ('Ryzen 5 3400G', 1500, 2000, 4)
;
/*CLASE*/
INSERT INTO Clase (Nombre,FechaApertura,HoraClase,precio,id_maestro,id_alumno)
VALUES('Introduccion a la programacion', '10-02-2022', '11am', 30, 1, 2) ;

INSERT INTO Clase (Nombre,FechaApertura,HoraClase,precio,id_maestro,id_alumno)
VALUES('Reparacion de computadoras', '10-02-2022', '10am', 30, 2, 1);

INSERT INTO Clase (Nombre,FechaApertura,HoraClase,precio,id_maestro,id_alumno)
VALUES('Logica de programacion', '10-02-2022', '12pm', 30, 3, 1);

INSERT INTO Clase (Nombre,FechaApertura,HoraClase,precio,id_maestro,id_alumno)
VALUES('Introduccion al desarollo WEB', '10-02-2022', '2pm', 30, 4, 2);


/* MOSTRAR TABLAS */
SELECT * FROM Maestro m ;
SELECT * FROM Alumno a ;
SELECT * FROM Producto p ;
SELECT * FROM Clase c ;


/* ACTUALIZAR/EDITAR DATOS*/
UPDATE Alumno SET Direccion = 'Antigua Guatemala' WHERE AlumnoID = 1 ;


/* BORRAR REGISTRO */
DELETE Alumno Where AlumnoID = 2 ;


/* SELECCIONAR TABLAS CON ALIAS */
SELECT Nombre [Nombre Del Alumno] FROM Alumno a ;


/* WHERE */
SELECT * FROM Maestro m WHERE Direccion = 'San Lucas';


/* ORDENAR POR */
/*MAYOR A MENOR*/
SELECT * FROM Maestro m ORDER BY Nombre ASC ;
/*MENOR A MAYOR*/
SELECT * FROM Maestro m ORDER BY Nombre DESC ;


/* LIMITAR REGISTROS */
SELECT TOP 2 * FROM Maestro m ;


/* DISTINT SELECCIONAR DATOS QUE NO ESTEN REPETIDOS */
SELECT Direccion FROM Maestro m ;
SELECT DISTINCT Direccion FROM Maestro m ;


/* AGRUPAR POR */
UPDATE Maestro SET Direccion = 'San Lucas' WHERE MaestroID = 1 ;
UPDATE Maestro SET Apellido = 'Perez' WHERE MaestroID = 4 ;

SELECT Apellido, Direccion FROM Maestro m 
GROUP BY Apellido, Direccion ;

SELECT Direccion, SUM(Sueldo) [Sueldo Total] FROM Maestro m 
GROUP BY Direccion ;