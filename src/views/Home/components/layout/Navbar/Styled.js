import styled from 'styled-components';


export const NetflixIcon = styled.img`
    width: 5.9rem;
    margin-right: 1.4rem;
`;

export const NavbarNav = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    text-transform: capitalize;
    &:last-of-type {
        text-transform: uppercase;
    }
`;

export const NavLink = styled.span`
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        opacity: 0.6;
    }
`;

export const Avatar = styled.img`
    width: 1.9rem;
    height: 1.9rem;
    object-fit: cover;
    margin-right: 0.2rem;
    border-radius: 0.2rem;
`;

export const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 5%;

    .profile-info:hover & {
        display: block;
    }
`;

export const UserOpt = styled.div`
    font-size: 0.82rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    border: 1px solid var(--gray-border);
    padding: 0.8rem 0.7rem;
    width: 11.5rem;
    margin-top: 30%;
    text-transform: capitalize;
    background-color: #000000e3;
    
    span:last-of-type {
        margin-top: 0.4rem;
    }

    span:hover {
        text-decoration: underline;
    }
`; 

export const UserLink = styled.span`
    display: flex;
    gap: 0.3rem;
    margin-bottom: 0.3rem;
    align-items: center;
`;

export const Divider = styled.hr`
    border: 1px solid var(--gray-border);
    margin: 0.5rem 0;
`;