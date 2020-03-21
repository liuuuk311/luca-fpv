import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`
    margin-top: 36px;
    padding-top: 36px;
    position: relative;

    &:before {
        content: '';
        background-color: ${colors.personality};
        height: 2px;
        left: 0;
        position: absolute;
        top: 0;
        width: 64px;
    }
`;

export const Heading = styled(fonts.SubSubHeading)`
    color: ${colors.black};
    margin: 0 0 8px 0;
`;

export const Paragraph = styled(fonts.Body)`
    color: ${colors.darkGray};
`;

export const TagList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;


    a {
        display: block;
        padding: 8px;
        text-decoration: none;

        ${media.medium`
            padding: 12px;
        `}
    }   
`;

export const TagItem = styled.li`
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    display: block;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${colors.lightGray};
    }
`;