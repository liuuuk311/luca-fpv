import React from 'react'

const SocialProof = ({title, subtitle, content, data}) => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24">
                <div class="col-span-2 mb-8">
                    <p class="text-lg font-medium text-[#eda550] dark:text-purple-500">{subtitle}</p>
                    <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">{title}</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">{content}</p>
                </div>
                <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    {data && data.map(({title, content}) => {
                        return (
                            <div>
                            <svg class="w-10 h-10 mb-2 text-[#eda550] md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                            <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
                            <p class="font-light text-gray-500 dark:text-gray-400">{content}</p>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}


const RisoluzioneProblemiFPVSocialProof = () => {
    const data = [
        {title: "Problemi Hardwere", content: "Motori, ESC, riceventi e VTX"},
        {title: "Betaflight", content: "Soluzioni ai problemi con Betaflight"},
        {title: "Più di 400 piloti", content: "Questa guida ha aiutato più di 400 piloti FPV a sistemare il loro drone"}
    ]

    return (
        <SocialProof 
            data={data}
            title="Ripara il tuo drone FPV e torna a volare" 
            subtitle="Problemi Comuni"
            content="Che tu abbia appena comprato il drone, oppure ci voli già da mesi, tutti prima o poi incontreranno un problema che li blocca. Questo PDF raccoglie tutte le soluzioni ai problemi più comuni." />
    )
}

export {
    RisoluzioneProblemiFPVSocialProof,
}