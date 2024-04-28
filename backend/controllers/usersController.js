const express = require('express');
const router = express.Router();
const Users = require('../models/usersModel');

// Listar todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await Users.listarUsuarios();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar usuários.' });
  }
});

// Adicionar um novo usuário
router.post('/users', async (req, res) => {
  const novoUsuario = req.body;
  try {
    // Definindo o tipo como cliente
    novoUsuario.tipo = 'cliente';
    await Users.adicionarUsuario(novoUsuario);
    res.status(201).json({ message: 'Usuário adicionado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar usuário.' });
  }
});

module.exports = router;
