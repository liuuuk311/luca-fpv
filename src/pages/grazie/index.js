import React from 'react';
import { LandingLayout } from '../../components/layout';
import Seo from "../../components/seo"

const ThankYou = () => {
    return (
        <LandingLayout>
        <div className="my-8 h-96 text-center flex flex-col justify-center px-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Controlla la tua email 📩
            </h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-8">
                A breve riceverai una email con ulteriori istruzioni 🥳
            </p>
        </div>
        </LandingLayout>
    );
}

export default ThankYou;

export const Head = () => (
    <Seo 
      title="Grazie - Luca FPV" 
      description="Grazie"
    />
  )