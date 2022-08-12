import React, { useState } from "react";

const FaqContainer = ({ title, children }) => {

    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 mx-auto lg:pb-24 lg:px-6 py-8">
                <h2 class="mb-6 text-3xl font-extrabold text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                    {title}
                </h2>
                <div class="max-w-screen-md mx-auto">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Faq = ({question, paragraphs, isFirst=false}) => {
    const [isOpen, setIsOpen] = useState(isFirst);
    return (
        <>
            <h3>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    type="button" 
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-xl md:text-3xl border-b border-gray-200 dark:border-gray-700" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span>{question}</span>
                    {isOpen ?
                    <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    : <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                }
                </button>
            </h3>
            <div class={`${isOpen ? '': 'hidden'}`}>
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    {paragraphs && paragraphs.map((paragraph) => 
                        <p class="text-gray-500 dark:text-gray-400 mb-4">
                            {paragraph}
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

const CorsoFPVFaq = () => {

    return (
        <FaqContainer title="Domande Frequenti">
            <Faq 
                question="Quando si fanno le lezioni?"
                paragraphs={["Le lezioni teoriche online si tengono la sera in settimana e tipicamente durano un paio di ore al massimo. Per quanto riguarda gli esercizi sul simulatore, l'allievo avrà la possibilità di esercitarsi in autonomia nel tempo libero. Infine, le lezioni pratiche si svolgono il sabato dalla mattina al pomeriggio."]}
                isFirst={true} 
            />
            <Faq 
                question="Di cosa ho bisogno per partecipare?"
                paragraphs={["L'unica cosa di cui hai bisogno per partecipare al corso è un computer per seguire le lezioni online ed esercitarti sul simulatore. Sono invece inclusi nel corso, il noleggio del radiocomando, occhiali, drone FPV e una licenza del simulatore."]}
            />
            <Faq 
                question="Non ho un computer, posso partecipare lo stesso?"
                paragraphs={["Se non sei in possesso di un computer, non ti preoccupare ci pensiamo noi! Per le lezioni online di teoria, potrai comunque connetterti anche dal telefono. Per quanto riguarda il simulatore, la base di Annone Brianza mette a disposizione tre computer si cui svolgere gli eserizi al simulatore."]}
            />
            <Faq 
                question="È possibile fare lezioni extra?"
                paragraphs={["Sì, è possibile richiedere lezioni extra per approfondire diversi aspetti tra cui: costruzione di un drone FPV, PID Tuning e infine, tutto il necessario per lavorare con droni FPV. Sono disponibili su richiesta anche lezioni individuali e consulenze personalizzate per rispondere a eventuali dubbi specifici."]}
            />
        </FaqContainer>
    )
}

const CorsoFPVProgramma = () => {
    return (
        <FaqContainer title="Programma del corso">
            <Faq 
                question="Argomenti di Teoria"
                paragraphs={[
                    "1. Introduzione al mondo FPV, cenni storici, i tipi di droni FPV. Applicazioni dei droni FPV e stili di volo. Spiegazione del setup consigliato per iniziare",
                    "2. Fisica del drone: come vola un drone, funzionamento di un quadricottero e gli assi di movimento. Differenza tra modalità acro e stabilizzato.",
                    "3. Come è fatto un drone FPV: cosa sono e come funzionano i vari componenti (Frame, FC, ESC, Camera, VTX, Antenne ecc), radiocomandi e occhiali. Digitale vs Analogico",
                    "4. Come configurare il drone: Spiegazione di tutte le funzionalità in Betafligth Configurator 4.3",
                ]}
                isFirst={true} 
            />
            <Faq 
                question="Esercizi sul simulatore"
                paragraphs={[
                    "1. Hovering: Come mantenere il drone in volo in un punto",
                    "2. Stop & Go: Controllo del movimento e frenata in spazi ristretti",
                    "3. Curve Semplici: Controllo del drone in curve a destra e a sinistra con limitazioni di spazio",
                    "4. Curve Strette: Controllo del drone a velocità sostenuta in curva",
                    "5. Atterraggio: Procedura di atterraggio in sicurezza e disarmo",
                    "6. Thorottle Control: Gestione del gas e controllo dell'altitudine",
                    "7. Manovre acrobatiche: Esecuzione del Roll Spin, Pitch Spin, Powerloop e  Split S",
                ]}
            />
            <Faq 
                question="Lezioni Pratiche"
                paragraphs={[
                    "1. Tutti gli esercizi imparati sul simulatore verranno eseguiti nel campo volo con il drone fornito dalla base",
                    "2. Laboratorio di piccole manutenzioni sul drone",
                    "Durante le prove pratiche gli allievi saranno affiancati da istruttori certificati."
                ]}
            />    
        </FaqContainer>
    )
}

export {
    CorsoFPVFaq,
    CorsoFPVProgramma
}