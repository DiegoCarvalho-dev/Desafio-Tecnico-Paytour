package com.example.fullstackpaytour.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
import javax.validation.constraints.*;

@Data
public class CandidatoRequest {

    @NotBlank(message = "Nome completo é obrigatório")
    @Size(max = 100, message = "Nome completo deve ter no máximo 100 caracteres")
    private String nomeCompleto;

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email deve ser válido")
    @Size(max = 150, message = "Email deve ter no máximo 150 caracteres")
    private String email;

    @NotBlank(message = "Telefone é obrigatório")
    @Pattern(regexp = "^\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}$",
            message = "Telefone deve estar no formato (XX) XXXXX-XXXX")
    private String telefone;

    @NotBlank(message = "Cargo desejado é obrigatório")
    @Size(max = 100, message = "Cargo desejado deve ter no máximo 100 caracteres")
    private String cargoDesejado;

    @NotBlank(message = "Nível de escolaridade é obrigatório")
    private String nivelEscolaridade;

    @Size(max = 500, message = "Observações deve ter no máximo 500 caracteres")
    private String observacoes;

    @NotNull(message = "Arquivo do currículo é obrigatório")
    private MultipartFile arquivoCurriculo;
}