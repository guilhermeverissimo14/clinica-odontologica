import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/logo-login.png'

import './login.css'


export default function Login() {
    const navigate = useNavigate();
    const login = () => {
        alert("login success")
        return navigate("/home")
    }
    return (
        <main className='content-login'>
            <div className='section'>
                <div className='section1'>
                    <img className='image' src={Logo} alt="Logo" />
                </div>
                <div className='section2'>
                    <h1>Login:</h1>
                    <label>Email:</label>
                    <input type="email" />
                    <label>Senha:</label>
                    <input type="password" />
                    <button onClick={login} >Entrar</button>
                    <a href="#">Esqueceu a senha</a>
                </div>
            </div>
        </main>
    )
}