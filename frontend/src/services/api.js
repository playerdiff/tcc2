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

export const signup = async (usuario) => {
  await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
};

export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};