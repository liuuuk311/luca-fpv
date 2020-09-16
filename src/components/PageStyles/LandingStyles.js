import styled from 'styled-components';
import { colors, fonts, media } from '../../utils';

export const Container = styled.div`
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
    font-size: 16px;
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
    width: 100%;

    &:hover, &:focus {
        border-color: ${colors.personality};
        outline: none;
    }

    ${media.medium`
        width: 45%;
    `}
`;

export const GroupField = styled.input`
    display:none;
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
    margin: 1.5em;
    padding: 0.75em 1.25em;
    background-color: ${colors.personality};
    color: ${colors.white};
    border-radius: 2rem;
    border: 0;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;

    &:hover, &:focus {
        background-color: ${colors.white};
        color: ${colors.personality};
        box-shadow: 0 0 5px ${colors.personality};
    }
`;


export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;