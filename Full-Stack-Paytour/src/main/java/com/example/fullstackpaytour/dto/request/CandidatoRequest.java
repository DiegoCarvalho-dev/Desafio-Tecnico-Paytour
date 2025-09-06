package com.example.fullstackpaytour.dto.request;

import com.example.fullstackpaytour.model.Candidato;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CandidatoRequest {

    @NotBlank(message = "O nome completo é obrigatório")
    private String nomeCompleto;

    @Email(message = "E-mail inválido")
    @NotBlank(message = "O e-mail é obrigatório")
    private String email;

    @NotBlank(message = "O telefone é obrigatório")
    private String telefone;

    @NotBlank(message = "O cargo desejado é obrigatório")
    private String cargoDesejado;

    @NotBlank(message = "O nível de escolaridade é obrigatório")
    private String nivelEscolaridade;

    private String observacoes;

    public Candidato toEntity() {
        Candidato candidato = new Candidato();
        candidato.setNomeCompleto(this.nomeCompleto);
        candidato.setEmail(this.email);
        candidato.setTelefone(this.telefone);
        candidato.setCargoDesejado(this.cargoDesejado);
        candidato.setNivelEscolaridade(this.nivelEscolaridade);
        candidato.setObservacoes(this.observacoes);
        candidato.setDataEnvio(LocalDateTime.now());
        return candidato;
    }
}
