import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/logo-login.png'

import './login.css'
import axios from 'axios';


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const response = await axios.post("http://localhost:3001/login", { email, password });

            const data = response.data;
            console.log(data);

            if (data.message) {
                localStorage.setItem("username", data.name);
                navigate("/home");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error;
                alert(errorMessage);
                console.log(errorMessage);
            } else {
                console.error("Erro ao fazer login:", error);
                alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
            }
        }
    }
    function resetPassword(){
        return navigate("/reset-password")
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
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha:</label>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={handleLogin} >Entrar</button>
                    <a onClick={resetPassword}>Esqueceu a senha</a>
                </div>
            </div>
        </main>
    )
}