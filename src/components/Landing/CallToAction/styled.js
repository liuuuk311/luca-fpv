import styled from 'styled-components';
import { colors, media, fonts } from '../../../utils';

export const Section = styled.section`
    background-color: rgba(242,242,242, 0.4);
    text-align: center;
    margin: 0 auto;
    padding: 1em;
    p {
    font-size: 1.5rem;
    font-weight: 500;
    }
`;

export const Paragraph = styled(fonts.Body)`
    color: ${colors.darkGray};
    font-size: 14px;
`;