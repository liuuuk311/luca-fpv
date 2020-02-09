import styled, { css, keyframes } from 'styled-components';
import { colors, media } from '../../../utils';

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 1248px;
    padding: 24px 16px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);

    ${media.medium`
        padding: 48px 16px;
    `}
`;

export const Offset = styled.div`
    margin-bottom: 150px;
`;

export const HomeLink = styled.div`
    border-right: 2px solid ${colors.lightGray};
    margin-right: 16px;
    padding-right: 16px;

    a {
        color: ${colors.black};
        display: block;
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;
        position: relative;
        text-decoration: none;
        transform: translateY(1px);

        &:after {
            content: '';
            background-color: ${colors.personality};
            bottom: -6px;
            height: 2px;
            left: 0;
            position: absolute;
            transform: scaleX(0);
            transition: transform 0.2s linear;
            width: 100%;
        }

        &:hover {
            &:after {
                transform: scaleX(1);
            }
        }
    }
`;

export const HamburgerButton = styled.button`
    appearance: none;
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    border-radius: 4px;
    cursor: pointer;
    height: calc(21px + 16px);
    transition: border-color linear 0.4s;
    padding: 8px;
    width: calc(30px + 16px);

    &:hover {
        border-color: ${colors.lightGray} !important;
    }

    &:focus {
        outline: none;
    }

    ${props => props.isActive && css`
        border-color: ${colors.black} !important;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid ${colors.white} !important;
    `}
`;

export const HamburgerIcon = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    span {  
        display: block;
        background-color: ${colors.black};
        height: 1px;
        width: 100%;
    }

    &:before {
        content: '';
        display: block;
        background-color: ${colors.black};
        height: 1px;
        transition: transform 0.3s ease-in-out;
        width: 100%;
    }

    &:after {
        content: '';
        display: block;
        background-color: ${colors.black};
        height: 1px;
        transition: transform 0.3s ease-in-out;
        width: 100%;
    }

    ${props => props.isActive && css`
        
        span {
            opacity: 0;
        }

        &:before {
            transform: rotate(45deg) translateY(8px) translateX(7px);
        }

        &:after {
            transform: rotate(-45deg) translateY(-6px) translateX(5px);
        }

    `}
`;

const AnimateList = keyframes`
        0% {
            transform: scaleX(0.4) scaleY(0.4) translateY(-60px);
            opacity: 0;
        }

        70% {
            transform: scaleX(1) scaleY(1) translateY(0);
            opacity: 1;
        }
`;

export const ListContainer = styled.ul`
    border: 1px solid ${colors.black};
    border-radius: 4px 0 4px 4px;
    list-style: none;
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 84px;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: scaleX(0) scaleY(0);
    transform-origin: 100% 0%;
    width: 200px;
    z-index: -1;
    
    ${props => props.isActive && css`
        animation: ${AnimateList} 0.5s;
        opacity: 1;
        pointer-events: all;
        transform: scaleX(1) scaleY(1);
        z-index: 5;
    `}  
`;

export const ListItem = styled.li`
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGray};
    margin: 0;
    transition: background-color 0.3s ease-in-out;

    &:first-child {
        border-radius: 4px 4px 0 0;
    }

    &:last-child {
        border: none;
        border-radius: 0 0 4px 4px;
    }

    &:hover {
        background-color: ${colors.lightGray};
    }

    a {
        color: ${colors.black};
        display: block;
        padding: 16px;
        text-decoration: none;
    }
`;