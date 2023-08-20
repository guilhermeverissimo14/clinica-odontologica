import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/logo-login.png'

import './login.css'
// import api from '../../service/api';
import axios from 'axios';


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const response = await axios.get("http://localhost:3000/login", {  email,  password});
            
            const data = response.data;
            if (data) {
                localStorage.setItem("username", data.name); 
                navigate("/home");
            } else {
                console.log("Credenciais inválidas");
                alert("Credenciais inválidas");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={handleLogin} >Entrar</button>
                    <a href="#">Esqueceu a senha</a>
                </div>
            </div>
        </main>
    )
}