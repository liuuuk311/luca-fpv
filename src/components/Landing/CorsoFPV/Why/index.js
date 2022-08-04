import React from 'react';

import {
    Section,
    Container,
    Heading,
    Paragraph,
    SubHeading,
    SubContainer,
} from './styled';

export const WhyYouNeedUs = () => {
    return (
        <Section>
            <Container>
                <SubContainer>
                    <Heading>
                        Perché un corso FPV?
                    </Heading>
                    <Paragraph>
                        Ti potrai chiedere se è davvero necessario fare un corso per poter pilotare droni FPV. Volare in modalità acro con un drone FPV, non è semplice.
                    </Paragraph>
                    <Paragraph>
                        Il corso serve a darti le nozioni in maniera chiara e ordinata, facendoti risparmiare tanto tempo. Tempo che altrimenti dovresti passare a guardare video e leggere forum per capire come bindare il radiocomando, ad esempio.
                    </Paragraph>
                    <Paragraph>
                        Inoltre, partecipando al corso, imparai più in fretta. Infatti in media le persone che si approcciando all'FPV, ci impiegano più di 3 mesi prima di volare con confidenza e sicurezza.
                    </Paragraph>
                    <Paragraph>
                        Infine, seguendo i consigli dei più esperti che ti seguiranno passo passo, minimizzerai gli errori, non sprecherai soldi in pezzi di ricambio, e soprattutto non rischi di demoralizzarti dopo le prime difficoltà.
                    </Paragraph>
                </SubContainer>
                <SubContainer class="">
                    <lite-youtube videoid="baj7IMXzcj8"/>
                </SubContainer>
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

