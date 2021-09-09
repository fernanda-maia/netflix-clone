import './Navbar.css';

import { useState } from 'react';
import { Search, Notifications, ArrowDropDown }  from '@material-ui/icons';

import Logo from 'assets/images/logo.svg';
import Profile from 'assets/images/profile.jpg';

import { changeClassName } from 'utils/constants/Functions';
import { HOME_OPTIONS, HOME_PROFILE_HELP } from 'utils/constants/Links';


export default function Navbar() {
    const [navbar, setNavbar ] = useState("navbar");

    const navClass = {
        true: "navbar active",
        false: "navbar",
        isTrue: () => (window.scrollY > 0)
    }

    window.addEventListener('scroll', () => changeClassName(navClass, setNavbar));

    return (
        <nav className={navbar}>
            <div className="navbar-nav">
                <img className="nav-logo" src={ Logo } alt="Netflix"/>
                {HOME_OPTIONS.map((el, i) => <span className="nav-link" key={i}>{el}</span>)}
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
                            {HOME_PROFILE_HELP.map((el, i) => <span key={i}><b>{el}</b></span>)}
                        </div>
                    </div>
                </span>
            </div>
        </nav>
    );
}