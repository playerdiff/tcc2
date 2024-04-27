import { useState } from 'react';
import { cadastrarUsuario } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEyeSlash, faIdCard, faHome } from '@fortawesome/free-solid-svg-icons';
import "../pageStyle/Signup.css"
import pages from '../pages/pages';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const Navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!email || !senha || !cpf || !endereco) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Cria um objeto de usuário com os dados do formulário
        const novoUsuario = {
            email,
            senha,
            cpf,
            endereco,
        };

        try {
            // Chama a função cadastrarUsuario do seu arquivo api.js para enviar os dados para o backend
            await cadastrarUsuario(novoUsuario);
            alert('Usuário cadastrado com sucesso!');
            Navigate(pages.routes.Login);
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
    };

     return (
        <div className="signup-container" >
            <div className="form-signup" >
                <form onSubmit={handleCadastro} >
                    <h1> Faça seu cadastro </h1>

                    <div className="create-account" >
                        <input type="email"
                        placeholder="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                        <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
                    
                        <input type="password"
                        placeholder="Senha"
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)}/>

                        <FontAwesomeIcon icon={faEyeSlash} className="icon-password" />
                    </div>

                    <div className="create-account" >
                        <input type="text" 
                        placeholder='CPF' 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}/>

                        <FontAwesomeIcon icon={faIdCard} className="icon-cpf" />

                        <input type="text"
                        placeholder="Endereço"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)} />

                        <FontAwesomeIcon icon={faHome} className="icon-adress" />
                    </div>

                    <button type="submit" > Cadastrar </button>
                </form>
            </div>
        </div>
    )
}

export default Signup
