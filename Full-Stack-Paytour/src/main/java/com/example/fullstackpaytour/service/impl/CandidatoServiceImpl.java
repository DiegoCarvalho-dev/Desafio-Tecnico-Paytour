package com.example.fullstackpaytour.service.impl;

import com.example.fullstackpaytour.model.Candidato;
import com.example.fullstackpaytour.repository.CandidatoRepository;
import com.example.fullstackpaytour.service.CandidatoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CandidatoServiceImpl implements CandidatoService {

    private final CandidatoRepository candidatoRepository;

    @Override
    public Candidato salvarCandidato(Candidato candidato, MultipartFile arquivo, String ipAddress) {
        return candidatoRepository.save(candidato);
    }

    @Override
    public List<Candidato> listarTodosCandidatos() {
        return candidatoRepository.findAll();
    }

    @Override
    public Optional<Candidato> buscarCandidatoPorId(Integer id) {
        return candidatoRepository.findById(id);
    }

    @Override
    public boolean verificarEmailExistente(String email) {
        return candidatoRepository.existsByEmail(email);
    }

    @Override
    public void validarArquivo(MultipartFile arquivo) {
    }
}