import styled from 'styled-components';
import { colors, fonts, media} from '../../utils';
import prismTheme from '../prismTheme';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
`;

export const NavigationContainer = styled.div`
    display: none;

    ${media.large`
        display: block
        height: 100%;
        padding-right: 16px;
        position: sticky;
        top: 48px;
        width: calc(300px - 16px);
        z-index: 60;
    `}
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
`;

export const PostContainer = styled.div`
    max-width: 700px;
    padding: 0 16px;
    width: 100%;

    ${media.medium`
        margin: 0 auto;
    `}
`;

export const Info = styled.div`
    border-bottom: 1px solid ${colors.lightGray};
    margin-bottom: 16px;
    padding-bottom: 16px;
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


    blockquote {
        border-left: 5px solid ${colors.lightGray};
        margin-left: 0;
        padding-left: 2em;
    }
    
    ${prismTheme}
`;