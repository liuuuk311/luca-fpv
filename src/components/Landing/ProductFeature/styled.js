import styled from 'styled-components';
import { colors, media, fonts } from '../../../utils';

export const Section = styled.div`
    margin: 3.5rem auto;
    text-align: center;
    h2 {
        font-size: 1.25em;
    }
    p {
        font-size: 1.25rem;
    }
`;


export const FeatureList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        line-height: 1.2;
    }

    ${media.medium`
        flex-direction: row;
    `}
`;


export const Feature1 = styled.div`
    ${media.medium`
        margin: 0 5rem 0 0;
    `}
`;

export const Feature2 = styled.div`
    ${media.medium`
        margin: 0 0 0 5rem;
    `}
`;

export const IconContainer = styled.div`
position: relative;
`;

export const Icon1 = styled.svg`
    background: url('/landing/problemi-comuni/features/icon1.svg') no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
`;

export const Icon2 = styled.svg`
    background: url('/landing/problemi-comuni/features/icon2.svg') no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
`;


export const Body = styled(fonts.Body)`
    text-align: center;
`;

export const Heading = styled(fonts.Heading)`
    text-align: center;
`;

export const SubHeading = styled(fonts.SubHeading)`
    text-align: center;
`;