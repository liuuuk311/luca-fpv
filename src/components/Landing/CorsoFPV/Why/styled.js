import styled from 'styled-components';
import { colors, media, fonts } from '../../../../utils';

export const Section = styled.section`
    display: block;
    padding: 2rem;
`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 75rem;

    display: flex;
    flex-direction: column;

    ${media.medium`
        flex-direction: row;
        margin: 0 auto;
    `}
`;

export const SubContainer = styled.div`
    width: 100%;
    padding: 0;

    ${media.medium`
        width: 50%;
        padding-right: 4rem;
    `}
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
