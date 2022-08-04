import styled from 'styled-components';
import { colors, media, fonts } from '../../../../utils';

export const Section = styled.section`
    background-color: rgba(242,242,242, 0.4);
    padding: 2rem;
`;

export const ProductBenefitGroup = styled.div`
    max-width: 75rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, minmax(6rem,1fr));
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;
    width: 100%;

    margin-bottom: 2em;
    padding: 0;
    margin: 0 auto;

    ${media.large`
        grid-template-rows: repeat(4, minmax(10rem,1fr));
    `}
`;

export const TagLine1 = styled.div`
    grid-row: 1;
    grid-column: span 6;
    h2 {
        font-weight: 600;
        font-size: 2rem;
        text-transform: uppercase;
    }
    width: 100%;

    ${media.large`
        grid-row: 1;
        grid-column: 1/4;
        padding: 3rem;
    `}
`;



export const TagLine2 = styled.div`
    grid-row: 3;
    grid-column: span 6;
    h2 {
        font-weight: 600;
        font-size: 2rem;
        text-transform: uppercase;
    }
    width: 100%;

    ${media.large`
        grid-row: 2;
        grid-column: 4 / span 3;
        padding: 3rem;
    `}
`;

export const TagLine3 = styled.div`
    grid-row: 5;
    grid-column: span 6;
    h2 {
        font-weight: 600;
        font-size: 2rem;
        text-transform: uppercase;
    }
    width: 100%;

    ${media.large`
        grid-row: 3;
        grid-column: 1/4;
        padding: 3rem;
    `}
`;

export const TagLine4 = styled.div`
    grid-row: 7;
    grid-column: span 6;
    h2 {
        font-weight: 600;
        font-size: 2rem;
        text-transform: uppercase;
    }
    width: 100%;

    ${media.large`
        grid-row: 4;
        grid-column: 4 / span 3;
        padding: 3rem;
    `}
`;

export const Image1 = styled.div`
    grid-row: 2;
    grid-column: span 6;
    background: url('/landing/corso-fpv/teoria.svg') no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;

    ${media.large`
        grid-row: 1;
        grid-column: 4 / span 3;
    `}
`;
export const Image2 = styled.div`
    grid-row: 4;
    grid-column: span 6;
    background: url('/landing/corso-fpv/simulatore.svg') no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;

    ${media.large`
        grid-row: 2;
        grid-column: 1/4;
    `}
`;
export const Image3 = styled.div`
    grid-row: 6;
    grid-column: span 6;
    background: url('/landing/corso-fpv/pratica.svg') no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;

    ${media.large`
        grid-row: 3;
        grid-column: 4 / span 3;
    `}
`;

export const Image4 = styled.div`
    grid-row: 8;
    grid-column: span 6;
    background: url('/landing/corso-fpv/supporto.svg') no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;

    ${media.large`
        grid-row: 4;
        grid-column: 1/4;
    `}
`;