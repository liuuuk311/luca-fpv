import React from 'react';
import Seo from "../../components/seo"
import { EmailField, MessageArea, NameField } from '../../components/inputs';


const Contact = () => {
    return (
        <>
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
                    <NameField id="name" name="name"/>
                    <EmailField id="email" name="email"/>
                    <MessageArea id="message" name="message"/>
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

export const Head = () => (
    <Seo 
      title="Contattami - Luca FPV" 
      description="Contatta Luca"
    />
  )