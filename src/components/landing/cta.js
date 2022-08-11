import React, { useState } from 'react'
import Modal from 'react-modal';
import "../../styles/modal.css"

const CallToActionContainer = ({ title, content, callToAction, sectionID, children, withModal }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <section className="bg-gray-50 dark:bg-gray-800" id={sectionID}>
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-sm mx-auto text-center">
                    <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">{title}</h2>
                    <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">{content}</p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-white bg-[#eda550] hover:bg-[#c98028] font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none uppercase">
                        {callToAction}
                    </button>
                </div>
            </div>
            {withModal && <Modal
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
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="w-full inline-flex uppercase justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#EDA550] text-base font-medium text-white  hover:bg-[#c98028] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                            Prenota Ora
                        </button>
                        <button 
                            onClick={() => setIsOpen(false)}
                            type="button" 
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Esci
                        </button>
                    </div>
                </div>
            </Modal>
            }  
        </section>
    )
}




const CorsoFPVCallToAction = () => {
    return <CallToActionContainer
        title="Prenota ora il tuo posto"
        content="Prenota subito il tuo posto per l'unico corso FPV in Italia. Una volta inseriti i dati, verrai contattato dal nostro team per ulteriori dettagli."
        callToAction="Prenota ora!"
        sectionID="iscriviti">

    </CallToActionContainer>
}


const RisoluzioneProblemiFPVCallToAction = () => {
    return <CallToActionContainer
        title="Scarica ora la tua guida gratuita"
        content="Ricevi il PDF con le soluzioni ai problemi più comuni nel mondo FPV, direttamente sulla tua email."
        callToAction="Scarica ora!"
        sectionID="download">

    </CallToActionContainer>
}

const OfferteCallToAction = () => {
    return <CallToActionContainer
        title="Entra ora nel canale delle offerte!"
        content="Inizia subito a risparmiare su tantissimi oggetti FPV. Da flight controller a droni completi!"
        callToAction="Entra ora!"
        sectionID="unisciti"/>
}

export {
    CorsoFPVCallToAction,
    RisoluzioneProblemiFPVCallToAction,
    OfferteCallToAction,
}