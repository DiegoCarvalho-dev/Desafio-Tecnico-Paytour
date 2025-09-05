import React, { useState } from 'react';
import { candidatoService } from '../services/api';

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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
            data.append('arquivoCurriculo', arquivo);

            const response = await candidatoService.criarCandidato(data);
            setMensagem('✅ Candidatura enviada com sucesso!');

            // Limpar formulário
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
            console.log('Erro:', error);
            setMensagem('❌ Erro ao enviar candidatura. Verifique o console.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Enviar Currículo - Paytour</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome Completo *</label>
                    <input
                        type="text"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Telefone *</label>
                    <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Cargo Desejado *</label>
                    <input
                        type="text"
                        name="cargoDesejado"
                        value={formData.cargoDesejado}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nível de Escolaridade *</label>
                    <select
                        name="nivelEscolaridade"
                        value={formData.nivelEscolaridade}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    >
                        <option value="">Selecione...</option>
                        <option value="Ensino Fundamental">Ensino Fundamental</option>
                        <option value="Ensino Médio">Ensino Médio</option>
                        <option value="Técnico">Técnico</option>
                        <option value="Superior Incompleto">Superior Incompleto</option>
                        <option value="Superior Completo">Superior Completo</option>
                        <option value="Pós-graduação">Pós-graduação</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                    </select>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Observações</label>
                    <textarea
                        name="observacoes"
                        value={formData.observacoes}
                        onChange={handleInputChange}
                        rows="3"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Currículo (PDF, DOC, DOCX) *</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        style={{ width: '100%', padding: '10px' }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '12px',
                        backgroundColor: loading ? '#ccc' : '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                >
                    {loading ? '⏳ Enviando...' : '📤 Enviar Candidatura'}
                </button>
            </form>

            {mensagem && (
                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: mensagem.includes('✅') ? '#d4edda' : '#f8d7da',
                    border: `1px solid ${mensagem.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
                    borderRadius: '4px',
                    color: mensagem.includes('✅') ? '#155724' : '#721c24'
                }}>
                    {mensagem}
                </div>
            )}
        </div>
    );
};

export default CandidatoForm;