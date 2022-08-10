import React, { useState } from "react";

const FAQContainer = ({ title, children }) => {

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

const FAQ = ({question, answer, isFirst=false}) => {
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
                    <p class="text-gray-500 dark:text-gray-400 text-lg">
                        {answer}
                    </p>
                </div>
            </div>
        </>
    )
}

const CorsoFPVFaq = () => {

    return (
        <FAQContainer title="Domande Frequenti">
            <FAQ 
                question="Quando si fanno le lezioni?"
                answer="Le lezioni teoriche online si tengono la sera in settimana e tipicamente durano un paio di ore al massimo. Per quanto riguarda gli esercizi sul simulatore, l'allievo avrà la possibilità di esercitarsi in autonomia nel tempo libero. Infine, le lezioni pratiche si svolgono il sabato dalla mattina al pomeriggio."
                isFirst={true} />
            <FAQ 
                question="Di cosa ho bisogno per partecipare?"
                answer="L'unica cosa di cui hai bisogno per partecipare al corso è un computer per seguire le lezioni online ed esercitarti sul simulatore. Sono invece inclusi nel corso, il noleggio del radiocomando, occhiali, drone FPV e una licenza del simulatore."/>
            <FAQ 
                question="È possibile fare lezioni extra?"
                answer="Sì, è possibile richiedere lezioni extra per approfondire diversi aspetti tra cui: costruzione di un drone FPV, PID Tuning e infine, tutto il necessario per lavorare con droni FPV. Sono disponibili su richiesta anche lezioni individuali e consulenze personalizzate per rispondere a eventuali dubbi specifici."/>
        </FAQContainer>
    )
}

export {
    CorsoFPVFaq,
}