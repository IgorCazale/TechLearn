// Importar dependências
const express = require('express');
const bcrypt = require('bcryptjs'); // Para proteger e comparar senhas
const jwt = require('jsonwebtoken'); // Para gerar tokens
const User = require('../models/user'); // Modelo de usuário

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password, cpf, endereco } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            cpf,
            endereco,
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
});


// Rota de Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar se o usuário existe no banco de dados
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }

        // Comparar a senha enviada com a senha armazenada
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta!' });
        }

        // Gerar o token JWT
        const token = jwt.sign({ id: user._id }, 'chave_secreta', { expiresIn: '1h' });

        // Retornar o token ao usuário
        res.status(200).json({ message: 'Login bem-sucedido!', token });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor!', error: err.message });
    }
});

module.exports = router;
