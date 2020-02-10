import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`

`;

export const PostList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;


    a {
        display: block;
        padding: 16px;
        text-decoration: none;

        ${media.medium`
            padding: 24px;
        `}
    }   
`;

export const PostListItem = styled.li`
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    display: block;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${colors.lightGray};
    }
`;

export const Date = styled(fonts.Eyebrow)`
    color: ${colors.darkGray};
    margin: 0;
`;

export const Heading = styled(fonts.Heading)`
    color: ${colors.black};
    margin: 8px 0 16px 0;
`;

export const Preview = styled(fonts.Body)`
    color: ${colors.black};
    margin: 0;
`;