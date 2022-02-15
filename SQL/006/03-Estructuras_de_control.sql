-- ESTRUCTURAS DE CONTROL
-- IF
DECLARE @TotalClases INT = 4
DECLARE @Descuento DECIMAL(10,10) = 0.15
DECLARE @Precio MONEY = 100

IF(@TotalClases > 5)
BEGIN
	SET @Precio = @precio - (@precio * @Descuento) --15
END
SELECT @Precio ;

IF(2+2 = 5)
BEGIN
	SELECT 'Es cierto'
END
ELSE
BEGIN
	SELECT 'No es cierto'
END ;


-- WHEN
SELECT 
CASE WHEN 1+1 =2 
THEN 'Es verdadero' 
ELSE 'No es Verdadero' 
END ;


DECLARE @Fecha DATE = '2020-05-05'
SELECT 
CASE WHEN MONTH(@Fecha) = 4 THEN 'Abril'  
WHEN  MONTH(@Fecha) = 5 THEN 'Mayo'
WHEN MONTH(@Fecha) = 6 THEN 'Junio'
WHEN MONTH(@Fecha) = 7 THEN 'Julio'
WHEN MONTH(@fecha) = 8 THEN 'Agosto'
END ;
