Projeto desenvolvido utilizando FastAPI, SQLite, HTML, CSS e JavaScript para gerenciamento de uma biblioteca comunitária.

## Objetivo

O sistema permite visualizar livros cadastrados, realizar reservas e gerenciar o acervo através de uma API RESTful com operações CRUD.

---

## Tecnologias Utilizadas

### Back-end
- Python
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic

### Front-end
- HTML5
- CSS3
- JavaScript

---

## Arquitetura

O projeto segue uma arquitetura cliente-servidor.

### Front-end
Responsável pela interface do usuário.

- HTML
- CSS
- JavaScript

### Back-end
Responsável pelas regras de negócio e comunicação com o banco de dados.

- FastAPI
- SQLAlchemy
- SQLite

### Banco de Dados

Utilizamos SQLite para armazenar os livros cadastrados.

Tabela:

| Campo | Tipo |
|---------|---------|
| id | Integer |
| titulo | String |
| autor | String |
| imagem | String |
| disponivel | Boolean |

---

## Estrutura do Projeto

```text
projeto/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── biblioteca.db
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Como Executar

### 1 - Instalar Dependências

```bash
pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install pydantic
```

ou

```bash
pip install -r requirements.txt
```

---

### 2 - Executar a API

```bash
uvicorn main:app --reload
```

A API ficará disponível em:

```text
http://localhost:8000
```

---

### 3 - Acessar a documentação Swagger

```text
http://localhost:8000/docs
```

---

### 4 - Abrir o Front-end

Abra o arquivo:

```text
index.html
```

ou utilize a extensão Live Server do VS Code.

---

## Rotas da API

### GET /

Retorna mensagem de funcionamento da API.

Exemplo:

```json
{
  "mensagem": "API funcionando"
}
```

---

### GET /livros

Lista todos os livros cadastrados.

---

### GET /livros/{id}

Busca um livro pelo ID.

---

### POST /livros

Cria um novo livro.

Exemplo:

```json
{
  "titulo": "Diário de um Banana",
  "autor": "Jeff Kinney",
  "imagem": "https://...",
  "disponivel": true
}
```

---

### PUT /livros/{id}

Atualiza um livro existente.

---

### DELETE /livros/{id}

Remove um livro do banco de dados.

---

## Comunicação Front-end e Back-end

O front-end consome os dados da API através de requisições HTTP utilizando a função:

```javascript
fetch()
```

Os dados são trocados em formato JSON.

Exemplo:

```javascript
fetch("http://localhost:8000/livros")
```

---

## Persistência dos Dados

Os dados são armazenados no arquivo:

```text
biblioteca.db
```

utilizando SQLite.

Dessa forma, os registros permanecem salvos mesmo após reiniciar a aplicação.

---

## Autores

- Bruna Torres
- Gabriel Barros

---

## Documentação Automática

A documentação da API é gerada automaticamente pelo FastAPI através do Swagger/OpenAPI.

Disponível em:

```text
http://localhost:8000/docs
```