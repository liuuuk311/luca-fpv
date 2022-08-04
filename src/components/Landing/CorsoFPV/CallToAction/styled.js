import styled from 'styled-components';
import { colors, media, fonts } from '../../../../utils';

export const Section = styled.section`
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 45rem;
`;

export const Paragraph = styled(fonts.Body)`
    color: ${colors.darkGray};
    font-size: 16px;
    text-align: center;
`;

export const Heading = styled(fonts.Heading)`
    text-align: center;
    font-size: 28px;
`;

export const SubHeading = styled(fonts.SubHeading)`
    text-align: center;
    font-size: 24px;
`;