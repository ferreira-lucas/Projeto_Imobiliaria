CREATE DATABASE imobiliaria;

USE imobiliaria;

/* Diagrama de Banco de Dados Imobiliária: */

CREATE TABLE Imoveis (
    idImo int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    titulo varchar (200) NOT NULL,
    descricao varchar (1000) NOT NULL,
    tipo enum ('A', 'V') NOT NULL,
    categoria enum ('C', 'S', 'A', 'T', 'SC') NOT NULL,
    endereco varchar (300) NOT NULL,
    numero smallint (5) NOT NULL,
    bairro varchar (150) NOT NULL,
    cidade varchar (150) NOT NULL,
    pais varchar (150) NOT NULL,
    cep int (8) NOT NULL,
    preco decimal (11) NOT NULL,
    situacao enum ('A', 'V', 'L') NOT NULL,
    financiado enum ('S', 'N') NOT NULL,
    imovelNomeProp enum ('S', 'N') NOT NULL,
    propNegocia enum ('S', 'N') NOT NULL,
    dataCadastro date NOT NULL,
    dataAtualizacao date NOT NULL,
    auditoria varchar (200) NOT NULL,
    fotos varchar (200) NOT NULL,
    idCorr int NOT NULL,
    idProp int NOT NULL,
    sitCadastro enum ('A', 'E') NOT NULL
);

CREATE TABLE Corretores (
    idCorr int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome varchar (200) NOT NULL,
    cpf bigint (11) NOT NULL,
    sexo enum ('M', 'F') NOT NULL,
    telefone varchar (13) NOT NULL,
    email varchar (200) NOT NULL,
    creci varchar (50) NOT NULL,
    sitCadastro enum ('A', 'E') NOT NULL,
    idUser int NOT NULL
);

CREATE TABLE Clientes (
    idCli int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome varchar (200) NOT NULL,
    cpf bigint (11) NOT NULL,
    sexo enum ('M', 'F') NOT NULL,
    endereco varchar (300) NOT NULL,
    numero smallint (5) NOT NULL,
    bairro varchar (150) NOT NULL,
    cidade varchar (150) NOT NULL,
    pais varchar (150) NOT NULL,
    cep int (8) NOT NULL,
    telefone varchar (13) NOT NULL,
    email varchar (200) NOT NULL,
    tipo enum ('V', 'P') NOT NULL,
    sitCadastro enum ('A', 'E') NOT NULL,
    idUser int NOT NULL
);

CREATE TABLE Usuarios (
    idUser int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome varchar (200) NOT NULL,
    email varchar (200) NOT NULL,
    senha varchar (20) NOT NULL,
    tipo enum ('Corretor', 'Cliente', 'Admin') NOT NULL,
    sitCadastro enum ('A', 'E') NOT NULL
);
 
ALTER TABLE Imoveis ADD CONSTRAINT FK_Imoveis_2
    FOREIGN KEY (idProp)
    REFERENCES Clientes (idCli);
 
ALTER TABLE Imoveis ADD CONSTRAINT FK_Imoveis_3
    FOREIGN KEY (idCorr)
    REFERENCES Corretores (idCorr);
 
ALTER TABLE Corretores ADD CONSTRAINT FK_Corretores_2
    FOREIGN KEY (idUser)
    REFERENCES Usuarios (idUser);
 
ALTER TABLE Clientes ADD CONSTRAINT FK_Clientes_2
    FOREIGN KEY (idUser)
    REFERENCES Usuarios (idUser);