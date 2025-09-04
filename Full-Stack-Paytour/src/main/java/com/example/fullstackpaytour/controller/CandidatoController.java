package com.example.fullstackpaytour.controller;

import com.example.fullstackpaytour.dto.request.CandidatoRequest;
import com.example.fullstackpaytour.dto.response.CandidatoResponse;
import com.example.fullstackpaytour.dto.response.ErrorResponse;
import com.example.fullstackpaytour.model.Candidato;
import com.example.fullstackpaytour.service.CandidatoService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/candidatos")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CandidatoController {

    private final CandidatoService candidatoService;

    @PostMapping
    public ResponseEntity<?> criarCandidato(
            @Valid @ModelAttribute CandidatoRequest candidatoRequest,
            @RequestParam("arquivoCurriculo") MultipartFile arquivoCurriculo,
            HttpServletRequest request) {

        try {
            var candidatoSalvo = candidatoService.salvarCandidato(
                    convertToEntity(candidatoRequest),
                    arquivoCurriculo,
                    getClientIp(request)
            );

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(CandidatoResponse.fromEntity(candidatoSalvo));

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body(new ErrorResponse(400, "Bad Request", e.getMessage(), request.getRequestURI()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ErrorResponse(500, "Internal Server Error", "Erro ao processar a solicitação", request.getRequestURI()));
        }
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
    public ResponseEntity<?> buscarCandidatoPorId(@PathVariable Integer id) {
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
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }

        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }

        return ip;
    }

    private Candidato convertToEntity(CandidatoRequest request) {
        Candidato candidato = new Candidato();
        candidato.setNomeCompleto(request.getNomeCompleto());
        candidato.setEmail(request.getEmail());
        candidato.setTelefone(request.getTelefone());
        candidato.setCargoDesejado(request.getCargoDesejado());
        candidato.setNivelEscolaridade(request.getNivelEscolaridade());
        candidato.setObservacoes(request.getObservacoes());
        candidato.setDataEnvio(LocalDateTime.now());
        return candidato;
    }
}