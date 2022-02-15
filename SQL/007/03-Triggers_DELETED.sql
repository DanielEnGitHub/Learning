-- TRIGGER DELETED
--Devuelve el nombre de la computadora en donde estamos trabajando
SELECT SUSER_NAME();

SELECT * FROM FacturaDetalle fd ;

CREATE TABLE LogProductosEliminados(
	LogID INT PRIMARY KEY IDENTITY(1,1),
	Fecha DATETIME,
	Usuario VARCHAR(200),
	ProductoID INT,
	Cantidad INT,
	FacturaID INT,
	CONSTRAINT fk_productoD FOREIGN KEY (ProductoID) REFERENCES Producto (ProductoID), --LLAVE FORANEA
	CONSTRAINT fk_facturaD FOREIGN KEY (FacturaID) REFERENCES Factura (FacturaID) --LLAVE FORANEA
);

SELECT * FROM LogProductosEliminados ;

CREATE TRIGGER trProductosEliminados ON FacturaDetalle FOR DELETE
AS
BEGIN	
	INSERT INTO LogProductosEliminados (Fecha, Usuario, ProductoID, Cantidad, FacturaID)
	SELECT GETDATE(), SUSER_NAME(), ProductoID, Cantidad, FacturaID FROM DELETED
END
;

SELECT * FROM FacturaDetalle fd ;

DELETE FROM FacturaDetalle WHERE FacturaDetalleID =  4 ;

SELECT * FROM LogProductosEliminados lpe ;