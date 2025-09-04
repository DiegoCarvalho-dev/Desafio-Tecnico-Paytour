package com.example.fullstackpaytour.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthCheckController {

    @GetMapping
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok(" API Paytour Careers está funcionando!");
    }

    @GetMapping("/database")
    public ResponseEntity<String> databaseCheck() {
        return ResponseEntity.ok("Conexão com o banco de dados está OK!");
    }
}