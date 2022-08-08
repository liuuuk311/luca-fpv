import styled from 'styled-components';
import { colors, media, fonts } from '../../../../utils';

export const Section = styled.section`
    background-color: rgba(242,242,242, 0.4);
    padding: 2rem 0;
`;

export const Container = styled.div`
    max-width: 75rem;
    margin: 0 2rem;

    ${media.medium`
        margin: 0 auto;
    `}
`