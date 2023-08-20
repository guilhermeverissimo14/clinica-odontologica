import Logo from './../../assets/images/logo.png'

import './header.css'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <div>
                <button>Sair</button>
                <button>Cadastrar Usuário</button>
            </div>
        </header>
    )
}