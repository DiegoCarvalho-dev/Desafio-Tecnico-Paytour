import React, { useState } from 'react';
import { candidatoService } from '../services/api';
import styled, { keyframes, css } from 'styled-components';

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;


const Background = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(-45deg, #2563eb, #7c3aed, #2563eb, #06b6d4);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        z-index: 0;
        pointer-events: none;
    }
`;

const Card = styled.div`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 3rem;
    width: 100%;
    max-width: 560px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 1;
    animation: ${fadeIn} 0.8s ease-out forwards;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
        transform: rotate(30deg);
        animation: shine 8s infinite linear;
        pointer-events: none;
    }

    @keyframes shine {
        0% { transform: translateX(-100%) rotate(30deg); }
        100% { transform: translateX(100%) rotate(30deg); }
    }
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
`;

const Logo = styled.div`
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.8rem;
    display: inline-block;
    animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const Title = styled.h1`
    color: #1e293b;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
    position: relative;
    display: inline-block;
    font-family: 'Poppins', sans-serif;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        border-radius: 2px;
    }
`;

const Subtitle = styled.p`
    color: #1e293b;
    font-size: 1.1rem;
    margin-top: 1.2rem;
    line-height: 1.5;
    font-weight: 500;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0.5rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Label = styled.label`
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    &::before {
        content: '•';
        color: #2563eb;
        margin-right: 8px;
        font-size: 1.2rem;
    }
