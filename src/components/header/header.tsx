import { useNavigate } from 'react-router-dom';
import Logo from './../../assets/images/logo.png'

import './header.css'

export default function Header() {

    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("username");
        navigate("/")
    }

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <div className='content-header'>
                <h4>Bem-vindo, {username}!</h4>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </header>
    )
}