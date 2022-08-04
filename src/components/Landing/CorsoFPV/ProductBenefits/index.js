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
                    <p>Per garantire la massima flessibilità agli allivi, per questa seconda edizione del corso, abbiamo deciso di tenere le lezioni pratiche online.</p>
                    <p>Non sarà il classico video corso, le lezioni saranno effettuate in videochiamata, in modo tale che ci possa essere interazioni tra allivi e istruttori, inoltre in questo modo è possibile fare domande e ottenere risposte immediatamente.</p>
                </TagLine1>
                <Image1/>
                <TagLine2>
                    <h2>7 esercizi guidati con il simulatore</h2>
                    <p>Prima di pilotare un vero drone FPV è fondamentale esercitarsi in un ambiente sicuro, dove gli errori non costano caro e non sono pericolosi.</p>
                    <p>Per questo motivo abbiamo sviluppato degli esercizi che verranno svolti sul simulatore, che permettono di consolidare le basi del volo in modalità acro. </p>
                </TagLine2>
                <Image2/>
                <TagLine3>
                    <h2>2 lezioni pratiche</h2>
                    <p>Sono previste due giornate alla scuola di volo, in cui gli allievi, supervisionati dagli istruttori, potranno volare con i droni forniti dalla base.</p>
                    <p>In queste sessioni gli allievi, condurranno le manovre imparate sul simulatore per poi concludere il corso con un esame pratico.</p>
                </TagLine3>
                <Image3/>
                <TagLine4>
                    <h2>Supporto costante</h2>
                    <p>Gli istruttori saranno a tua completa disposizione durante l'intero corso, sia in presenza che tramite piattaforme Web-Chat.</p>
                    <p>Per questo motivo abbiamo sviluppato degli esercizi che verranno svolti sul simulatore, che permettono di consolidare le basi del volo in modalità acro. </p>
                </TagLine4>
                <Image4/>
            </ProductBenefitGroup>
        </Section>
    );
}

export default ProductBenefit;
