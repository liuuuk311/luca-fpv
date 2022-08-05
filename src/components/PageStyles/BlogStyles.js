import styled, { css } from 'styled-components';
import { colors, fonts, media} from '../../utils';
import prismTheme from '../prismTheme';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
`;

export const NavigationContainer = styled.div`
    display: hidden;
    ${media.large`
        display: block;
        height: 100%;
        padding-right: 16px;
        position: sticky;
        top: 48px;
        width: calc(350px - 16px);
        z-index: 60;
    `}
`;

export const QuickNavigationContainer = styled.div`
    display: none;

    ${media.large`
        display: block;
        max-height: 100vh;
        overflow-y: hidden;
        height: 100%;
    `}
`;

export const NewsletterContainer = styled.div`
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    margin-top: 8px;
    padding: 16px;

    form {
        margin: 0;
    }

    p {
        margin-bottom: 12px;
    }
`;

export const GroupField = styled.input`
    display:none;
`;

export const NavigationHeading = styled(fonts.Eyebrow)`
    color: ${colors.darkGray};
    margin-bottom: 16px;

    &:hover {
        text-decoration: underline;
    }
`;

export const NavigationLink = styled.a`
    color: ${colors.personality};
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    margin-left: ${props => props.indentLevel * 8}px;
    text-align: start;

    ${props => props.indentLevel > 0 && css`
        text-indent: -12px;
        padding-left: 12px;
        
        &:before {
            content: '';
            background-color: ${colors.black};
            display: inline-block;
            height: 1px;
            transform: translateY(-5px);
            margin-right: 4px;
            width: 8px;
        }
    `}
`;

export const PostContainer = styled.div`
    max-width: 700px;
    padding: 0 16px;
    width: 100%;

    ${media.medium`
        margin: 0 auto;
    `}

    img {
        display: block;
        margin:  auto;
        padding: 24px 0;
        width: 80%;
    }
`;

export const AdsContainer = styled.div`
    display: hidden;
    ${media.large`
        display: block;
        height: 100%;
        padding-right: 16px;
        position: sticky;
        top: 48px;
        width: calc(350px - 16px);
        z-index: 60;
    `}
`;

export const Info = styled.div`
    border-bottom: 1px solid ${colors.lightGray};
    padding-bottom: 16px;
    margin-bottom: 16px;
`;

export const ShareButtons = styled.div`
    align-items: center;
    display: flex;
    border-top: 1px solid ${colors.lightGray};
    padding: 16px 0;

    span {
        margin-right: 8px;
    }

    button {
        margin-right: 8px;
        height: 24px;

        &:focus {
            outline: none;
        }
    }
`;

export const Title = styled(fonts.Billboard)`
    color: ${colors.black};
    margin: 8px 0 0 0;
`;

export const Date = styled(fonts.Eyebrow)`
    color: ${colors.darkGray};
    margin: 0;
`;


export const Post = styled(fonts.Body)`
    color: ${colors.black};

    a {
        color: ${colors.personality};
    }

    p {
        line-height: 30px;
    }


    blockquote {
        border-left: 5px solid ${colors.lightGray};
        margin-left: 0;
        padding-left: 2em;
    }
    
    ${prismTheme}
`;

export const Heading = styled(fonts.SubHeading)`
    border-radius: 4px 4px 0 0;
    color: ${colors.black};
    margin: 0 0 8px 0;
`;

export const Paragraph = styled(fonts.Body)`
    color: ${colors.darkGray};
    margin: 0 0 0.5rem 0;
`;

export const Label = styled.label`
    color: ${colors.darkGray};
    font-size: 14px;
`;

export const FieldContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const Field = styled.input`
    appearance: none;
    border: 1px solid ${colors.lightGray};
    border-radius: 4px 0 0 4px;
    font-size: 16px;
    padding: 12px 16px;
    transition: border-color 0.3s ease-in-out;
    width: 100%;

    &:hover, &:focus {
        border-color: ${colors.personality};
        outline: none;
    }
`;

export const Button = styled.a`
    margin: 1rem 0;
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
    float: left;
`;

export const Banner = styled.img`
    margin: 0 !important;
    width: 100% !important;
    padding: 0 !important;
    padding-bottom: 24px !important;
`;

export const SubHeading = styled(fonts.SubHeading)`
    color: ${colors.black};
    margin: 2rem 0 0 0;
`;