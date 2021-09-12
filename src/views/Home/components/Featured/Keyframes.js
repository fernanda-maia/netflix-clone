import { keyframes } from 'styled-components';


export const FadeAnimation = keyframes`
    0% {
        opacity: 1;
        height: 5rem;
    }
    50% {
        opacity: 0.5;
        height: 3rem;
    }
    100% {
        opacity: 0;
        height: 0;
    }
`;

export const ReduceWidth = keyframes`
    from {
        width: 30rem;
    }
    to {
        width: 25rem;
    }
`;

export const ReduceTitle = keyframes`
    from {
        font-size: 1.2rem;
        width: 2.1rem;
    }
    to {
        font-size: 0.8rem;
        width: 1.5rem;
    }
`;