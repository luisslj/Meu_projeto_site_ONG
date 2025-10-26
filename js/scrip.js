// arquivo: server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota de cadastro
app.post('/api/cadastro', (req, res) => {
  const {
    nome,
    email,
    cpf,
    telefone,
    nascimento,
    endereco,
    cep,
    cidade,
    estado
  } = req.body;

  // Aqui você pode salvar os dados em um banco de dados
  console.log('Dados recebidos:', req.body);

  res.status(200).json({ mensagem: 'Cadastro realizado com sucesso!' });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
