import React from "react";
import "../../styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

const TestimonialQuote = ({ quote, name, details }) => {

    return (
        <figure class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
                <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"{quote}"</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-gray-900 dark:text-white">{name}</div>
                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{details}</div>
                </div>
            </figcaption>
        </figure>
    )
}

const TestimonialsContainer = ({ title, subtitle, children }) => {

    return (
        <section class="bg-gray-50 dark:bg-gray-800">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">{subtitle}</p>
                </div>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    autoPlay={true}
                    interval={10000}
                >
                    {children}
                </Carousel>
            </div>
        </section>
    )
}

const CorsoFPVTestimonials = () => {
    return <TestimonialsContainer title="Il parere degli allievi" subtitle="Ecco cosa dicono di questo corso le persone che lo hanno già seguito">
        <TestimonialQuote
            quote="Prima di questo corso volavo con droni stabilizzati ma l'FPV mi ha sempre intragato. Ho provato a cimentarmi da solo guardando video su YouTube, ma la complessità mi ha spaventato e ho lasciato perdere. Grazie a questo corso, in poche settimane ho imparato tutto quello che mi serviva per volare con un drone FPV."
            name="Gabriele M."
            details="Allievo I edizione FPVAcademy" />
        <TestimonialQuote
            quote="Dopo i primi esercizi al simulatore avevo mi sono reso conto di quanto fosse difficile volare in modalità acro. Gli istruttori del corso Luca e Nicholas mi hanno subito spiegato cosa sbagliavo. Dopo ore di esercizi al simulatore le giornate di partica sono state molto divertenti."
            name="Jacopo B."
            details="Allievo I edizione FPVAcademy" />
        <TestimonialQuote
            quote="Il corso e le lezioni sono tenute in modo professionale e leggere al tempo stesso. Gli istruttori sono davvero preparati hanno sempre saputo chiarire i miei dubbi e mi hanno consigliato anche l'attrezzatura per iniziare a pilotare in modo professionale (meno male perché stavo per spendere soldi in cose sbagliate)."
            name="Davide S."
            details="Allievo I edizione FPVAcademy" />

    </TestimonialsContainer>
}

export {
    CorsoFPVTestimonials,
}