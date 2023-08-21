import { useState } from 'react'
import axios from 'axios';

import './reset-password.css'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

    const [email, setEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const navigate = useNavigate();

    async function NewPassword() {
        try {
            const response = await axios.post("http://localhost:3001/reset-password", { email, newPassword });
            const data = response.data;

            if (data.success) {  // Verifique a chave 'success' em vez de 'sucess'
                localStorage.setItem("username", data.name);
                alert(data.success); // Exiba a mensagem de sucesso retornada pela API
                return navigate("/")
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error;
                alert(errorMessage);
                console.log(errorMessage);
            }
        }    
    }

    function goBack(){
        return navigate("/")
    }

    return (
        <div className="container-password">
            <main>
                <h3>Trocar Senha</h3>
                <div className='new-password'>
                    <label>Digite seu email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='new-password'>
                    <label>Digite sua nova senha:</label>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <div className='btns-new-password'>
                        <button onClick={goBack} className='btn-back' >Voltar</button>
                        <button onClick={NewPassword} >Alterar</button>
                    </div>
                </div>
            </main>
        </div>
    )
}