package com.example.fullstackpaytour.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@RestController
@RequestMapping("/api/health")
public class HealthCheckController {

    private final DataSource dataSource;

    public HealthCheckController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping
    public ResponseEntity<String> healthCheck() {
        try (Connection connection = dataSource.getConnection()) {
            return ResponseEntity.ok(" Aplicação e banco de dados estão operacionais!");
        } catch (SQLException e) {
            return ResponseEntity.status(503)
                    .body(" Falha na conexão com o banco de dados: " + e.getMessage());
        }
    }

    @GetMapping("/database")
    public ResponseEntity<String> verificarConexaoBanco() {
        try (Connection connection = dataSource.getConnection()) {
            boolean conexaoValida = connection.isValid(2);
            if (conexaoValida) {
                return ResponseEntity.ok(" Conexão com o banco de dados está válida e funcionando!");
            } else {
                return ResponseEntity.status(503).body(" Conexão com o banco de dados é inválida");
            }
        } catch (SQLException e) {
            return ResponseEntity.status(503)
                    .body("Falha na conexão com o banco de dados: " + e.getMessage());
        }
    }
}