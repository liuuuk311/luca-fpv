import styled from 'styled-components';
import { colors, fonts, media } from '../../../utils';

export const Container = styled.div`
margin: 24px auto 48px auto;
max-width: 900px;
padding: 0 16px;
width: calc(100% - 32px); 
`;

export const DealList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;


    a {
        display: block;
        padding: 16px;
        text-decoration: none;

        ${media.medium`
            padding: 24px;
        `}
    }   
`;

export const DealItem = styled.li`
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    display: block;
    transition: background-color 0.3s ease-in-out;
`;

export const Date = styled(fonts.Eyebrow)`
    color: ${colors.darkGray};
    margin: 0;
`;

export const SubSubHeading = styled(fonts.SubSubHeading)`
    color: ${colors.black};
    margin: 2rem auto 1rem 0;
    max-height: 145px;
`;

export const DiscountPercentage = styled(fonts.Billboard)`
    color: ${colors.personality};
    margin: 2px 0 4px 0;

    font-size: 26px;
    line-height: 32px;

    ${media.medium`
        margin: 8px 0 16px 0;
        font-size: 52px;
        line-height: 60px;
    `}
`;

export const Content = styled.div`
    color: ${colors.black};
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    max-width: 22rem;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    ${media.medium`
        flex-direction: row;
    `}
`;

export const Discount = styled.div`
    margin: 0 2rem! important;
    order: 2;
    text-align: left;
    position: absolute;
    top: 15rem;
    width: 100;

    ${media.medium`
        max-width: 8rem;
        text-align: center;
        position: relative;
        top: 0;
        left: 0;
        margin: auto !important;
    `}
`

export const Image = styled.img`
    max-width: 250px;
    width: 100%;
    height: 100%;
    margin: 0 auto 2.5rem auto;

    ${media.medium`
        margin: 0;
    `}
`;

export const Text = styled(fonts.Body)`
    color: ${colors.darkGray};

    font-size: 16px;
    line-height: 20px;

    ${media.medium`
        font-size: 18px;
        line-height: 26px;
    `}
`

export const Ribbon = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
    top: -10px;
    right: -10px; 

    &:after {
        bottom: 20px;
        right: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 5px solid #32a852;
    }
    &:before { 
        top: 0;
      left: 20px;
      border-top-color: transparent;
      border-right-color: transparent;
      position: absolute;
      z-index: -1;
      content: '';
      display: block;
      border: 5px solid #32a852;
      box-sizing: content-box;
    }
`;

export const RibbonContent = styled.span`
    left: -25px;
    top: 30px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    display: block;
    width: 225px;
    padding: 0.25rem 0;
    background-color: #32a852;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.192);
    color: #fff;
    text-shadow: 0 2px 2px rgba(0,0,0,.2);
    text-transform: uppercase;
    text-align: center;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ExpirationDate = styled.span`

`;

export const Warehouse = styled.span`
    margin: 0 3rem;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem 0 !important;
    
    ${media.medium`
        flex-direction: row;
    `}
`;

export const Code = styled.button`
    margin: 0;
    padding 1rem 0.5rem;
    background-color: #eda550;
    max-width: 300px;
    width: 100%;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    border: 0px;
    text-transform: uppercase;

    ${media.medium`
        max-width: 300px;
        width: 60%;
    `}

    &:after {
        content: " \f0ea";
        font: normal normal normal 17px/1 FontAwesome;

    }

    &:hover {
        font-weight: 500;
        background-color: #de9c50; 
    }
`;

export const Shop = styled.div`
    margin: 1rem 0;
    padding 1rem;
    background-color: #32a852;
    text-transform: uppercase;
    max-width: 300px;
    width: 100%;
    border-radius: 4px;
    color: #fff;
    text-align: center;

    ${media.medium`
        max-width: 300px;
        width: 45%;
        margin: 0.3rem auto;
    `}


    &: hover {
        font-weight: 500;
        background-color: #2d964a; 
    }
`;

export const ShopLink = styled.button`
    padding: 0 !important;
    display: inline !important;
    color: #fff;
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    height: 100%;

    &:after {
        content: "  \f08e";
        font: normal normal normal 17px/1 FontAwesome;
        
    }
`;

export const Modal = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0, 0, 0, 0.45)
`;

export const CopiedMessage = styled.div`
    background-color: #fefefe;
    margin: 35% auto;
    padding: 20px;
    border: 1px solid ${colors.lightGray};
    width: 90%;
    text-align: center;

    ${media.medium`
        margin: 15% auto;
        width: 60%;
    `}
`;

export const OldPrice = styled.span`
    display: inline;
    text-decoration: line-through;
    color: ${colors.darkGray};
    margin: 0 0.5rem;
    font-size: 14px;
`;
export const Price = styled.span`
    display: inline;
    margin: 0 0.5rem;
    font-size: 18px;
    font-weight: 700;
`;

export const PriceContainer = styled.div`
    margin: 1rem 0;
`;