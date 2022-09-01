import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const RowTextImage = ({ title, subTitle, paragraphs, cta_label, cta_link, image, altText, backgroundUrl, imageFirst }) => {
    const cssBgSVGstyle = !image && backgroundUrl ?
        {
            backgroundImage: `url("${backgroundUrl}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom"
        } : null

    const imgBlock = !cssBgSVGstyle ? <GatsbyImage image={image} className="rounded-lg" alt={altText} /> : ""

    const imgPositionClasses = imageFirst ? "md:row-start-1 md:col-start-1" : "md:row-start-1 md:col-start-2"
    return (
        <div className="grid gap-8 grid-cols-1 grid-row-2 md:grid-cols-2 md:grid-row-1">
            <div className="my-auto">
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h1>
                {subTitle && <h3 className="text-xl md:text-2xl font-semibold mb-2">{subTitle}</h3>}
                {paragraphs && paragraphs.map((paragraph) => <p className="mb-8 font-light lg:text-xl">{paragraph}</p>)}
                {cta_link && cta_label &&
                    <Link className="text-xl font-semibold bg-[#EDA550] p-4 rounded-lg text-white inline"
                        to={cta_link}>
                        {cta_label}
                    </Link>}
            </div>
            <div className={`h-72 md:h-96 ${imgPositionClasses}`} style={cssBgSVGstyle}>
                {imgBlock}
            </div>
        </div>
    );
}

const Grid = ({ children }) => {
    return (
        <section className="my-12 py-8">
            {children}
        </section>
    )
}

const CorsoFPVGrid = () => {

    return <Grid>
        <RowTextImage
            title="4 lezioni di teoria online"
            paragraphs={[
                "Per garantire la massima flessibilità agli allievi, per questa seconda edizione del corso, abbiamo deciso di tenere le lezioni teoriche online.",
                "Non sarà il classico video corso. Le lezioni saranno effettuate in videochiamata, in modo tale da garantire le interazioni tra allievi e istruttori e permettere di fare domande e ottenere risposte immediatamente."
            ]}
            backgroundUrl="/assets/corso-fpv/teoria.svg"
        />
        <RowTextImage
            title="7 esercizi guidati con il simulatore"
            paragraphs={[
                "Prima di pilotare un vero drone FPV è fondamentale esercitarsi in un ambiente sicuro, dove gli errori non costano caro e non sono pericolosi.",
                "Per questo motivo abbiamo sviluppato degli esercizi guidati che verranno svolti sul simulatore Velocidrone, che permettono di consolidare le basi del volo in modalità acro.",
            ]}
            backgroundUrl="/assets/corso-fpv/simulatore.svg"
            imageFirst={true}
        />
        <RowTextImage
            title="2 lezioni pratiche"
            paragraphs={[
                "Sono previste due giornate alla base Italdron di Annone Brianza (LC), in cui gli allievi, supervisionati dagli istruttori, potranno volare con i droni forniti dalla scuola di volo.",
                "In queste due sessioni, gli allievi avranno la possibilità di effettuare dal vivo le manovre imparate sul simulatore per poi concludere il corso con un esame pratico.",
            ]}
            backgroundUrl="/assets/corso-fpv/pratica.svg"
        />
        <RowTextImage
            title="supporto costante"
            paragraphs={[
                "Durante tutta la durata del corso, gli istruttori saranno a completa disposizione degli allievi, sia in presenza che tramite app di messaggistica per rispondere a qualsiasi dubbio e perplessità.",
            ]}
            backgroundUrl="/assets/corso-fpv/supporto.svg"
            imageFirst={true}
        />
    </Grid>
}


const RisoluzioneProblemiFPVGrid = () => {

    return <Grid>
        <RowTextImage
            title="Scritta completamente in Italiano"
            backgroundUrl="/assets/problemi-comuni/ben2.svg"
        />
        <RowTextImage
            title="Non perdere tempo e torna a volare"
            backgroundUrl="/assets/problemi-comuni/ben3.svg"
            imageFirst={true}
        />
    </Grid>
}

export {
    CorsoFPVGrid,
    RisoluzioneProblemiFPVGrid
}