package com.example.fullstackpaytour.service.impl;

import com.example.fullstackpaytour.model.Candidato;
import com.example.fullstackpaytour.repository.CandidatoRepository;
import com.example.fullstackpaytour.service.CandidatoService;
import com.example.fullstackpaytour.service.validation.FileValidationService;
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
    private final FileValidationService fileValidationService;

    @Override
    public Candidato salvarCandidato(Candidato candidato, MultipartFile arquivo, String ipAddress) {
        try {
            System.out.println("=== INICIANDO SALVAMENTO ===");
            System.out.println("Dados recebidos - Nome: " + candidato.getNomeCompleto());
            System.out.println("Dados recebidos - Email: " + candidato.getEmail());
            System.out.println("Arquivo: " + arquivo.getOriginalFilename() + " (" + arquivo.getSize() + " bytes)");

            
            boolean emailExiste = verificarEmailExistente(candidato.getEmail());
            System.out.println("Verificação email: " + (emailExiste ? "EXISTE" : "NÃO EXISTE"));

            if (emailExiste) {
                throw new IllegalArgumentException("Email já cadastrado: " + candidato.getEmail());
            }


            fileValidationService.validarArquivo(arquivo);
            System.out.println("✅ Arquivo validado com sucesso");


            candidato.setNomeArquivo(arquivo.getOriginalFilename());
            candidato.setTipoArquivo(fileValidationService.extrairExtensao(arquivo));
            candidato.setTamanhoArquivo(arquivo.getSize());
            candidato.setEnderecoIp(ipAddress);
            candidato.setDataEnvio(LocalDateTime.now());

            System.out.println("Dados completos para salvar:");
            System.out.println("- Nome: " + candidato.getNomeCompleto());
            System.out.println("- Email: " + candidato.getEmail());
            System.out.println("- Telefone: " + candidato.getTelefone());
            System.out.println("- IP: " + candidato.getEnderecoIp());
            System.out.println("- Arquivo: " + candidato.getNomeArquivo());

            System.out.println("🔄 Salvando no banco de dados...");
            Candidato saved = candidatoRepository.save(candidato);
            System.out.println("✅ Candidato salvo com ID: " + saved.getId());

            System.out.println("🔍 Verificando persistência no banco...");
            Optional<Candidato> verificado = candidatoRepository.findById(saved.getId());

            if (verificado.isPresent()) {
                System.out.println("🎉 CONFIRMADO: Dado persistido no banco!");
                System.out.println("ID: " + verificado.get().getId());
                System.out.println("Email: " + verificado.get().getEmail());
            } else {
                System.out.println("❌ ALERTA: Dado NÃO persistiu no banco!");
                System.out.println("ID retornado pelo save: " + saved.getId());
                System.out.println("Mas não encontrado no banco!");
            }

            return saved;

        } catch (Exception e) {
            System.err.println("❌ ERRO CRÍTICO NO SALVAMENTO");
            System.err.println("Tipo: " + e.getClass().getSimpleName());
            System.err.println("Mensagem: " + e.getMessage());
            System.err.println("Causa: " + (e.getCause() != null ? e.getCause().getMessage() : "Nenhuma"));
            e.printStackTrace();
            throw e;
        }
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
        fileValidationService.validarArquivo(arquivo);
    }
}