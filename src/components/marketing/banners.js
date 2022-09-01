import React from 'react'
import OutsideLink from '../blog/outside-link'

const SupportAfterArticle = () => {
    return (
        <div class="border rounded-lg shadow-md">
            <div class="mx-auto max-w-7xl p-2 md:p-3">
                <div class="flex flex-col md:flex-row justify-between">
                    <div class="flex flex-row">
                        <span class="flex p-2 hidden md:inline my-auto">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </span>
                        <span class="ml-3 font-medium py-2">
                            <span class="md:hidden">Hai trovato l'articolo utile? <span class="font-bold">Supportami anche solo con una birra.</span></span>
                            <span class="hidden md:inline">Se questo articolo ti è stato utile, <span class="font-bold">puoi supportami anche solo con una birra al mese.</span></span>
                        </span>
                    </div>
                    <div class="w-full my-2 md:my-auto md:w-1/5">
                        <OutsideLink 
                            href="https://buymeacoffee.com/iamlucafpv"             
                            extraCssClasses="flex items-center justify-center rounded-md border bg-[#eda550] px-4 py-3 text-sm font-bold shadow-sm uppercase"
                            extraStyle={{color: "white"}} 
                            label="Supporta ora!"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Support = () => {
    return (
        <div class="border rounded-lg shadow-md mb-8">
            <div class="mx-auto max-w-7xl p-2 md:p-3">
                <div class="flex flex-col md:flex-row justify-between">
                    <div class="flex flex-row md:w-4/6">
                        <span class="flex p-2 hidden md:inline my-auto">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </span>
                        <span class="ml-3 font-medium py-2">
                            <span class="md:hidden ">Stai trovando utile l'articolo? <span class="font-bold">Considera di supportarmi!</span></span>
                            <span class="hidden md:inline">Stai trovando utile l'articolo? <span class="font-bold">Puoi supportami anche solo con una birra al mese.</span></span>
                        </span>
                    </div>
                    <div class="w-full my-2 md:my-auto md:w-1/4">
                        <OutsideLink 
                            href="https://www.buymeacoffee.com/iamlucafpv" 
                            extraCssClasses="flex items-center justify-center rounded-md border bg-[#eda550] px-4 py-3 text-lg font-bold shadow-sm uppercase"
                            extraStyle={{color: "white"}}
                            label="Supporta ora!"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export {
    SupportAfterArticle,
    Support,
}