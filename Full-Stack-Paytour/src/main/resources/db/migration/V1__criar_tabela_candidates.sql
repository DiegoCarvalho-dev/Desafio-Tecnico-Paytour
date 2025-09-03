CREATE TABLE candidatos (
                            id SERIAL PRIMARY KEY,
                            nome_completo VARCHAR(100) NOT NULL,
                            email VARCHAR(150) NOT NULL UNIQUE,
                            telefone VARCHAR(20) NOT NULL,
                            cargo_desejado VARCHAR(100) NOT NULL,
                            nivel_escolaridade VARCHAR(50) NOT NULL,
                            observacoes TEXT,
                            nome_arquivo VARCHAR(255),
                            tipo_arquivo VARCHAR(50),
                            tamanho_arquivo BIGINT,
                            endereco_ip VARCHAR(45) NOT NULL,
                            data_envio TIMESTAMP NOT NULL,
                            data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_candidates_email ON candidates(email);
CREATE INDEX idx_candidates_submission_date ON candidates(submission_date);