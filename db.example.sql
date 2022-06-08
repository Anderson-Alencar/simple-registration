CREATE DATABASE IF NOT EXISTS challenge_dg;

USE challenge_dg;

CREATE TABLE persons (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(90) NOT NULL,
	birth_date DATE NOT NULL,
	PRIMARY KEY(id),
);

INSERT INTO persons (name, birth_date)
VALUES
	('Alessandro Mendes', '2008-7-04'),
	('Clarisse Santos', '1998-12-09'),
	('Aurélio Ramos', '1991-2-26'),
	('David Jacob Ferreira', '2002-6-06');