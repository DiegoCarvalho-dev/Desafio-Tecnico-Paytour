package com.example.fullstackpaytour.dto.response;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class CandidatoResponse {

    private Integer id;
    private String nomeCompleto;
    private String email;
    private String telefone;
    private String cargoDesejado;
    private String nivelEscolaridade;
    private String observacoes;
    private String nomeArquivo;
    private String tipoArquivo;
    private Long tamanhoArquivo;
    private String enderecoIp;
    private LocalDateTime dataEnvio;
    private LocalDateTime dataCriacao;

    public static CandidatoResponse fromEntity(com.example.fullstackpaytour.model.Candidato candidato) {
        CandidatoResponse response = new CandidatoResponse();
        response.setId(candidato.getId());
        response.setNomeCompleto(candidato.getNomeCompleto());
        response.setEmail(candidato.getEmail());
        response.setTelefone(candidato.getTelefone());
        response.setCargoDesejado(candidato.getCargoDesejado());
        response.setNivelEscolaridade(candidato.getNivelEscolaridade());
        response.setObservacoes(candidato.getObservacoes());
        response.setNomeArquivo(candidato.getNomeArquivo());
        response.setTipoArquivo(candidato.getTipoArquivo());
        response.setTamanhoArquivo(candidato.getTamanhoArquivo());
        response.setEnderecoIp(candidato.getEnderecoIp());
        response.setDataEnvio(candidato.getDataEnvio());
        response.setDataCriacao(candidato.getDataCriacao());
        return response;
    }
}