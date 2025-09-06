package com.example.fullstackpaytour.controller;

import com.example.fullstackpaytour.dto.request.CandidatoRequest;
import com.example.fullstackpaytour.dto.response.CandidatoResponse;
import com.example.fullstackpaytour.service.CandidatoService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/candidatos")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CandidatoController {

    private final CandidatoService candidatoService;

    @PostMapping
    public ResponseEntity<CandidatoResponse> criarCandidato(
            @Valid @ModelAttribute CandidatoRequest candidatoRequest,
            @RequestParam("arquivoCurriculo") MultipartFile arquivoCurriculo,
            HttpServletRequest request) {

        var candidato = candidatoService.salvarCandidato(
                candidatoRequest.toEntity(),
                arquivoCurriculo,
                getClientIp(request)
        );

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(CandidatoResponse.fromEntity(candidato));
    }

    @GetMapping
    public ResponseEntity<List<CandidatoResponse>> listarCandidatos() {
        List<CandidatoResponse> candidatos = candidatoService.listarTodosCandidatos()
                .stream()
                .map(CandidatoResponse::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(candidatos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidatoResponse> buscarCandidatoPorId(@PathVariable Integer id) {
        return candidatoService.buscarCandidatoPorId(id)
                .map(candidato -> ResponseEntity.ok(CandidatoResponse.fromEntity(candidato)))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/verificar-email/{email}")
    public ResponseEntity<Boolean> verificarEmailExistente(@PathVariable String email) {
        return ResponseEntity.ok(candidatoService.verificarEmailExistente(email));
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip != null && !ip.isEmpty() && !"unknown".equalsIgnoreCase(ip)) {
            return ip.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}
