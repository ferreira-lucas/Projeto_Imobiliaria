Use imobiliaria;

INSERT INTO usuarios (idUser, nome, email, senha, tipo, sitCadastro) VALUE (DEFAULT, 'Lucas Ferreira', 'lucasfpereira29@gmail.com', 'imobiliaria2929', 'Admin', 'A');
INSERT INTO usuarios (idUser, nome, email, senha, tipo, sitCadastro) VALUE (DEFAULT, 'Luane de Almeida', 'luaneagon@gmail.com', '12345', 'Corretor', 'A');
INSERT INTO usuarios (idUser, nome, email, senha, tipo, sitCadastro) VALUE (DEFAULT, 'Jandaíra Ferreira', 'jandaferreira2009@hotmail.com', '67890', 'Cliente', 'A');
INSERT INTO corretores (idCorr, nome, cpf, sexo, telefone, email, creci, sitCadastro, idUser) VALUE (DEFAULT, 'LUCAS FERREIRA', 85614203087, 'M', '5551996859774', 'lucasfpereira29@gmail.com', '1234abcd', 'A', 1);