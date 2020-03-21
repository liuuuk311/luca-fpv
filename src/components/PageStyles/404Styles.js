import styled from 'styled-components';
import { colors, media, fonts } from '../../utils';

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1248px;
    padding: 0 16px;
    width: 100%;
    align-items: center;

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

export const Container = styled.div`
    display: block;
`;

export const Video = styled.video`
    display: block;
    max-width: 640px;
    width: 100%;
    align: center;
`;

export const Heading = styled(fonts.Heading)`
    color: ${colors.black};
    margin: 0px 0 0 32px;
`;

export const Preview = styled(fonts.Body)`
    color: ${colors.darkGray};
    margin: 0px 0 0 32px;
`;

export const Link = styled.a`
    color: ${colors.personality};
    font-size: 16px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;