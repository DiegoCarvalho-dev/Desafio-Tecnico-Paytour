package com.example.fullstackpaytour.service.validation;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;

@Service
public class FileValidationService {

    private static final List<String> EXTENSOES_PERMITIDAS = Arrays.asList("pdf", "doc", "docx");
    private static final long TAMANHO_MAXIMO_BYTES = 1048576;

    public void validarArquivo(MultipartFile arquivo) {
        if (arquivo == null || arquivo.isEmpty()) {
            throw new IllegalArgumentException("Arquivo é obrigatório");
        }

        if (arquivo.getSize() > TAMANHO_MAXIMO_BYTES) {
            throw new IllegalArgumentException("Arquivo excede o tamanho máximo de 1MB");
        }

        String nomeArquivo = arquivo.getOriginalFilename();
        if (nomeArquivo != null) {
            String extensao = nomeArquivo.substring(nomeArquivo.lastIndexOf(".") + 1).toLowerCase();
            if (!EXTENSOES_PERMITIDAS.contains(extensao)) {
                throw new IllegalArgumentException("Apenas arquivos PDF, DOC e DOCX são permitidos");
            }
        }
    }

    public String extrairExtensao(MultipartFile arquivo) {
        String nomeArquivo = arquivo.getOriginalFilename();
        if (nomeArquivo != null && nomeArquivo.contains(".")) {
            return nomeArquivo.substring(nomeArquivo.lastIndexOf(".") + 1).toLowerCase();
        }
        return "";
    }
}