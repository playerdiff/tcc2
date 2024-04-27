const connection = require('../db');

// Função para cadastrar um novo usuário
function cadastrarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', usuario, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  cadastrarUsuario
};