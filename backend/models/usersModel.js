const connection = require('../db');

// Função para cadastrar um novo usuário
async function cadastrarUsuario(usuario) {
  try {
    usuario.tipo = 'cliente';
    const result = await connection.query('INSERT INTO users SET ?', usuario);
    return result;
  } catch (error) {
    throw error;
  }
}

/*
// Função para obter detalhes do usuário por ID
async function getUserById(id) {
  try {
    const results = await connection.query('SELECT * FROM users WHERE id = ?', id);
    return results[0]; // Assumindo que há apenas um usuário com o ID fornecido
  } catch (error) {
    throw error;
  }
}

// Função para obter usuário por email
async function getUserByEmail(email) {
  try {
    const results = await connection.query('SELECT * FROM users WHERE email = ?', email);
    return results[0]; // Assumindo que há apenas um usuário com o email fornecido
  } catch (error) {
    throw error;
  }
}
*/

module.exports = {
  cadastrarUsuario

  /*
  getUserById,
  getUserByEmail // Certifique-se de exportar a função getUserByEmail
  */
};