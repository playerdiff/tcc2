const connection = require('../db');

// Função para listar todos os usuários
function listarUsuarios() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Função para adicionar um novo usuário
function adicionarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    // Verificar se o email ou CPF já existe antes de inserir
    connection.query('SELECT * FROM users WHERE email = ? OR cpf = ?', [usuario.email, usuario.cpf], (error, results) => {
      if (error) {
        reject(error);
      } else if (results.length > 0) {
        // Se já existir um usuário com o mesmo email ou CPF, retornar erro
        reject(new Error('Email ou CPF já cadastrado.'));
      } else {
        connection.query('INSERT INTO users SET ?', usuario, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      }
    });
  });
}

module.exports = {
  listarUsuarios,
  adicionarUsuario,
};
