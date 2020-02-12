import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`
    padding-top: 24px;
`;


export const PostList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    ${media.medium`
        flex-direction: row;
    `}


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

    ${media.medium`
        margin-right: 16px;

        &:last-child {
            margin-right: 0;
        }
    `}

    &:hover {
        background-color: ${colors.lightGray};
    }
`;

export const Date = styled(fonts.Eyebrow)`
    color: ${colors.darkGray};
    margin: 0;
`;

export const Heading = styled(fonts.SubHeading)`
    color: ${colors.black};
    margin: 8px 0 16px 0;
`;

export const Preview = styled(fonts.Body)`
    color: ${colors.black};
    margin: 0;
`;