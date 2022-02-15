-- VARIABLES SQL
DECLARE @var VARCHAR(100) = 'Esto es una variable'
DECLARE @num1 INT = 10, @num2 INT = 40, @num3 INT = 50 
SELECT @var
SELECT @num1, @num2, @num3;


DECLARE @TotalPagoClases MONEY = 0
SET @TotalPagoClases = (SELECT SUM(c.Precio) FROM inscripcion i INNER JOIN Clase c ON i.id_clase = c.ClaseID)
SELECT @TotalPagoClases ;