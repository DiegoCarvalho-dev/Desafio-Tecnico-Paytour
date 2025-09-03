CREATE TABLE candidatos (
                            id SERIAL PRIMARY KEY,
                            name VARCHAR(100) NOT NULL,
                            email VARCHAR(150) NOT NULL UNIQUE,
                            phone VARCHAR(20) NOT NULL,
                            desired_position VARCHAR(100) NOT NULL,
                            education_level VARCHAR(50) NOT NULL,
                            observations TEXT,
                            file_name VARCHAR(255),
                            file_type VARCHAR(50),
                            file_size BIGINT,
                            ip_address VARCHAR(45) NOT NULL,
                            submission_date TIMESTAMP NOT NULL,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_candidates_email ON candidates(email);
CREATE INDEX idx_candidates_submission_date ON candidates(submission_date);
CREATE INDEX idx_candidates_education_level ON candidates(education_level);

COMMENT ON TABLE candidates IS 'Tabela para armazenar currículos de candidatos';
COMMENT ON COLUMN candidates.name IS 'Nome completo do candidato';
COMMENT ON COLUMN candidates.email IS 'Email do candidato (único)';
COMMENT ON COLUMN candidates.phone IS 'Telefone do candidato';
COMMENT ON COLUMN candidates.desired_position IS 'Cargo desejado pelo candidato';
COMMENT ON COLUMN candidates.education_level IS 'Nível de escolaridade do candidato';
COMMENT ON COLUMN candidates.observations IS 'Observações opcionais do candidato';
COMMENT ON COLUMN candidates.file_name IS 'Nome do arquivo de currículo';
COMMENT ON COLUMN candidates.file_type IS 'Tipo do arquivo (pdf, doc, docx)';
COMMENT ON COLUMN candidates.file_size IS 'Tamanho do arquivo em bytes';
COMMENT ON COLUMN candidates.ip_address IS 'Endereço IP de origem do envio';
COMMENT ON COLUMN candidates.submission_date IS 'Data e hora do envio do formulário';
COMMENT ON COLUMN candidates.created_at IS 'Data de criação do registro';
COMMENT ON COLUMN candidates.updated_at IS 'Data da última atualização do registro';