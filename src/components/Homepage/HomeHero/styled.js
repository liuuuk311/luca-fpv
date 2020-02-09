import styled from 'styled-components';
import { colors, media, fonts } from '../../../utils';

export const Container = styled.div`

    ${media.medium`
        height: 100%;
        left: 0;
        position: sticky;
        top: 36px;
    `}
`;

export const Heading = styled(fonts.Billboard)`
    color: ${colors.black};
`;

export const Paragraph = styled(fonts.Body)`

`;