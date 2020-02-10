import styled from 'styled-components';
import { media } from '../utils';

export const Billboard = styled.h1`
    font-size: 36px;
    line-height: 42px;

    ${media.medium`
        font-size: 52px;
        line-height: 60px;
    `}
`;

export const Heading = styled.h1`
    font-size: 24px;
    line-height: 32px;

    ${media.medium`
        font-size: 36px;
        line-height: 42px;
    `}
`;

export const SubHeading = styled.h2`
    font-size: 18px;
    line-height: 26px;

    ${media.medium`
        font-size: 24px;
        line-height: 32px;
    `}
`;

export const Eyebrow = styled.h3`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-transform: uppercase;

    ${media.medium`
        font-size: 14px;
        line-height: 22px;
    `}
`;

export const Body = styled.p`
    font-size: 18px;
    line-height: 26px;
`;

const fonts = {
    Billboard,
    Heading,
    SubHeading,
    Eyebrow,
    Body
}

export default fonts;