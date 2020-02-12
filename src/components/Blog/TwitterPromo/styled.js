import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`
    align-items: center;
    border-top: 1px solid ${colors.lightGray};
    display: flex;
    justify-content: center;
    padding-top: 36px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    display: block;
    max-width: 110px;
    width: 100%;
`;

export const Content = styled.div`
    padding-left: 24px;
`;

export const Heading = styled(fonts.SubHeading)`
    margin: 0 0 8px 0;
`;

export const Paragraph = styled(fonts.Body)`
    margin: 0 0 16px 0;
`;