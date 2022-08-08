
import React from 'react';

import {
    Section,
    Container
} from "./styled"

import {
    Heading,
    Body,
} from "../../../../utils/fonts";

const FrequentlyAskedQuestions = () => {
    return (
        <Section>
            <Container>
                <Heading>Quando si fanno le lezioni?</Heading>
                <Body>Le lezioni teoriche online si tengono la sera in settimana e tipicamente durano un paio di ore al massimo. Per quanto riguarda gli esercizi sul simulatore, l'allievo avrà la possibilità di esercitarsi in autonomia nel tempo libero. Infine, le lezioni pratiche si svolgono il sabato dalla mattina al pomeriggio. Se desideri ricevere un calendario più dettagliato, <a href="#iscriviti">contattaci</a>!</Body>
                <Heading>Di cosa ho bisogno per partecipare?</Heading>
                <Body>L'unica cosa di cui hai bisogno per partecipare al corso è un computer per seguire le lezioni online ed esercitarti sul simulatore. Sono invece inclusi nel corso, il noleggio del radiocomando, occhiali, drone FPV e una licenza del simulatore.</Body>
                <Heading>È possibile fare lezioni extra?</Heading>
                <Body>Sì, è possibile richiedere lezioni extra per approfondire diversi aspetti tra cui: costruzione di un drone FPV, PID Tuning e infine, tutto il necessario per lavorare con droni FPV. </Body>
                <Body>Sono disponibili su richiesta anche lezioni individuali e consulenze personalizzate per rispondere a eventuali dubbi specifici.</Body>
            </Container>
        </Section>
    )
}

export default FrequentlyAskedQuestions;