--SUBQUERRYS
USE Escuela;

SELECT SUM(c.Precio) FROM inscripcion i INNER JOIN Clase c ON i.id_clase = c.ClaseID WHERE i.id_alumno = 1;

SELECT 
	a.AlumnoID, (a.Nombre + ' ' + a.Apellido) NombreCompleto, a.Edad, a.Genero, a.Direccion,
	(SELECT COUNT(*) FROM inscripcion i WHERE i.id_alumno = a.AlumnoID) ClasesInscritas,
	(SELECT SUM(c.Precio) FROM inscripcion i INNER JOIN Clase c ON i.id_clase = c.ClaseID WHERE i.id_alumno = a.AlumnoID) TotalPagar,
	(SELECT AVG(c.Precio) FROM inscripcion i INNER JOIN Clase c ON i.id_clase = c.ClaseID WHERE i.id_alumno = a.AlumnoID) Promedio
FROM 
	Alumno a ;

SELECT COUNT(*) FROM inscripcion i WHERE i.id_alumno = 1;