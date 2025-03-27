# Tasks API Express

## 📘 Introdução

O projeto **Tasks API Express** é uma aplicação backend desenvolvida em Node.js utilizando o framework Express. Seu objetivo é fornecer uma API para gerenciamento de tarefas, permitindo operações como criação, leitura, atualização e exclusão de tarefas.

---

## 📑 Índice

- [Instalação](#🔧-instalação)
- [Uso](#🚀-uso)
- [Recursos](#🛠️-recursos)
- [Dependências](#📦-dependências)
- [Contribuidores](#👥-contribuidores)

---

## 🔧 Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/MatheusFQueiroz/tasks-api-express.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd tasks-api-express/backend
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor:**

   ```bash
   npm start
   ```
4. **Inicie o servidor em desenvolvimento:**

   ```bash
   npm run dev
   ```

O servidor será iniciado e estará pronto para receber requisições na porta configurada (por padrão, a 3333).

---

## 🚀 Uso

Após iniciar o servidor, você pode interagir com a API utilizando ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

A API permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em tarefas.

### 🔹 Exemplo de requisição GET para listar todas as tarefas:

```http
GET /tasks
```

### 🔹 Exemplo de requisição POST para criar uma nova tarefa:

```http
POST /tasks
Content-Type: application/json

{
  "ds_task": "Tarefa"
}
```

### 🔹 Exemplo de requisição DELETE para deletar uma tarefa:

```http
DELETE /tasks/id
```

### 🔹 Exemplo de requisição PUT para atualizar uma tarefa:

```http
PUT /tasks/id
Content-Type: application/json

{
  "ds_task": "Tarefa",
  "st_task": "Pendente"
}
```

---

## 🛠️ Recursos

- ✅ **Criação de tarefas** – Adicione novas tarefas ao sistema.
- 📖 **Leitura de tarefas** – Recupere a lista de tarefas existentes.
- ✏️ **Atualização de tarefas** – Modifique os detalhes de uma tarefa existente.
- ❌ **Exclusão de tarefas** – Remova tarefas do sistema.

---

## 📦 Dependências

As principais dependências do projeto incluem:

- [Express](https://expressjs.com/) – Framework web para Node.js

Outras dependências podem ser encontradas no arquivo `package.json`.

---

## 👥 Contribuidores

Este projeto foi desenvolvido por:

- [Matheus F. Queiroz](https://github.com/MatheusFQueiroz)
- [Utilizando o vídeo do canal Manual do Dev 'Como criar uma API completa com NodeJS e Express | Backend'](https://youtu.be/Cdu0WJhI-d8?si=7cqL-IFSKIhPm8QL)
