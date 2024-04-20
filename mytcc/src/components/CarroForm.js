// CarroForm.js
import React, { useState, useEffect } from 'react';
import { addCarro, editCarro, getAllCarros } from '../services/api';

const CarroForm = ({ onSubmit, carro }) => {
  const [marca, setMarca] = useState(carro ? carro.marca : '');
  const [modelo, setModelo] = useState(carro ? carro.modelo : '');
  const [ano, setAno] = useState(carro ? carro.ano : new Date().getFullYear());
  const [chassi, setChassi] = useState(carro ? carro.chassi : '');
  const [placa, setPlaca] = useState(carro ? carro.placa : '');
  const [cor, setCor] = useState(carro ? carro.cor : '');
  const [carros, setCarros] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const marcasCarro = [
    "Chevrolet", "Hyundai", "BMW", "Ford", "Volkswagen", "Fiat", "Peugeot",
    "Volvo", "Audi", "Renault", "Honda", "Mercedes", "Land Rover", "KIA",
    "Citroën", "Jeep", "Toyota", "Mitsubishi"
  ];

  const anosCarro = Array.from({ length: new Date().getFullYear() - 2010 + 1 }, (_, idx) => 2010 + idx);

  const fetchCarros = async () => {
    try {
      const response = await getAllCarros();
      setCarros(response);
      const pages = Math.ceil(response.length / 5);
      setTotalPages(pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCarros();
  }, []);

  const isDuplicateChassiOrPlaca = () => {
    const foundCarro = carros.find(
      (car) => car.chassi === chassi || car.placa === placa
    );
    return !!foundCarro;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDuplicateChassiOrPlaca()) {
      alert('Já existe um carro cadastrado com esse Chassi ou Placa.');
      return;
    }

    const newCarro = { marca, modelo, ano, chassi, placa, cor };

    try {
      if (carro) {
        await editCarro(carro.id, newCarro);
      } else {
        await addCarro(newCarro);
      }
      onSubmit();
      fetchCarros();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Marca:
        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        >
          <option value="" disabled>Selecione a marca</option>
          {marcasCarro.map((marca, index) => (
            <option key={index} value={marca}>{marca}</option>
          ))}
        </select>
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
        <select
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
        >
          <option value="" disabled>Selecione o ano</option>
          {anosCarro.map((ano, index) => (
            <option key={index} value={ano}>{ano}</option>
          ))}
        </select>
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
      <label>
        Cor:
        <input
          type="text"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          required
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CarroForm;
