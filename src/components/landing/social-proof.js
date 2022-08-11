import React from 'react'
import { HardwareIcon, SolutionsIcon, UsersIcon, BetaflightIcon } from "./icons";

const SocialProof = ({ title, subtitle, content, data }) => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24">
                <div class="col-span-2 mb-8">
                    <p class="text-lg font-medium text-[#eda550] dark:text-purple-500">{subtitle}</p>
                    <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">{title}</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">{content}</p>
                </div>
                <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    {data && data.map(({ title, content, icon }) => {
                        return (
                            <div>
                                {icon}
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
        {
            title: "Problemi Hardware",
            content: "Motori, ESC, riceventi e VTX",
            icon: <HardwareIcon />
        },
        {
            title: "Betaflight",
            content: "Soluzioni ai problemi con Betaflight",
            icon: <BetaflightIcon />
        },
        {
            title: "Più di 30 soluzioni",
            content: "In questa guida troverai più di 30 soluzioni ai problemi più comuni",
            icon: <SolutionsIcon />
        },
        {
            title: "Più di 400 piloti",
            content: "Questa guida ha aiutato più di 400 piloti FPV a sistemare il loro drone",
            icon: <UsersIcon />
        }
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