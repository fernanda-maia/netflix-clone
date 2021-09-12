import styled from 'styled-components';


export const Row = styled.div`
    margin-bottom: 2.8rem;
    transform: translateY(-21vh);

    &:hover .see-all-icon {
        visibility: visible;
    } 

    @media only screen and (max-width: 720px) {
        transform: translateY(15vh);
    }
`;

export const SeeAll = styled.span`
    vertical-align: middle;
    display: none;
    font-size: 0.8rem;

    &::before {
        content: "Ver Tudo";
    }
`;

export const Title = styled.span`
    cursor: pointer;
    padding-left: 3.4rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    transition: 1s;

    & .see-all-icon {
        visibility: hidden;
        vertical-align: middle;
        font-size: 1rem !important;
    }

    &:hover ${SeeAll} {
        display: inline;
    }

    &:hover .see-all-icon {
        font-size: 0.83rem !important;
        transform: translateX(4.4rem);
    }

`;

export const SliderButton = styled.span`
    display: none;
    cursor: pointer;
    position: absolute;
    height: 100% ;
    width: 4.6rem;
    padding: 1rem;
    color: #fff;
    background-color: #25252583;
    z-index: 999;
    top: 0;
    bottom: 0;
    margin: auto;

    & .arrow-icon {
        font-size: 3rem !important;
    }

    &:hover .arrow-icon {
        font-size: 4rem !important;
    }

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }

    @media (pointer:coarse) {
        display: none;
    }
}
`;

export const SliderWrapper = styled.div`
    position: relative;
    margin: 0.7rem 0;
    width: 100%;

    &:hover ${SliderButton} {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (pointer:coarse) {
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const SliderContainer = styled.div`
    padding-left: 3.4rem;
    display: flex;
    gap: 0.25rem;
    width: max-content;
    transition: all 1s ease;
`;

