import React, { useState, useEffect } from 'react';
import { signup, getAllUsers } from '../services/api'; // Certifique-se de importar a função signup do seu api.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEyeSlash, faIdCard, faHome, faMailReply } from '@fortawesome/free-solid-svg-icons';
import "../pageStyle/Signup.css"

const Signup = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response);
        } catch (error) {
            console.error(error);
        }
    };

    const isDuplicateEmailOrCpf = () => {
        const foundUser = users.find(
            (user) => user.email === email || user.cpf === cpf
        );
        return !!foundUser;
    };

    const clearFields = () => {
        setEmail('');
        setSenha('');
        setCpf('');
        setEndereco('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isDuplicateEmailOrCpf()) {
            alert('Já existe um usuário cadastrado com esse email ou CPF.');
            return;
        }

        const newUser = { email, senha, cpf, endereco };

        try {
            await signup(newUser);
            alert('Cadastro realizado com sucesso!');
            clearFields();
            fetchUsers(); // Atualizar a lista de usuários após o cadastro
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar. Por favor, tente novamente.');
        }
    };

    return (
        <div className="signup-container">
            <div className="form-signup">

                    <button className='return-btn' > 
                    <FontAwesomeIcon icon={faMailReply} className='icon-return' />
                    </button>
                
                    <h1> Faça seu cadastro </h1>

                    <div className="create-account">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faEnvelope} className="icon-email" />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faEyeSlash} className="icon-password" />
                    </div>

                    <div className="create-account">
                        <input
                            type="text"
                            placeholder="CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faIdCard} className="icon-cpf" />

                        <input
                            type="text"
                            placeholder="Endereço"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faHome} className="icon-adress" />
                    </div>

                    <button className="signup-btn" type="submit" onClick={handleSubmit}> Cadastrar </button>
    
            </div>
        </div>
    );
};

export default Signup;
