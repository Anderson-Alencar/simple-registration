CREATE DATABASE IF NOT EXISTS challenge_dg;

USE challenge_dg;

CREATE TABLE Peoples (
	id INT NOT NULL AUTO_INCREMENT,
	fullName VARCHAR(90) NOT NULL,
	birthDate DATE NOT NULL,
	PRIMARY KEY(id),
);

INSERT INTO Peoples (fullName, birthDate)
VALUES
	('Alessandro Mendes', '2008-7-04'),
	('Clarisse Santos', '1998-12-09'),
	('Aurélio Ramos', '1991-2-26'),
	('David Jacob Ferreira', '2002-6-06');