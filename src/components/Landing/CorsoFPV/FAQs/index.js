
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
                <Body>Le lezioni teoriche online si tengono la sera in settimana. Tipicamente durano al massimo un paio di ore. Per quanto riguarda gli esercizi sul simulatore, l'allievo avrà la possibilità di esercitarsi in autonomia nel suo tempo libero. Infine, le lezioni pratiche tipicamente si tengono il sabato dalla mattina al pomeriggio. Se desideri avere un calendario dettagliato, <a href="#iscriviti">contattaci</a>!</Body>
                <Heading>Di cosa ho bisogno per partecipare?</Heading>
                <Body><strong>L'unica cosa di cui hai bisogno è un computer e almeno il patentino A1/A3</strong>. Il computer ti servirà per poter partecipare alle lezioni online e ad esercitarti sul simulatore. <strong>Se ti manca il patentino, non ti preoccupare. Potrai farlo durante il corso.</strong> Il noleggio del Radiocomando, Occhiali, Drone FPV, e una licenza del simulatore, è incluso.</Body>
                <Heading>È possibile fare lezioni extra?</Heading>
                <Body>Si, è possibile richiedere lezioni extra per approfondire diversi aspetti tra cui: Come costruire un drone FPV, approfondimento sul PID Tuning, e infine tutto il necessario per lavorare con droni FPV. </Body>
                <Body>È anche possibile richiedere lezioni individuali e consulenze per rispondere a tutti i vostri dubbi.</Body>
            </Container>
        </Section>
    )
}

export default FrequentlyAskedQuestions;