import styled from 'styled-components';
import { media } from '../../utils';

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1248px;
    padding: 0 16px;
    width: 100%;

    & > div {
        flex-basis: 100%;
    }

    ${media.medium`
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;

        & > div {
            flex-basis: 46%;
        }
    `}
`;