`;

const InputBase = css`
    padding: 16px 18px;
    border: 1.5px solid #e5e7eb;
    border-radius: 14px;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    cursor: text;
    will-change: transform, box-shadow;
    color: #111827;

    &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15), 0 4px 10px rgba(0,0,0,0.1);
        transform: translateY(-2px);
    }

    &:hover {
        border-color: #93c5fd;
        box-shadow: 0 4px 8px rgba(0,0,0,0.08);
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

const Input = styled.input`
    ${InputBase}
`;

const Select = styled.select`
    ${InputBase}
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='%232563eb' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.186l3.71-3.955a.75.75 0 111.08 1.04l-4.25 4.52a.75.75 0 01-1.08 0l-4.25-4.52a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E") no-repeat right 1rem center;
    background-size: 1.25rem;
    color: #111827;
    cursor: pointer;

    option {
        color: #111827;
        background: white;
    }
`;

const TextArea = styled.textarea`
    ${InputBase}
    resize: vertical;
    min-height: 110px;
    font-family: inherit;
`;

const FileInput = styled.input`
    ${InputBase}
    padding: 14px;
    cursor: pointer;

    &::file-selector-button {
        padding: 10px 18px;
        background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-right: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 3px 6px rgba(37, 99, 235, 0.2);

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(37, 99, 235, 0.3);
        }
    }
`;

const Button = styled.button`
    padding: 18px;
    background: ${props => props.disabled
            ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
            : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'};
    color: white;
    border: none;
    border-radius: 14px;
    font-size: 1.05rem;
    font-weight: 700;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
    margin-top: 1rem;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
    position: relative;
    overflow: hidden;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    will-change: transform, box-shadow;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
        pointer-events: none;
    }

    &:hover {
        ${props => !props.disabled && `
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
      animation: pulse 2s infinite;
    `}
    }

    &:hover::before {
        ${props => !props.disabled && `
      left: 100%;
    `}
    }

    @keyframes pulse {
        0% { box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4); }
        50% { box-shadow: 0 8px 25px rgba(37, 99, 235, 0.6), 0 0 15px rgba(37, 99, 235, 0.4); }
        100% { box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4); }
    }
`;

const Message = styled.div`
    margin-top: 1.5rem;
    padding: 1.2rem;
    border-radius: 14px;
    font-weight: 500;
    text-align: center;
    animation: ${fadeIn} 0.5s ease forwards;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    ${props => props.success && `
    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    color: #065f46;
    border: 1px solid #a7f3d0;
    box-shadow: 0 3px 10px rgba(16, 185, 129, 0.15);
  `}

    ${props => props.error && `
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    color: #991b1b;
    border: 1px solid #fecaca;
    box-shadow: 0 3px 10px rgba(239, 68, 68, 0.15);
  `}
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FileHint = styled.span`
    font-size: 0.8rem;
    color: #64748b;
    margin-top: 0.4rem;
    font-style: italic;
`;

const CandidatoForm = () => {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telefone: '',
        cargoDesejado: '',
        nivelEscolaridade: '',
        observacoes: ''
    });
    const [arquivo, setArquivo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setArquivo(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMensagem('');

        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            if (arquivo) {
                data.append('arquivoCurriculo', arquivo);
            }

            const response = await candidatoService.criarCandidato(data);
            setMensagem('Candidatura enviada com sucesso! ✅');

            setFormData({
                nomeCompleto: '',
                email: '',
                telefone: '',
                cargoDesejado: '',
                nivelEscolaridade: '',
                observacoes: ''
            });
            setArquivo(null);

        } catch (error) {
            console.error('Erro:', error);
            setMensagem('Erro ao enviar candidatura. ❌');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Background>
            <Card>
                <Header>
                    <Logo>Paytour</Logo>
                    <Title>Faça parte do nosso time de talentos.</Title>
                    <Subtitle>
                        Envie seu currículo e dê o próximo passo à sua carreira.
                        Estamos ansiosos para conhecer seu talento.
                    </Subtitle>
                </Header>

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                        <Input
                            type="text"
                            id="nomeCompleto"
                            name="nomeCompleto"
                            value={formData.nomeCompleto}
                            onChange={handleInputChange}
                            placeholder="Digite seu nome completo"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="seu@email.com"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="telefone">Celular *</Label>
                        <Input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                            placeholder="(11) 99999-9999"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="cargoDesejado">Cargo Desejado *</Label>
                        <Input
                            type="text"
                            id="cargoDesejado"
                            name="cargoDesejado"
                            value={formData.cargoDesejado}
                            onChange={handleInputChange}
                            placeholder="Ex: Desenvolvedor Full Stack"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="nivelEscolaridade">Nível de Escolaridade *</Label>
                        <Select
                            id="nivelEscolaridade"
                            name="nivelEscolaridade"
                            value={formData.nivelEscolaridade}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Selecione sua escolaridade</option>
                            <option value="Ensino Médio">Ensino Médio</option>
                            <option value="Técnico">Técnico</option>
                            <option value="Superior Incompleto">Superior Incompleto</option>
                            <option value="Superior Completo">Superior Completo</option>
                            <option value="Pós-graduação">Pós-graduação</option>
                            <option value="Mestrado">Mestrado</option>
                            <option value="Doutorado">Doutorado</option>
                        </Select>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="observacoes">Observações</Label>
                        <TextArea
                            id="observacoes"
                            name="observacoes"
                            value={formData.observacoes}
                            onChange={handleInputChange}
                            placeholder="Conte um pouco sobre suas experiências, habilidades e conquistas..."
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="curriculo">Currículo *</Label>
                        <FileInput
                            type="file"
                            id="curriculo"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                        />
                        <FileHint>Aceitamos apenas arquivos .doc, .docx ou .pdf</FileHint>
                    </FormGroup>

                    <Button
                        type="submit"
                        disabled={loading}
                        aria-busy={loading}
                    >
                        {loading ? (
                            <>
                                <IconWrapper>⏳</IconWrapper> Enviando...
                            </>
                        ) : (
                            <>
                                <IconWrapper>🚀</IconWrapper> Enviar Candidatura
                            </>
                        )}
                    </Button>
                </Form>

                {mensagem && (
                    <Message success={mensagem.includes('sucesso')} error={mensagem.includes('Erro')}>
                        <IconWrapper>{mensagem.includes('sucesso') ? '✅' : '❌'}</IconWrapper>
                        {mensagem}
                    </Message>
                )}
            </Card>
        </Background>
    );
};

export default CandidatoForm;