const API_URL = 'http://localhost:5000/api';

// Operações relacionadas aos carros

export const getAllCarros = async () => {
  const response = await fetch(`${API_URL}/carros`);
  const data = await response.json();
  return data;
};

export const addCarro = async (carro) => {
  await fetch(`${API_URL}/carros`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carro),
  });
};

export const editCarro = async (id, carro) => {
  await fetch(`${API_URL}/carros/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carro),
  });
};

export const deleteCarro = async (id) => {
  await fetch(`${API_URL}/carros/${id}`, {
    method: 'DELETE',
  });
};

// Operações relacionadas aos usuários

export const cadastrarUsuario = async (usuario) => {
  await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
};

/*
export const getUsuarios = async () => {
  const response = await fetch(`${API_URL}/usuarios`);
  const data = await response.json();
  return data;
};

export const login = async (email, senha) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login. Por favor, tente novamente.');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
  } catch (error) {
    throw error;
  }
};

// Função para obter o token armazenado no localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};
*/