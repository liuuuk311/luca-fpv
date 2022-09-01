import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Instagram, Telegram, YouTube } from './socials'


const Author = ({ image, extraCssClasses }) => {
    
    return (
        <div class={`w-full max-w-sm bg-white rounded-lg border shadow-sm dark:bg-gray-800 dark:border-gray-700 ${extraCssClasses ? extraCssClasses : ""}`}>
            <div class="flex flex-col items-center p-5">
                <GatsbyImage
                    image={image}
                    class="mb-3 w-28 h-28 rounded-full"
                    alt="Foto di Luca FPV (@iamlucafpv)"
                />
                <h5 class="mb-1 text-lg font-light text-gray-900 dark:text-white">Autore: <span class="font-medium">Luca</span></h5>
                <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Smanetta con droni FPV dal 2016 e nel 2020 ha creato il sito <Link to="/" className='text-[#eda550] hover:underline'>lucafpv.com</Link> per aiutare i nuovi piloti FPV con decine di guide italiano sull'argomento.
                    </p>
                <div class="flex mt-4 space-x-6 sm:justify-center">
                    <Instagram />
                    <YouTube />
                    <Telegram />
                </div>  
            </div>
        </div>

    )
}

export default Author