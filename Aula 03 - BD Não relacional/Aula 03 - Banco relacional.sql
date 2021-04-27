CREATE TABLE veiculo (
	id INT PRIMARY KEY IDENTITY,
	placa VARCHAR(20),
	renavam VARCHAR(20),
	cor	VARCHAR(40),
	motor VARCHAR(10)
)

CREATE TABLE proprietario (
	id INT PRIMARY KEY IDENTITY,
	nome VARCHAR(60),
	telefone VARCHAR(60),
	endereco VARCHAR(100),
	observacoes TEXT
)

CREATE TABLE apolice (
	id INT PRIMARY KEY IDENTITY,
	proprietario INT,
	veiculo INT,
	CONSTRAINT fk_apolice_proprietario FOREIGN KEY (proprietario) REFERENCES proprietario(id),
	CONSTRAINT fk_apolice_veiculo FOREIGN KEY (veiculo) REFERENCES veiculo(id)
)

CREATE TABLE sinistro (
	id INT PRIMARY KEY IDENTITY,
	apolice INT,
	data	DATETIME,
	descricao TEXT,
	franquia DECIMAL(10,2),
	CONSTRAINT fk_sinistro_apolice FOREIGN KEY (apolice) REFERENCES apolice(id),
)