import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const GridTextImage = ({ title, subTitle, paragraphs, cta_label, cta_link, image, altText, backgroundUrl, imageFirst }) => {
    const cssBgSVGstyle = !image && backgroundUrl ?
        { backgroundImage: `url("${backgroundUrl}")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }
        : null

    return (
        <section className="my-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            {imageFirst && <div className={`h-72 md:h-96 col-start-1 row-start-1`} style={cssBgSVGstyle}>
                {!cssBgSVGstyle ? <GatsbyImage
                    image={image}
                    className="rounded-lg"
                    alt={altText}
                /> : ""
                }
            </div>
            }
            <div className={`my-auto ${!imageFirst ? '' : 'col-start-2'}`}>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{title}</h1>
                {subTitle && <h3 className="text-xl md:text-2xl font-semibold mb-2">{subTitle}</h3>}
                {paragraphs && paragraphs.map((paragraph) => <p className="  text-xl mb-8">{paragraph}</p>)}
                {cta_link && cta_label &&
                    <Link className="text-xl font-semibold bg-[#EDA550] p-4 rounded-lg text-white inline"
                        to={cta_link}>
                        {cta_label}
                    </Link>}
            </div>
            <div className={`h-72 md:h-96 col-start-1 row-start-1`} style={cssBgSVGstyle}>
                {!cssBgSVGstyle ? <GatsbyImage
                    image={image}
                    className="rounded-lg"
                    alt={altText}
                /> : ""
                }
            </div>
        </section>
    );
}

const CorsoFPVGrid = () => {

    return <>
        <GridTextImage
            title="4 LEZIONI DI TEORIA ONLINE"
            paragraphs={[
                "Per garantire la massima flessibilità agli allievi, per questa seconda edizione del corso, abbiamo deciso di tenere le lezioni teoriche online.",
                "Non sarà il classico video corso. Le lezioni saranno effettuate in videochiamata, in modo tale da garantire le interazioni tra allievi e istruttori e permettere di fare domande e ottenere risposte immediatamente."
            ]}
            backgroundUrl="/assets/corso-fpv/teoria.svg"
        />
        <GridTextImage
            title="7 ESERCIZI GUIDATI CON IL SIMULATORE"
            paragraphs={[
                "Prima di pilotare un vero drone FPV è fondamentale esercitarsi in un ambiente sicuro, dove gli errori non costano caro e non sono pericolosi.",
                "Per questo motivo abbiamo sviluppato degli esercizi guidati che verranno svolti sul simulatore Velocidrone, che permettono di consolidare le basi del volo in modalità acro.",
            ]}
            backgroundUrl="/assets/corso-fpv/simulatore.svg"
            imageFirst={true}
        />
    </>
}

export {
    CorsoFPVGrid,
}