import styled from 'styled-components';
import { colors, fonts, media } from '../../utils';

export const Container = styled.div`
    max-width: 500px;
    padding: 0 16px;
    width: 100%;

    ${media.medium`
        margin: 0 auto;
    `}
`;

export const Heading = styled(fonts.Heading)`
    color: ${colors.black};
`;

export const Paragraph = styled(fonts.Body)`
    color: ${colors.darkGray};
`;

export const InputGroup = styled.div`
    margin-bottom: 16px;
`;

export const Label = styled.label`
    color: ${colors.darkGray};
    font-size: 14px;
`;

export const Field = styled.input`
    appearance: none;
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    font-size: 16px;
    padding: 12px 16px;
    transition: border-color 0.3s ease-in-out;
    width: 100%;

    &:hover, &:focus {
        border-color: ${colors.personality};
        outline: none;
    }
`;

export const Textarea = styled.textarea`
    appearance: none;
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    font-size: 16px;
    height: 200px;
    padding: 12px 16px;
    transition: border-color 0.3s ease-in-out;
    width: 100%;

    &:hover, &:focus {
        border-color: ${colors.personality};
        outline: none;
    }
`;

export const Button = styled.button`
    appearance: none;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    display: block;
    cursor: pointer;
    padding: 12px 16px;
    transition: background-color 0.3s ease-in-out;
    width: 100%;

    &:hover, &:focus {
        border-color: ${colors.personality};
        outline: none;
    }
`;