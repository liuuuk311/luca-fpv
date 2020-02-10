import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px auto 0 auto;
    max-width: 1248px;
    padding: 24px 16px;
    width: calc(100% - 32px);

    ${media.medium`
        flex-direction: row;
        justify-content: space-between;
    `}
`;

export const Copyright = styled(fonts.Body)`
    color: ${colors.black};
`;

export const SocialList = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0%;
    padding: 0;
`;

export const SocialListItem = styled.li`
    margin-left: 16px;

    &:first-child {
        margin-left: 0;
    }

    ${media.medium`
        &:first-child {
            margin-left: 16px;
        }
    `}
`;

export const SocialListLink = styled.a`
    color: ${colors.personality};
    font-size: 16px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;