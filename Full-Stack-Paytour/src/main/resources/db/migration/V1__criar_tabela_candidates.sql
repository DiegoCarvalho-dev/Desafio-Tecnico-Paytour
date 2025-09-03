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
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_candidates_email ON candidates(email);
CREATE INDEX idx_candidates_submission_date ON candidates(submission_date);