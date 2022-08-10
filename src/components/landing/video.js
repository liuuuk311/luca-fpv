import React from "react";
import YouTubeEmbed  from "../blog/youtube-embed";

const TextAndVideo = ({title, paragraphs, videoUrl}) => {

    return (
        <section className="my-12 py-8">
            <div className="flex gap-8 flex-col md:flex-row max-w-7xl mx-auto p-4 sm:p-6 items-center">
                <div className="md:w-1/2">
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h1>
                    {paragraphs && paragraphs.map((paragraph) => <p className="mb-8 font-light lg:text-xl">{paragraph}</p>)}
                </div>
                <div className="md:w-1/2">
                    <YouTubeEmbed link={videoUrl} />
                </div>
            </div>
        </section>
    );
}

const CorsoFPVVideo = () => {

    return <TextAndVideo 
        title="Perché un corso FPV?"
        paragraphs={[
            "Ti potrai chiedere se è davvero necessario fare un corso per poter pilotare droni FPV. Volare in modalità acro con un drone FPV, non è semplice.",
            "Il corso serve a darti le nozioni in maniera chiara e ordinata, facendoti risparmiare tanto tempo. Tempo che altrimenti dovresti passare a guardare video e leggere forum per capire come bindare il radiocomando, ad esempio.",
            "Inoltre, partecipando al corso, imparai più in fretta. Infatti in media le persone che si approcciando all'FPV, ci impiegano più di 3 mesi prima di volare con confidenza e sicurezza.",
            "Infine, seguendo i consigli dei più esperti che ti seguiranno passo passo, minimizzerai gli errori, non sprecherai soldi in pezzi di ricambio, e soprattutto non rischi di demoralizzarti dopo le prime difficoltà.",
        ]}
        videoUrl="https://youtu.be/baj7IMXzcj8"/>
}

export {
    CorsoFPVVideo,
}