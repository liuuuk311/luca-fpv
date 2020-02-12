import styled from 'styled-components';
import { colors, fonts, media } from '../../utils';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 16px;
    width: calc(100% - 32px);
`;

export const Heading = styled(fonts.Heading)`
    color: ${colors.black};
`;

export const SubHeading = styled(fonts.SubHeading)`
    color: ${colors.black};
`;

export const Body = styled(fonts.Body)`
    color: ${colors.darkGray};

    a {
        color: ${colors.personality};
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }
`;