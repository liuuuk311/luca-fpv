import styled from 'styled-components';
import { colors, media, fonts } from '../../../utils';

export const Container = styled.div`
    padding-bottom: 36px;

    ${media.medium`
        max-height: 100vh;
        height: 100%;
        left: 0;
        overflow-y: auto;
        padding-bottom: 48px;
        position: sticky;
        top: 36px;
    `}
`;

export const Avatar = styled.img`
    border-radius: 50%;
    display: block;
    max-width: 110px;
    width: 100%;
`;

export const Heading = styled(fonts.Billboard)`
    color: ${colors.black};
`;

export const SubHeading = styled(fonts.SubHeading)`
    color: ${colors.black};
`;

export const Paragraph = styled(fonts.Body)`
    a {
        color: ${colors.personality};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Button = styled.a`
    display: inline-block;
    padding: 0.35em 1.2em;
    border-radius: 2rem;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    background-color: #eda550;
    color: #FFFFFF !important;
    text-align: center;
    transition: all 0.2s;
`;