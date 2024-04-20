import React, { useState } from 'react';
import { addCarro, editCarro } from '../services/api';

const CarroForm = ({ onSubmit, carro }) => {
  const [marca, setMarca] = useState(carro ? carro.marca : '');
  const [modelo, setModelo] = useState(carro ? carro.modelo : '');
  const [ano, setAno] = useState(carro ? carro.ano : '');
  const [chassi, setChassi] = useState(carro ? carro.chassi : '');
  const [placa, setPlaca] = useState(carro ? carro.placa : '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCarro = { marca, modelo, ano, chassi, placa };

    try {
      if (carro) {
        await editCarro(carro.id, newCarro);
      } else {
        await addCarro(newCarro);
      }
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Marca:
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />
      </label>
      <label>
        Modelo:
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
      </label>
      <label>
        Ano:
        <input
          type="text"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
        />
      </label>
      <label>
        Chassi:
        <input
          type="text"
          value={chassi}
          onChange={(e) => setChassi(e.target.value)}
          required
        />
      </label>
      <label>
        Placa:
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
      </label>
      <button type="submit">{carro ? 'Editar' : 'Adicionar'}</button>
    </form>
  );
};

export default CarroForm;
