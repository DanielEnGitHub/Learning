/*CREACION BASE DE DATOS*/
CREATE DATABASE escuela;
USE escuela;

/*CREACION DE TABLAS*/
CREATE TABLE alumno(
	alumno_id INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(25),
	apellido VARCHAR(50),
	direccion VARCHAR(50),
	telefono VARCHAR(9),
	fecha_nacimiento DATE,
	genero VARCHAR(10)
);

DROP table alumno ;
CREATE TABLE profesor(
	profesor_id INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(25),
	apellido VARCHAR(50),
	direccion VARCHAR(50),
	fecha_nacimiento DATE,
	nivel_academico VARCHAR(20),
	genero VARCHAR(10)
);

CREATE TABLE asignatura(
	asignatura_id INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(20) not null
);

/* Creando tabla Inscripción con campos para llaves foraneas */

CREATE TABLE inscripcion(
	id_inscripcion INT IDENTITY PRIMARY KEY NOT NULL,
	id_asignatura INT NOT NULL,
	id_alumno INT NOT NULL,
	id_profesor INT NOT NULL,
			   /*Nombre					  referencia a si misma		tabla		dato_tabla*/
	CONSTRAINT fk_asignatura FOREIGN KEY (id_asignatura) REFERENCES asignatura (asignatura_id),
	CONSTRAINT fk_alumno FOREIGN KEY (id_alumno) REFERENCES alumno (alumno_id),
	CONSTRAINT fk_profesor FOREIGN KEY (id_profesor) REFERENCES profesor (profesor_id)
);

/*INSERTANDO VALORES*/
INSERT INTO profesor(nombre,apellido,direccion,fecha_nacimiento,nivel_academico,genero) 
VALUES('Jose','Perez', 'Guatemala, Guatemala', '24-08-1986', 'Ingeniero', 'Masculino'),
	('Juan','Alvarez', 'Guatemala, Guatemala', '24-08-1995', 'Universitario', 'Masculino'),
	('Erick','Arenas', 'Antigua, Guatemala', '24-08-1995', 'Universitario', 'Masculino'),
	('Jose','Baena', 'Chimaltenango, Guatemala', '24-08-1993', 'Universitario', 'Masculino'),
	('Carolina','Marin', 'Guatemala, Guatemala', '24-08-1991', 'Universitario', 'Femenino'),
	('Vanessa','Perez', 'Guatemala, Guatemala', '24-08-1996', 'Universitario', 'Femenino'),
	('Diego','Rivera', 'Guatemala, Guatemala', '24-08-1990', 'Licenciado', 'Masculino'),
	('Lina','Rios', 'Guatemala, Guatemala', '24-08-1989', 'Doc', 'Femenino'),
	('Juliana','Vasquez', 'San Marcos, Guatemala', '24-08-1995', 'Universitario', 'Femenino'),
	('Andres','Alvarez', 'Guatemala, Guatemala', '24-08-1995', 'Universitario', 'Masculino')
	;

INSERT INTO alumno(nombre,apellido,direccion,fecha_nacimiento,telefono,genero) 
VALUES('Ana','Varela', 'Guatemala, Guatemala', '15-07-2000', '78984546', 'Femenino'),
	('Patricia','King', 'Antigua, Guatemala', '20-03-2002', '78984546', 'Femenino'),
	('Carlos','Morazan', 'Chiquimula, Guatemala', '20-02-2001', '78984546', 'Masculino'),
	('Freddy','Salazar', 'Chimaltenango, Guatemala', '30-07-2000', '78984546', 'Masculino'),
	('Marta','Salazar', 'San Marcos, Guatemala', '15-04-2000', '78984546', 'Femenino'),
	('Ricardo','Oviedo', 'Guatemala, Guatemala', '15-11-2003', '78984546', 'Masculino'),
	('Cristian','Acual', 'Guatemala, Guatemala', '15-07-1999', '78984546', 'Masculino'),
	('Simon','Castillo', 'San Marcos, Guatemala', '25-03-2000', '789845754', 'Masculino'),
	('Alfonso','Gonzales', 'Chimaltenango, Guatemala', '20-07-2000', '78984546', 'Masculino'),
	('Sofia','Benitez', 'Guatemala, Guatemala', '08-07-2000', '78984546', 'Femenino')
	;

INSERT INTO asignatura(nombre)
VALUES('Matematicas'),
	('Programacion'),
	('Fisica'),
	('Computacion'),
	('Quimica'),
	('Filosofia'),
	('Lenguaje'),
	('Artes')
	;

INSERT INTO inscripcion (id_asignatura, id_alumno, id_profesor)
VALUES(1,1,3),
	(1,2,3),
	(1,3,3),
	(1,4,3),
	(1,5,3);

/*MOSTRANDO DATOS*/
SELECT * FROM profesor p ;

SELECT * FROM alumno a ;

SELECT * FROM asignatura a ;

SELECT * FROM inscripcion i  ;