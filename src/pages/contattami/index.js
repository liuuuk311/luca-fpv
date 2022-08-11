import React from 'react';
import Helmet from 'react-helmet';


const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contattami - Luca FPV</title>
                <meta name="description" content="Contatta Luca" />
            </Helmet>
            <div className="flex flex-col max-w-2xl mx-auto mt-12">
                <div className="mb-8">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Contattami
                    </h1>
                    <p className="font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-4">
                        Se hai un dubbio, cerco di aiutarti. Ti basta riempiere il form 👇
                        </p>
                    <p className="font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-8">
                        Se non rispondo subito e hai fretta, ti conviene seguirmi e scrivermi su 
                        <a href="https://instagram.com/iamlucafpv/" target="_blank" rel="noopener nofollow noreferrer">
                            Instagram
                        </a>
                    </p>
                </div>
                <form action="https://getform.io/f/16416a86-7a7c-4646-817a-3e0c45a40ae5" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
                        <input type="text" id="name" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mario Rossi" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome.cognome@email.com" />
                        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Il tuo indirizzo email non verrà condiviso con terze parti, e <strong>non riceverai mai spam</strong>.</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Messaggio</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciao Luca, ti scrivo perché..." />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="text-white bg-[#eda550] hover:bg-[#c98028] font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none uppercase">
                            Invia
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;