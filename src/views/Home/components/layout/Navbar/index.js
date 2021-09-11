import './Navbar.css';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Search, Notifications, ArrowDropDown }  from '@material-ui/icons';

import Logo from 'assets/images/logo.svg';

import More from './More';
import { NavbarNav, NavLink, NetflixIcon, Avatar} from './Styled';

import { USERS } from 'utils/mocks';
import { HOME_PROFILE_HELP } from 'utils/constants/Links';
import { changeClassName } from 'utils/constants/Functions';


const Navbar = (props) => {
    const { options, active } = props;
    const [navbar, setNavbar ] = useState("navbar");

    const navClass = {
        true: "navbar active",
        false: "navbar",
        isTrue: () => (window.scrollY > 0)
    }

    window.addEventListener('scroll', () => changeClassName(navClass, setNavbar));

    return (
        <nav className={navbar}>
            <NavbarNav>
                <NetflixIcon src={ Logo } alt="Netflix"/>
                {options.map((el, i) => <NavLink key={i}>{el}</NavLink>)}
            </NavbarNav>
            
            <NavbarNav>
                <Search  className="nav-icon" />
                <span>Infantil</span>
                <Notifications className="nav-icon"/>

                <span className="profile-info">
                    <Avatar src={active.picture} alt="Avatar" />
                    <ArrowDropDown className="profile-icon" />
                    <More users={ USERS } moreOptions={ HOME_PROFILE_HELP }/>
                </span>
            </NavbarNav>
        </nav>
    );
}

Navbar.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),

    active: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        picture: PropTypes.string,
        active: PropTypes.bool
    }),

}
export default Navbar;