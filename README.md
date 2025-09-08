# Paytour - Sistema de Recrutamento Full Stack

#### Este projeto é uma aplicação full stack para gerenciamento de candidaturas, desenvolvida com Spring Boot no backend e React no frontend.

---

📋 **Índice**

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Execução da Aplicação](#-execução-da-aplicação)
- [API Endpoints](#-api-endpoints)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Suporte](#-suporte)

---

## 🚀 Visão Geral

#### O sistema Paytour permite que candidatos enviem suas informações e currículos para oportunidades de emprego. A aplicação oferece um formulário intuitivo e responsivo no frontend, enquanto o backend processa e armazena os dados de forma segura.

---

## 💻 Tecnologias Utilizadas

**Backend**  
- Java 17+  
- Spring Boot 3.x  
- Spring Data JPA  
- H2 Database (desenvolvimento) / PostgreSQL (produção)  
- Flyway (migrações de banco de dados)  
- Maven (gerenciamento de dependências)  

**Frontend**  
- React 18  
- Vite (build tool)  
- Styled Components (estilização)  
- Axios (consumo de API)  

**Ferramentas de Desenvolvimento**  
- Git (controle de versão)  
- Postman (testes de API)  
- Visual Studio Code / IntelliJ IDEA  

---

## ⚙️ Funcionalidades

**Backend**
- ✅ Cadastro de candidatos com validação  
- ✅ Upload de currículos (PDF, DOC, DOCX)  
- ✅ Validação de tipos de arquivo  
- ✅ API RESTful com tratamento de exceções  
- ✅ Health check endpoint  
- ✅ Migrações de banco de dados com Flyway  

**Frontend**
- ✅ Formulário responsivo e moderno  
- ✅ Validação de campos em tempo real  
- ✅ Upload de arquivos com preview  
- ✅ Feedback visual para o usuário  
- ✅ Animações e transições suaves  
- ✅ Design system consistente  

**Docker**
- ✅ Containerização do backend e frontend  
- ✅ Rede interna entre containers  
- ✅ Configuração de variáveis de ambiente para DB e API  

---

## 📋 Pré-requisitos

Antes de executar a aplicação, certifique-se de ter instalado:  
- Java JDK 17+  
- Node.js 16+  
- Maven 3.6+  
- Git  
- Docker & Docker Compose  
- Banco de dados (H2 para desenvolvimento ou PostgreSQL para produção)  

---

## 🛠️ Instalação e Configuração

1. **Clone o repositório**
```bash

git clone https://github.com/DiegoCarvalho-dev/Desafio-Tecnico-Paytour.git
cd fullstack-paytour
```
2. **Configuração do Backend**
```bash
cd backend

# Configurar o banco de dados (application.properties)
# Desenvolvimento (H2)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password

# Produção (PostgreSQL)
# spring.datasource.url=jdbc:postgresql://db:5432/paytour
# spring.datasource.username=postgres
# spring.datasource.password=admin

# Instalar dependências
mvn clean install
```

3. **Configuração do Frontend**
```bash
cd frontend

# Instalar dependências
npm install

# Configurar a URL da API (services/api.js)
const BASE_URL = 'http://localhost:8080'; // ou URL do backend
```
## 🚀 Execução da Aplicação

### Executar o Backend (sem Docker)
```bash
cd backend
mvn spring-boot:run

# O backend estará disponível em: http://localhost:8080
```

### Executar o Frontend (sem Docker)
```bash
cd frontend
npm run dev

# O frontend estará disponível em: http://localhost:5173
```
### Executar com Docker
```bash
# Build das imagens
docker-compose build

# Executar os containers
docker-compose up
```
## 📡 API Endpoints
```bash
Candidatos

Método	Endpoint	Descrição
POST /api/candidatos  Cria um novo candidato
GET	/api/candidatos  Lista todos os candidatos
GET	/api/candidatos/{id}  Obtém um candidato por ID
DELETE	/api/candidatos/{id}  Remove um candidato

Health Check

Método	  Endpoint	  Descrição
GET	     /api/health  Verifica o status da API
```
## 🌐 Deploy

### Backend (Spring Boot)
```bash
mvn clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar

Frontend (React)
npm run build
npm run preview
```
## 📞 Suporte

### Para dúvidas ou problemas, entre em contato:

### Email: diegoricardo2527@gmail.com

### Issues: GitHub Issues
