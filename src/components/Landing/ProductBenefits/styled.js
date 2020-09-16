import styled from 'styled-components';
import { colors, media, fonts } from '../../../utils';

export const Section = styled.section`
    background-color: rgba(242,242,242, 0.4);
    padding: 1em 0;
`;

export const ProductBenefitGroup = styled.div`
    max-width: 75rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, minmax(10rem,1fr));
    grid-gap: 2em;
    align-items: center;
    justify-items: center;
    width: 90%;

    margin-bottom: 2em;
    padding: 2em;
    margin: 0 auto;

    ${media.medium`
        margin: 2rem auto 3rem auto;
    `}
    ${media.large`
    grid-template-rows: repeat(4, minmax(10rem,1fr));
    `}
`;

export const TagLine1 = styled.div`
    grid-row: 1/2;
    grid-column: span 8;
    font-size: 2rem;
    font-weight: 600;
    width: 100%;

    ${media.large`
        grid-row: 1/3;
        grid-column: 1/4;
    `}
`;

export const Image1 = styled.div`
    grid-row: 2/3;
    grid-column: span 8;
    background: url('/landing/problemi-comuni/benefits/ben2.svg') no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;

    ${media.large`
        grid-row: 1/3;
        grid-column: 5/9;
    `}
`;

export const TagLine2 = styled.div`
    grid-row: 3/4;
    grid-column: 1/9;
    font-size: 2rem;
    font-weight: 600;
    width: 100%;

    ${media.large`
        grid-row: 3/5;
        grid-column: 5/9;
    `}
`;

export const Image2 = styled.div`
    grid-row: 4/5;
    grid-column: span 8;
    background: url('/landing/problemi-comuni/benefits/ben3.svg') no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;

    ${media.large`
        grid-row: 3/5;
        grid-column: 1/4;
    `}
`;
