import styled from 'styled-components';
import { colors, fonts, media} from '../../utils';

export const Container = styled.div`
    max-width: 700px;
    padding: 0 16px;
    width: 100%;

    ${media.medium`
        margin: 0 auto;
    `}
`;


export const Info = styled.div`
    border-bottom: 1px solid ${colors.lightGray};
    margin-bottom: 16px;
    padding-bottom: 16px;
`;

export const Title = styled(fonts.Billboard)`
    color: ${colors.black};
    margin: 8px 0 0 0;
`;

export const Date = styled(fonts.Eyebrow)`
    color: ${colors.darkGray};
    margin: 0;
`;


export const Post = styled(fonts.Body)`
    color: ${colors.black};

    a {
        color: ${colors.personality};
    }
`;