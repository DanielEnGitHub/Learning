USE Facturacion ;

SELECT * FROM FacturaDetalle fd ;

--Creacion Trigger Nombre			TablaFinal		   Accion
CREATE TRIGGER trActualizarStock ON FacturaDetalle FOR INSERT
AS
BEGIN 
	SELECT ProductoID, Cantidad INTO #ProductoFacturado FROM INSERTED --ESTA TABLA SE CREA CUANDO REALIZAMOS UN INSERRT
	
	SELECT * FROM #ProductoFacturado
	
	DROP TABLE #ProductoFacturado
	
END
;

INSERT INTO Factura (Fecha, Direccion, Estado, Total, ClienteID)
VALUES(GETDATE(), 'Guatemala, Guatemala', 1, 0, 1);

SELECT * FROM FacturaDetalle fd ;

INSERT INTO FacturaDetalle (FacturaID ,ProductoID, Cantidad, Precio)
VALUES(3,1,1,300);


--MODIFICANDO TRIGGER
ALTER TRIGGER trActualizarStock ON FacturaDetalle FOR INSERT
AS
BEGIN 
	SELECT ProductoID, Cantidad INTO #ProductoFacturado FROM INSERTED --ESTA TABLA SE CREA CUANDO REALIZAMOS UN INSERRT
	
	--ACTUALIZAR STOCK PRODUCTO
	UPDATE 
		P 
	SET 
		P.Stock = P.Stock - PF.Cantidad 
	FROM 
		Producto P 
	INNER JOIN 
		#ProductoFacturado PF ON PF.ProductoID = P.ProductoID
	--FIN ACTUALIZAR STOCK PRODUCTO

	DROP TABLE #ProductoFacturado
	
END
;

SELECT * FROM Producto p ;