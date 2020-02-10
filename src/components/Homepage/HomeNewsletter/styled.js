import styled from 'styled-components';
import { colors, fonts, media} from '../../../utils';

export const Container = styled.div`
    margin-top: 36px;
    padding-top: 36px;
    position: relative;

    &:before {
        content: '';
        background-color: ${colors.personality};
        height: 2px;
        left: 0;
        position: absolute;
        top: 0;
        width: 64px;
    }
`;

export const Heading = styled(fonts.SubHeading)`
    color: ${colors.black};
    margin: 0 0 8px 0;
`;

export const Paragraph = styled(fonts.Body)`
    color: ${colors.darkGray};
`;

export const Label = styled.label`
    color: ${colors.darkGray};
    font-size: 14px;
`;

export const FieldContainer = styled.div`
    display: flex;
    max-width: 300px;
    width: 100%;
`;

export const Field = styled.input`
    appearance: none;
    border: 1px solid ${colors.lightGray};
    border-radius: 4px 0 0 4px;
    font-size: 16px;
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
    border-left: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    padding: 12px 16px;
    transition: background-color 0.3s ease-in-out;

    &:hover, &:focus {
        background-color: ${colors.lightGray};
        outline: none;
    }
`;