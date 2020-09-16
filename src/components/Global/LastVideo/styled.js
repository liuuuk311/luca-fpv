import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 0;
`;

export const IFrame = styled.iframe`
    position: absolute;
    border-width: 0;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
`;
