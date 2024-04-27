import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import "../pageStyle/Login.css";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory(); // Use o hook useHistory para acessar o objeto de histórico

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Faça a solicitação para autenticar o usuário
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            // Verifique o tipo de usuário retornado pelo backend
            if (data && data.tipo === 'dev') {
                // Redirecione para a página de carros
                history.push('/carros');
            } else {
                setError('Tipo de usuário sem permissão para acessar esta página.');
            }
        } catch (error) {
            setError('Erro ao fazer login. Por favor, tente novamente.');
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className='login-container' >
            <div className='form-login' >
                <form onSubmit={handleSubmit} >
                    <h1>Faça seu Login</h1>
                    {error && <div className="error" >{error}</div>}

                    <div className="login" >
                        <input type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                        <FontAwesomeIcon icon={faUser} className="icon" />
                    </div>

                    <div className="login" >
                        <input type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                        <FontAwesomeIcon icon={faLock} className="icon" />
                    </div>

                    <div className="recall-forget" >
                        <label>
                            <input type="checkbox" />Lembre de mim
                        </label>
                        <a href="#" >Esqueceu a senha?</a>
                    </div>

                    <button type="submit" > Entrar</button>

                    <div className="signup-link" >
                        <p>
                            Não tem uma conta? <a href="http://localhost:3000/cadastro" > Registrar </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
