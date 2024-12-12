const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importar o pacote CORS
const authRoutes = require('./routes/authRoutes'); // Rotas de autenticação

const app = express();
const port = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Habilitar CORS para qualquer origem
app.use(cors());  // Isso permite que o servidor aceite requisições de qualquer origem

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/techlearn')
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida');
    })
    .catch(err => {
        console.error('Erro ao conectar no MongoDB', err);
    });

// Usando as rotas
app.use('/auth', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
