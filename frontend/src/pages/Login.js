import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import "../pageStyle/Login.css"

const Login = () => {
    return (
        <div className='login-container' >
            <div className='form-login' >
                <form>
                    <h1>Faça seu Login</h1>
                    <div className="login" >
                        <input type="email" placeholder="E-mail" />
                        <FontAwesomeIcon icon={faUser} className="icon" />
                    </div>
                    <div className="login" >
                        <input type="password" placeholder="Senha" />
                        <FontAwesomeIcon icon={faLock} className="icon" />
                    </div>

                    <button>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login
