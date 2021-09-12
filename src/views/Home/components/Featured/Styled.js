import styled  from 'styled-components';
import { FadeAnimation, ReduceWidth, ReduceTitle } from './Keyframes';



export const Header = styled.header`
    height: 110vh;
    position: relative;
    background: radial-gradient(circle, rgba(20,20,20,0.4) 41%, var(--black-color) 100%),url(${(props) => props.imgURL}) no-repeat;
    background-size:cover;

    @media only screen and (max-width: 720px) {
        display: none;
    }
`;

export const CoverImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`; 

export const Info = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 1.2rem;
    color: #fff;
    position: absolute;
    width: 37%;
    left: 3.4rem;
    bottom: 33%;
    font-size: 1.3rem;

    & > img {
        width: 30rem;
        animation: ${ReduceWidth} 0.5s ease-in 7s forwards;
    }

    & > p {
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        animation: ${FadeAnimation} 0.5s linear 7s forwards;
    }
`;

export const MovieType = styled.div`
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 5px;
    font-weight: 500;
    display: flex;
    gap: 0.2rem;
    color: #d8d8d8;
    align-items: center;
    transform: translateY(0.5rem);
    animation: ${ReduceTitle} 0.5s ease-in 7s forwards;

    & > img {
        width: 2.1rem;
        animation: ${ReduceTitle} 0.5s ease-in 7s forwards;
    }
`;

export const Actions = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 1rem;
    gap: 0.6rem;

    & > button {
        display: flex;
        font-weight: 500;
        font-size: 1rem;
        gap: 0.6rem;
        cursor: pointer;
        border: none;
        border-radius: 0.3rem;
        justify-content: center;
        align-items: center;
        padding: 0.57rem 0.5rem;
        flex-basis: 27%;
    }

    & > button:hover {
        filter: opacity(0.7);
    }

`;

export const MoreInfoButton = styled.button`
    flex-grow: 0.5;
    color: #fff;
    background: #6d6d6eb3;
`;