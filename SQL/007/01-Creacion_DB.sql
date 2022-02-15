CREATE DATABASE Facturacion ;
USE Facturacion ;

CREATE TABLE Cliente(
	ClienteID INT PRIMARY KEY IDENTITY(1,1),
	Nombre VARCHAR(200),
	Estado BIT
);

CREATE TABLE Producto(
	ProductoID INT PRIMARY KEY IDENTITY(1,1),
	Nombre VARCHAR(200),
	Precio Money,
	Stock INT
);

CREATE TABLE Factura(
	FacturaID INT PRIMARY KEY IDENTITY(1,1),
	Fecha DATETIME,
	Direccion VARCHAR(500),
	Estado BIT,
	Total Money,
	ClienteID INT,
	CONSTRAINT fk_cliente FOREIGN KEY (ClienteID) REFERENCES Cliente (ClienteID), --LLAVE FORANEA
);

CREATE TABLE FacturaDetalle(
	FacturaDetalleID INT PRIMARY KEY IDENTITY(1,1),
	FacturaID INT,
	ProductoID INT,
	Cantidad INT,
	Precio Money,
	Total as Cantidad * Precio,	
	CONSTRAINT fk_producto FOREIGN KEY (ProductoID) REFERENCES Producto (ProductoID), --LLAVE FORANEA
	CONSTRAINT fk_factura FOREIGN KEY (FacturaID) REFERENCES Factura (FacturaID), --LLAVE FORANEA
);

INSERT INTO Cliente (Nombre, Estado)
VALUES ('Pablo Gallina', 1),
	   ('Yostin Acual', 1),
	   ('Paola Felipe', 1),
	   ('Diana Alvarado', 1),
	   ('Pedro Teleguario', 1)
;

INSERT INTO Producto (Nombre, Precio, Stock)
VALUES('Mouse Ryzen', 300, 10),
	  ('Monitor 1080p 140hz', 1500, 8),
	  ('Procesador Intel i9 12va', 5500, 10),
	  ('Ryzen 3 5600g', 900, 5),
	  ('Teclado Mecanico', 800, 20)
;

INSERT INTO Factura (Fecha, Direccion, Estado, Total, ClienteID)
VALUES(GETDATE(), 'Guatemala, Guatemala', 1, 0, 1);

INSERT INTO FacturaDetalle (ProductoID, Cantidad, Precio)
VALUES(1,1,300);

SELECT * FROM FacturaDetalle fd ; 