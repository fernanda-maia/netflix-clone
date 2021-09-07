import './Navbar.css';

import { Search, Notifications, ArrowDropDown }  from '@material-ui/icons';

import Logo from '../../../assets/images/logo.svg';
import Profile from '../../../assets/images/profile.jpg';


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <img className="nav-logo" src={ Logo } alt="Netflix"/>
                <span className="nav-link">Início</span>
                <span className="nav-link">Séries</span>
                <span className="nav-link">Filmes</span>
                <span className="nav-link">Bombando</span>
                <span className="nav-link">Minha Lista</span>
            </div>
            
            <div className="navbar-nav">
                <Search  className="nav-icon" />
                <span className="nav-link">Infantil</span>
                <Notifications className="nav-icon"/>

                <span className="profile-info">
                    <img src={Profile} alt="Avatar" className="avatar" />
                    <ArrowDropDown className="profile-icon" />
                    
                    <div className="opt-wrapper">
                        <div className="options">
                            <span className="user-link">
                                <img src={Profile} alt="Avatar" className="avatar" />
                                <p>Fernanda</p>
                            </span>
                            <span className="user-link">
                                <img src={Profile} alt="Avatar" className="avatar" />
                                <p>Fernanda</p>
                            </span>
                            <span className="user-link">
                                <img src={Profile} alt="Avatar" className="avatar" />
                                <p>Fernanda</p>
                            </span>
                            <span>Gerenciar Perfis</span>

                            <hr />
                            <span><b>Conta</b></span>
                            <span><b>Centro de Ajuda</b></span>
                            <span><b>Sair da Netflix</b></span>
                        </div>
                    </div>
                </span>
            </div>
        </nav>
    );

}