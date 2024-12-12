const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificação de dados
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        // Verificar se o usuário já existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Usuário já cadastrado" });
        }

        // Criar novo usuário
        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: "Usuário registrado com sucesso" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro no servidor" });
    }
};
