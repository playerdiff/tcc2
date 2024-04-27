const express = require('express');
const router = express.Router();
const Usuarios = require('../models/usersModel');

// Rota para cadastrar um novo usuário
router.post('/usuarios', async (req, res) => {
  const novoUsuario = req.body;
  try {
    await Usuarios.cadastrarUsuario(novoUsuario);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
});

module.exports = router;