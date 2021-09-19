import React from 'react';

import {
    Section,
    Container,
    Heading,
    Paragraph,
    SubHeading,
    Quote,
} from './styled';

export const HowToUse = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    Coupon di Banggood: Droni FPV e non solo
                </Heading>
                <Paragraph>
                Su questa pagina puoi trovare i migliori codici sconto che ti permettono di risparmiare su droni, radiocomandi, visori e tutto ciò che riguarda il mondo FPV. 
                </Paragraph>
                <Paragraph>
                Scegli il prodotto a cui sei interessato, <strong>clicca su copia e il codice verrà copiato nei tuoi appunti</strong>, quindi clicca acquista e verrai reindirizzato su Banggood, metti il prodotto nel carrello e nella fase di pagamento incolla il codice sconto.
                </Paragraph>
                <Quote>
                    <Paragraph>Ogni settimana puoi trovare nuovi coupon su questa pagina</Paragraph>
                </Quote>
            </Container>
        </Section>
    );
}

export const SEOText = () => {
    return (
        <Section>
            <Container>
                <SubHeading>
                    Coupon Banggood per droni FPV: risparmiare con i codici sconto
                </SubHeading>
                <Paragraph>
                    Utilizzando i codici sconto forniti da Banggood, si riesce a risparmiare parecchi soldi. Questi coupon possono ridurre il prezzo del prodotto anche del 30%. 
                </Paragraph>
                <SubHeading>
                    Come si usa un coupon di Banggood? 
                </SubHeading>
                <Paragraph>
                    <ol>
                        <li>Apri la pagina del prodotto da acquistare</li>
                        <li>Aggiungi il prodotto al carrello</li>
                        <li>Prima di pagare, in alto a destra aggiungi il codice sconto e clicca su Applica</li>
                    </ol>
                </Paragraph>
                <SubHeading>
                    Come trovo i codici sconto di Banggood?
                </SubHeading>
                <Paragraph>
                    I miglior codici sconto sempre aggiornati e verificati li trovi su questo sito. Ogni settimana mi occupo di selezionare e verificare i coupon di Banggood relativi a droni, radiocomandi, visori e tutto ciò che serve nel mondo FPV.
                </Paragraph>
                <SubHeading>
                    E' sicuro comprare su Banggood?
                </SubHeading>
                <Paragraph>
                    Banggood è stata fondata nel 2006, e fin dall'ora ha servito milioni di clienti soddisfatti in tutto il mondo. Inoltre, la possibilità di acqusitare tramite PayPal, rende questo sito ulteriormente affidabile.
                </Paragraph>
            </Container>
        </Section>
    );
}

