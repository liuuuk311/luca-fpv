import React from 'react'
import { EmailField, NameField, PhoneField } from '../inputs'

const CorsoFPVForm = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-6">
        <div className="mb-2">
            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight dark:text-white">
                Corso FPV
            </h1>
            <h3 className="mb-4 text-2xl font-semibold  dark:text-white">
                Richiesta di iscrizione
            </h3>
            <p className="font-light text-gray-500 md:text-lg dark:text-gray-400 mb-4">
                Compila il form per ricevere il calendario aggiornato e le informazioni relative ai costi.
            </p>

            <div class="flex gap-4 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="sr-only">Info</span>
                <div className="text-base">
                    La compilazione del form non è vincolante, puoi ripensarci in qualunque momento.
                </div>
            </div>
        </div>
        <form action="https://lucafpv.us19.list-manage.com/subscribe/post?u=1f9157c09ec4bcd2a7ea723d5&amp;id=d68f59b417&amp;f_id=00a68be4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <NameField id="mce-FNAME" name="FNAME"/>
            <EmailField id="mce-EMAIL" name="EMAIL"/>
            <PhoneField id="mce-PHONE" name="PHONE"/>
            <input type="checkbox" value="1" name="group[13000][4]" id="mce-group[13000]-13000-0" style={{display: "none"}} checked/>
            <input type="hidden" name="tags" value="6237349"/>
            <div className="mt-4 py-3 sm:flex sm:flex-row-reverse">
                <button type="submit" className="w-full inline-flex uppercase justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#EDA550] text-base font-medium text-white  hover:bg-[#c98028] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                    Prenota Ora
                </button>
            </div>
        </form>
    </div>
  )
}

const RisoluzioneProblemiFPVForm = () => {
    return (
        <div className="flex flex-col max-w-2xl mx-auto mt-6">
        <div className="mb-2">
            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight dark:text-white">
                Le soluzioni dei probelmi comuni
            </h1>
            <h3 className="mb-4 text-2xl font-semibold  dark:text-white">
                Scarica ora il PDF
            </h3>
            <p className="font-light text-gray-500 md:text-lg dark:text-gray-400 mb-4">
                Le soluzioni dei tuoi problemi sono solo ad un click di distanza, inserisci nome e email e il PDF verrà consegnato direttamente nella tua inbox.
            </p>

            {/* <div class="flex gap-4 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="sr-only">Info</span>
                <div className="text-base">
                    La compilazione del form non è vincolante, puoi ripensarci in qualunque momento.
                </div>
            </div> */}
        </div>
        <form action="https://lucafpv.us19.list-manage.com/subscribe/post?u=1f9157c09ec4bcd2a7ea723d5&amp;id=d68f59b417" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <NameField id="mce-FNAME" name="FNAME"/>
            <EmailField id="mce-EMAIL" name="EMAIL"/>
            <input type="checkbox" value="1" name="group[13000][1]" id="mce-group[13000]-13000-0" style={{display: "none"}} checked/>
            <div className="mt-4 py-3 sm:flex sm:flex-row-reverse">
                <button type="submit" className="w-full inline-flex uppercase justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#EDA550] text-base font-medium text-white  hover:bg-[#c98028] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                    Scarica Ora
                </button>
            </div>
        </form>
    </div>
    )
}

export {
    CorsoFPVForm,
    RisoluzioneProblemiFPVForm,
}