package com.example.fullstackpaytour.service;

import com.example.fullstackpaytour.model.Candidato;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Optional;

public interface CandidatoService {

    Candidato salvarCandidato(Candidato candidato, MultipartFile arquivo, String ipAddress);

    List<Candidato> listarTodosCandidatos();

    Optional<Candidato> buscarCandidatoPorId(Integer id);

    boolean verificarEmailExistente(String email);

    void validarArquivo(MultipartFile arquivo);
}