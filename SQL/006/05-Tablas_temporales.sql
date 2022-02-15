-- TABLAS TEMPORALES
--Forma 1
SELECT a.Nombre, a.Apellido INTO #AlumnosTemporal FROM Alumno a ;
SELECT * FROM #AlumnosTemporal ;

--Fomra 2
CREATE TABLE #AlumnosTemporal1(
	Nombre VARCHAR(50),
	Apellido VARCHAR(50)
);
INSERT INTO #AlumnosTemporal1 SELECT Nombre, Apellido FROM Alumno ;
SELECT * FROM #AlumnosTemporal1 ;

DROP TABLE #AlumnosTemporal;
DROP TABLE #AlumnosTemporal1;

-- NULLIF(VAR, VALOR)