# **📌 Projeto Node.js – API REST com Express**

Este projeto foi desenvolvido como parte da disciplina **Programação Back-End Avançada**, com foco em estudar:

- Princípios da arquitetura REST  
- Node.js (event loop, I/O não bloqueante, assíncrono)  
- Criação de APIs com **Express**

O projeto contém **duas implementações de servidor** usando Express:

✔️ **app.js** — servidor principal da atividade  
✔️ **server.js** — servidor simples com a rota `/hello`

---

## 🚀 **Tecnologias utilizadas**

- Node.js
- Express 5
- Nodemon
- Dotenv

---

## 📂 **Estrutura do Projeto**

```
-Node.js-ATV/
│── node_modules/
│── .env
│── app.js
│── server.js
│── package.json
│── README.md
```

---

## ⚙️ **Instalação**

Instale todas as dependências:

```sh
npm install
```

(Se quiser usar variáveis de ambiente, configure o arquivo `.env`.)

---

## ▶️ **Como executar o projeto**

### 🔵 Rodar servidor Express (app.js) com nodemon
```sh
npm run dev:express
```

### 🔵 Rodar servidor Express (app.js) normalmente
```sh
npm run start:express
```

### 🟣 Rodar o server.js manualmente
```sh
node server.js
```

---

## 🌐 **Rotas Disponíveis**

### ✔️ server.js
```
GET /hello
```

Retorno esperado:
```json
{
  "message": "API REST com Node.js funcionando!"
}
```

### ✔️ app.js
As rotas podem variar dependendo de como você configurou o arquivo.  
Se quiser, posso documentar todas — basta enviar o conteúdo atualizado.

---

## 🧪 **Testando a API**

Exemplo usando curl:

```sh
curl http://localhost:3000/hello
```

---

## 📘 **Objetivo da Atividade**

- Demonstrar compreensão da arquitetura REST  
- Implementar servidor com Express  
- Criar rotas REST básicas  
- Entender o fluxo assíncrono do Node.js

---

Se quiser deixar o README mais bonito, adicionar badges, gifs, ou documentação extra, posso fazer também! 🚀