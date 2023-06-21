import React, { useState } from "react"

import Modal from 'react-modal';
import { NewsletterForm } from "../landing/forms";

const NewsletterCard = ({extraCssClasses}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div class={`w-full max-w-sm bg-white rounded-lg border shadow-sm dark:bg-gray-800 dark:border-gray-700 ${extraCssClasses ? extraCssClasses : ''}`}>
            <div class="flex flex-col items-start p-5">
                <h5 class="mb-1 text-lg font-bold text-gray-900 dark:text-white">Newsletter FPV</h5>
                <p class="text-md text-gray-500 dark:text-gray-400">
                    Riceverai al massimo 2 email al mese con consigli utili, sconti e offerte degli migliori negozi FPV che condivido solo con gli iscritti! 
                </p>
                <div class="flex mt-2 space-x-6 sm:justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-white bg-[#eda550] hover:bg-[#c98028] font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none uppercase">
                    Iscriviti Ora
                </button>
                </div>  
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                preventScroll={true}
                ariaHideApp={false}
                className="p-4 sm:p-0"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center"
            >          
                <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl sm:max-w-lg sm:w-full m-auto">
                    <div className="bg-white pt-5 pb-4 p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <NewsletterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}


export default NewsletterCard;