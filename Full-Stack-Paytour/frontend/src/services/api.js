import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export const candidatoService = {
    criarCandidato: (formData) => api.post('/candidatos', formData),
    listarCandidatos: () => api.get('/candidatos'),
    buscarCandidatoPorId: (id) => api.get(`/candidatos/${id}`),
    verificarEmail: (email) => api.get(`/candidatos/verificar-email/${email}`),
};

export default api;