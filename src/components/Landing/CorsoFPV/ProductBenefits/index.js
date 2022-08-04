import React from 'react';

import {
    Section,
    ProductBenefitGroup,
    TagLine1,
    Image1,
    TagLine2,
    Image2,
    TagLine3,
    Image3,
    TagLine4,
    Image4,
} from './styled';

const ProductBenefit = () => {
    return (
        <Section>
            <ProductBenefitGroup>
                <TagLine1>
                    <h2>4 lezioni di teoria online</h2>
                    <p>Per garantire la massima flessibilità agli allievi, per questa seconda edizione del corso, abbiamo deciso di tenere le lezioni teoriche online.</p>
                    <p>Non sarà il classico video corso. Le lezioni saranno effettuate in videochiamata, in modo tale da garantire le interazioni tra allievi e istruttori e permettere di fare domande e ottenere risposte immediatamente.</p>
                </TagLine1>
                <Image1/>
                <TagLine2>
                    <h2>7 esercizi guidati con il simulatore</h2>
                    <p>Prima di pilotare un vero drone FPV è fondamentale esercitarsi in un ambiente sicuro, dove gli errori non costano caro e non sono pericolosi.</p>
                    <p>Per questo motivo abbiamo sviluppato degli esercizi guidati che verranno svolti sul simulatore Velocidrone, che permettono di consolidare le basi del volo in modalità acro. </p>
                </TagLine2>
                <Image2/>
                <TagLine3>
                    <h2>2 lezioni pratiche</h2>
                    <p>Sono previste due giornate alla base Italdron di Annone Brianza (LC), in cui gli allievi, supervisionati dagli istruttori, potranno volare con i droni forniti dalla scuola di volo.</p>
                    <p>In queste due sessioni, gli allievi avranno la possibilità di effettuare dal vivo le manovre imparate sul simulatore per poi concludere il corso con un esame pratico.</p>
                </TagLine3>
                <Image3/>
                <TagLine4>
                    <h2>Supporto costante</h2>
                    <p>Durante tutta la durata del corso, gli istruttori saranno a completa disposizione degli allievi, sia in presenza che tramite app di messaggistica per rispondere a qualsiasi dubbio e perplessità.</p>
                </TagLine4>
                <Image4/>
            </ProductBenefitGroup>
        </Section>
    );
}

export default ProductBenefit;
