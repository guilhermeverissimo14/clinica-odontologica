import { useNavigate } from 'react-router-dom';


export default function Login(){
    const navigate = useNavigate();
    const login = () =>{
        return navigate("/home")
    }
    return(
        <div>
            <h1>Tela de Login</h1>
            <button onClick={login} >Entrar</button>
        </div>
    )
}