import React, { useEffect, useState } from 'react';
import { deleteCarro, getAllCarros } from '../services/api';
import CarroForm from './CarroForm';

const CarroList = () => {
  const [carros, setCarros] = useState([]);
  const [editCarroData, setEditCarroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCarros();
        setCarros(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCarro(id);
      setCarros(carros.filter((carro) => carro.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (carro) => {
    setEditCarroData(carro);
  };

  const handleFormSubmit = () => {
    setEditCarroData(null);
    getAllCarros().then((response) => setCarros(response));
  };

  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            {carro.marca} - {carro.modelo} ({carro.ano}) - Chassi: {carro.chassi} - Placa: {carro.placa}
            <button onClick={() => handleDelete(carro.id)}>Excluir</button>
            <button onClick={() => handleEdit(carro)}>Editar</button>
          </li>
        ))}
      </ul>
      {editCarroData ? (
        <div>
          <h2>Editar Carro</h2>
          <CarroForm onSubmit={handleFormSubmit} carro={editCarroData} />
        </div>
      ) : (
        <div>
          <h2>Adicionar Carro</h2>
          <CarroForm onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
};

export default CarroList;
