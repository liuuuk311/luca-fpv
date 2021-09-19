import styled from 'styled-components';
import { colors, media, fonts } from '../../../utils';

export const Section = styled.section`
    display: block
`;

export const Container = styled.div`
    margin: 24px auto 48px auto;
    max-width: 900px;
    padding: 0 16px;
    width: calc(100% - 32px); 
`;

export const Heading = styled(fonts.Heading)`
    color: ${colors.black};
`;

export const Paragraph = styled(fonts.Body)`
    font-size: 16px;
    line-height: 24px;

    ${media.medium`
        font-size: 18px;
        line-height: 26px;
    `}
`;

export const SubHeading = styled(fonts.SubHeading)`
    color: ${colors.black};
`;

export const Quote = styled.blockquote`
    border-left: 5px solid #e6e6e6;
    margin-left: 0;
    padding-left: 2em;
`;