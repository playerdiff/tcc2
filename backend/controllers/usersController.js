const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuarios = require('../models/usersModel');

// Rota para cadastrar um novo usuário
router.post('/usuarios', async (req, res) => {
  const novoUsuario = req.body;
  try {
    if (!novoUsuario.email || !novoUsuario.senha || !novoUsuario.cpf || !novoUsuario.endereco) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    await Usuarios.cadastrarUsuario(novoUsuario);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
});

/*
// Rota para obter detalhes do usuário por ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuarios.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar detalhes do usuário.' });
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await Usuarios.getUserByEmail(email);
    if (!user || !bcrypt.compareSync(senha, user.senha)) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }

    console.log("Usuário logado:", user); // Adicione este console.log para depuração

    const tokenPayload = { id: user.id, email: user.email, tipo: user.tipo }; // Incluir o tipo de usuário no payload
    const token = jwt.sign(tokenPayload, 'seuSegredo');
    console.log("Token gerado:", token); // Adicione este console.log para depuração

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
});
*/

module.exports = router;