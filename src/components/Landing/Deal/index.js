import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';



import {
    Container,
    DealList,
    DealItem,
    SubSubHeading,
    DiscountPercentage,
    Content,
    ItemContainer,
    Discount,
    Image,
    Text,
    Ribbon,
    RibbonContent, 
    Details,
    ExpirationDate,
    Warehouse,
    Code,
    Shop,
    Actions,
    ShopLink,
    CopiedMessage,
    Modal,
    OldPrice,
    Price,
    PriceContainer
} from './styled';

const Deals = () => {

    const data = useStaticQuery(graphql`
    {
        allCouponsJson {
            edges {
                node {
                    code
                    expire_date
                    link
                    title
                    warehouse
                    img
                    new_price
                    original_price
                    discount {
                        amount
                        text
                    }
                }
            }
        }
    }   
    `)

    const posts = data.allCouponsJson.edges;
    const [copySuccess, setCopySuccess] = useState(null);

    const copyOnClick = (toCopy, link) => {
        navigator.clipboard.writeText(toCopy);
        const text = "Codice Copiato!\nOra clicca su ACQUISTA, poi aggiungi il prodotto nel carello e prima del pagamento incolla questo coupon."
        const success = <div>
            {text.split("\n").map((str, index) => index == 0 ? <h2>{str}</h2> : <p>{str}</p>)}
            <Shop><ShopLink onClick={() => redirectCloseModal(link)}>Acquista</ShopLink></Shop>
        </div>
        setCopySuccess(success)
    }

    const redirectCloseModal = (link) => {
        setCopySuccess(null);
        window.open(link, "_blank");
    }

    return (
        <Container>
            <DealList>
            {copySuccess && <Modal><CopiedMessage>{copySuccess}</CopiedMessage></Modal>}
                {posts.map(( node, index ) => {
                    const { node : { code, expire_date, link, title, warehouse, img, discount, new_price, original_price } } = node;
                    return (
                        <DealItem key={index}>

                            <ItemContainer>
                            <Ribbon>
                                    <RibbonContent>VERIFICATO</RibbonContent>
                                </Ribbon>
                                <Image src={img}/>

                                <Content>
                                    <SubSubHeading>{title}</SubSubHeading>
                                    <Details>
                                        <ExpirationDate>Scade: {expire_date}</ExpirationDate>
                                        <Warehouse>Magazzini: {warehouse}</Warehouse>
                                    </Details>
                                    <PriceContainer>
                                        Prezzo:
                                        <OldPrice>{original_price}</OldPrice>
                                        <Price>{new_price}</Price>
                                    </PriceContainer>
                                    <Actions>
                                        <Code onClick={() => copyOnClick(code, link)}>Copia il codice</Code>
                                    </Actions>
                                    
                                </Content>
                                {discount &&
                                <Discount>
                                    <DiscountPercentage>{discount.amount}</DiscountPercentage>
                                    <Text>{discount.text}</Text>
                                </Discount>
                                }
                                
                           </ItemContainer>
                        </DealItem>
                    )
                })}
            </DealList>
        </Container>
    );
}

export default Deals;
