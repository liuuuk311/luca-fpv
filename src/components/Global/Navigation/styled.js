import styled, { css, keyframes } from 'styled-components';
import { colors, media } from '../../../utils';

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 1248px;
    padding: 24px 16px;
    position: sticky;
    top: 0;
    margin-right: 0;
    width: calc(100% - 32px);
    z-index: 50;

    ${media.medium`
        transform: translateX(16px);
        padding: 48px 16px;
        margin-right: auto;
    `}
`;

export const ContentContainer = styled.div`
    align-items: center;
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    border-radius: 4px;
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    transition: 0.3s ease-in-out;
    z-index: 5;

    &:hover, &:focus {
        background-color: ${colors.white};
        border: 1px solid ${colors.lightGray};
        box-shadow: 0px 0px 4px rgba(0,0,0,0.05);
    }

    ${props => props.isSticky && css`
        background-color: ${colors.white};
        border: 1px solid ${colors.lightGray};
    `}

    ${props => props.isActive && css`
        background-color: ${colors.white};
        border: 1px solid ${colors.lightGray};
        border-radius: 4px 4px 0 4px;
        box-shadow: 0px 0px 4px rgba(0,0,0,0.05);
    `}
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
    width: calc(25px + 16px);

    &:hover {
        border-color: ${colors.lightGray};
    }

    &:focus {
        outline: none;
    }

    ${props => props.isActive && css`
        border-color: ${colors.lightGray};
        border-radius: 4px;
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
        transform: translateY(-80px);
        opacity: 0;
    }

    70% {
        transform:  translateY(0);
        opacity: 1;
    }
`;

export const ListContainer = styled.ul`
    border-width: 1px 1px 1px 1px;
    border-color: ${colors.lightGray};
    border-style: solid;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.05);
    list-style: none;
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 94px;
    right: 16px;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: translateY(-100px);
    transform-origin: 100% 0%;
    width: 200px;
    z-index: -1;

    ${media.medium`
        top: 118px;
        right: 16px;
    `}
    
    ${props => props.isActive && css`
        /* animation: ${AnimateList} 0.5s; */
        opacity: 1;
        pointer-events: all;
        transform: translateY(0px);
        z-index: 3;
    `}  
`;

export const ListItem = styled.li`
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGray};
    margin: 0;
    transition: background-color 0.3s ease-in-out;

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