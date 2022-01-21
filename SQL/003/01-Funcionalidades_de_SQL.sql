/* UTILIZAR BASE DE DATOS */
USE Escuela;

/* AND: busca registros si cumple con los requisitos establecidos */
SELECT * FROM Producto p WHERE p.PrecioEspecial >= 500 AND p.PrecioPublico <= 1500;

/* OR: busca registros con alguno de los dos requisitos establecidos */
SELECT * FROM Producto p WHERE p.PrecioEspecial <= 800 OR p.PrecioEspecial <=1500;

/* IN: busca registros en un rango determinado */
SELECT * FROM Maestro m WHERE m.Nombre IN ('Juan', 'Ana');
SELECT * FROM Maestro m WHERE m.Edad  IN (45, 38);

/* LIKE: busca registros que contenga el dato indicado */
SELECT * FROM Producto p WHERE p.Nombre LIKE '%Mouse%'; --Buscar 1 palabra
SELECT * FROM Producto p WHERE p.Nombre LIKE '%Mouse%RGB%'; --Buscar Varias palabras
SELECT * FROM Producto p WHERE p.Nombre LIKE 'R%'; --Busca registros que COMIENZAN con la letra 'r'
SELECT * FROM Producto p WHERE p.Nombre LIKE '%b'; --Busca registros que TERMINEN con la letra 'b'
SELECT * FROM Producto p WHERE p.Nombre LIKE 'm%b'; --Busca registros que COMIENZEN con la letra m y TERMINEN con la letra 'b'

/* NOT IN: buscas registros que no sean igual al dato indicado */
SELECT * FROM Maestro m WHERE NOT m.MaestroID = 3;
SELECT * FROM Maestro m WHERE m.Nombre NOT IN ('Juan', 'Ana');

/* BETWEEN */
SELECT * FROM Producto p WHERE p.PrecioEspecial BETWEEN 450 AND 800;



/* FUNCIONES DE AGREGACION */
/*SUM: realiza una suma a los datos establecidos*/
SELECT * FROM Clase c ;
SELECT SUM(c.precio), c.id_alumno FROM Clase c GROUP BY c.id_alumno ;

/*AVG: calcula el promedio de un dato*/
UPDATE Clase SET precio = 50 WHERE ClaseID = 4;
UPDATE Clase SET precio = 60 WHERE ClaseID = 2;
SELECT AVG(precio) FROM Clase c ;
SELECT AVG(precio), id_alumno FROM Clase c GROUP BY id_alumno ;

/*COUNT: cuenta los datos seleccionados*/
SELECT COUNT(*) FROM Clase c WHERE c.id_alumno = 1;

/*MIN: busca el valor minimo de algun dato*/
SELECT MIN(c.precio) FROM Clase c ;

/*MAX: busca el valor maximo de algun dato*/
SELECT MAX(precio) FROM Clase c ;

SELECT COUNT(c.ClaseID)[Clases inscritas], MAX(c.precio) Max, MIN(c.precio) Min, SUM(c.precio)[Total a pagar] , c.id_alumno [ID alumno] 
FROM Clase c GROUP BY c.id_alumno ;



/* COLUMNAS CALCULADAS */
SELECT 4*4;
SELECT p.Nombre, p.Stock, p.PrecioEspecial, (p.Stock * p.PrecioEspecial)[Total Precio Especial] FROM Producto p ;



/* TRABAJANDO CON TEXTOS*/
/*LEN: devuelve la cantidad de datos de un texto*/
SELECT LEN('Hola mundo');

/*LOWER: convierte un texto a minuscula*/
SELECT LOWER('HOLA MUNDO');

/*UPPER: convierte un texto a mayuscula*/
SELECT UPPER('hola mundo');

/*CONCAT: une uno o mas datos*/
SELECT CONCAT('Hola',' ', 'mundo'); 