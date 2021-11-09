/*CREACION BASE DE DATOS*/
CREATE DATABASE MyDataBase;
USE MyDataBase;

/*CREAR TABLA*/
CREATE TABLE Inscripciones (
	Materia VARCHAR(30),
	Asignatura VARCHAR(30),
	Nombre VARCHAR(30),
	Apellido VARCHAR(30),
	Documento VARCHAR(15)
);

/*FORMA 1 INSERTAR DATOS A UNA TABLA*/
INSERT INTO Inscripciones 
VALUES('Matematica', 'Calculo 1', 'Vladimir', 'Rodriguez','123456');

/*FORMA 2 INSERTAR DATOS A UNA TABLA*/
INSERT INTO Inscripciones (Materia, Asignatura, Nombre, Apellido, Documento) 
VALUES('Matematica', 'Calculo 1', 'Loreana', 'Cuello','466878'),
	  ('Biologia', 'Sistema Cardiovascular', 'Lorena', 'Cuello','456788');

/*MOSTRAR DATOS*/
SELECT * FROM Inscripciones i ;