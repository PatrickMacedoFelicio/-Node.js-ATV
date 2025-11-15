# 🚀 API REST com Node.js (Express)

Este projeto é uma atividade prática da disciplina **Programação
Back-End Avançada**, com o objetivo de criar uma API simples utilizando
o framework **Express** e aplicar princípios fundamentais da arquitetura
REST, como *statelessness*, uso de JSON e rotas bem definidas.

------------------------------------------------------------------------

## 📌 Funcionalidades

-   Endpoint `GET /hello` retornando uma mensagem em JSON\
-   Servidor Express com middleware de JSON\
-   Respostas independentes (princípio de *statelessness*)\
-   Script de desenvolvimento com **nodemon**

------------------------------------------------------------------------

### 3️⃣ **Instale as dependências**

``` bash
npm install
```

### 4️⃣ **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz:

``` env
PORT=3000
NODE_ENV=development
```

------------------------------------------------------------------------

## 🚀 Executando o servidor

### ▶️ **Modo desenvolvimento (com nodemon)**

``` bash
npm run dev:express
```

### ▶️ **Modo produção**

``` bash
npm run start:express
```

O servidor iniciará em:

    http://localhost:3000

------------------------------------------------------------------------

## 🌐 Endpoint disponível

### **GET /hello**

📥 Requisição:

``` bash
curl.exe http://localhost:3000/hello
```

📤 Resposta:

``` json
{
  "message": "API REST com Node.js funcionando!"
}
```
