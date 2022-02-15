-- PROCEDIMIENTOS ALMACENADOS
--CREAR
CREATE PROC spInsertarAlumnos
AS
BEGIN
	INSERT INTO Alumno (Nombre, Apellido, Edad, Genero, Telefono, Direccion)
	VALUES('Yostin', 'Solis', 19, 'Masculino', '864652112', 'Guatemala')
END
;

--EJECUTAR
EXEC spInsertarAlumnos;

--PROCEDIMIENTOS CON PARAMETROS
ALTER PROC spInsertarAlumnos
	@Nombre VARCHAR(20),
	@Apellido VARCHAR(20),
	@Edad INT,
	@Genero VARCHAR(20),
	@Telefono VARCHAR(100), 
	@Direccion VARCHAR(100)
AS	
BEGIN
	DECLARE @Existe BIT = (SELECT COUNT(*) FROM Alumno a WHERE a.Nombre = @Nombre AND a.Apellido = @Apellido)	
	IF (@Existe = 1)
	BEGIN
		DECLARE @ID INT = (SELECT a2.AlumnoID FROM Alumno a2 WHERE a2.Nombre = @Nombre AND a2.Apellido = @Apellido);
		UPDATE Alumno SET Nombre = @Nombre, Apellido = @Apellido, Edad = @Edad, Genero = @Genero, Direccion = @Direccion, Telefono = @Telefono
		WHERE AlumnoID = @ID
	END
	ELSE
	BEGIN 
		INSERT INTO Alumno (Nombre, Apellido, Edad, Genero, Telefono, Direccion)
		VALUES(@Nombre, @Apellido, @Edad, @Genero, @Telefono, @Direccion)
	END
END ;

EXEC spInsertarAlumnos 'Daniel', 'Galina', 21, 'Masculino', '40117234', 'Sacatepequez' ;

SELECT * FROM Alumno a ;