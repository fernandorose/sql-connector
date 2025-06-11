CREATE DATABASE appdb;
GO
USE appdb;
GO
CREATE TABLE F_DESTIs (
    CN_Numero INT IDENTITY(1,1) PRIMARY KEY,
    DX_Folio VARCHAR(50) NOT NULL,
    DX_Tipo VARCHAR(50) NOT NULL,
    DX_Estado VARCHAR(50) NOT NULL,
    DX_Etapa VARCHAR(50) NOT NULL,
    DX_Titulo VARCHAR(255) NOT NULL,
    DX_Descripcion VARCHAR(MAX) NOT NULL,
    DX_Ahorros VARCHAR(MAX) NOT NULL,
    DX_Ahorro_Dolares VARCHAR(50) NOT NULL,
    DX_Ahorros_Horas VARCHAR(255) NOT NULL,
    DX_Area VARCHAR(100) NOT NULL,
    DX_Autor VARCHAR(100) NOT NULL,
    DX_Responsable VARCHAR(100) NOT NULL,
    DX_Fecha_Creacion VARCHAR(255) NOT NULL,
    DX_Fecha_Act VARCHAR(255) NOT NULL,
    DX_Calificacion VARCHAR(255) NOT NULL,
    DX_Comentario_Canc VARCHAR(MAX) NOT NULL,
    DX_Comentario_Rev VARCHAR(MAX) NOT NULL,
    DX_Fecha_Fin_Revision VARCHAR(255) NOT NULL,
    DX_Fecha_Estimada VARCHAR(255) NOT NULL,
    DX_Hora_Estimada VARCHAR(255) NOT NULL,
    DX_Comentario_Analisis VARCHAR(MAX) NOT NULL,
    DX_Fecha_Fin_Analisis VARCHAR(255) NOT NULL,
    DX_Hora_Desarrollo VARCHAR(255) NOT NULL,
    DX_Comentario_Des VARCHAR(MAX) NOT NULL,
    DX_Fecha_Fin_Desarrollo VARCHAR(255) NOT NULL,
    DX_Fecha_Fin_Aprobacion VARCHAR(255) NOT NULL,
    DX_Fecha_Fin_Produccion VARCHAR(255) NOT NULL,
    DX_Fecha_Fin_Evaluacion VARCHAR(255) NOT NULL
);
GO


 