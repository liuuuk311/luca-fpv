import React from "react";

const FPVfinderAds = () => {
  return (
    <div className="border rounded-lg shadow-sm p-5">
        <h4 className="text-lg uppercase font-light">Risparmia tempo e denaro con</h4>
        <h2 className="text-4xl font-bold">FPVfinder</h2>
        <hr className="w-24 h-1 bg-[#EDA550] mb-2" />
        <p className="text-md text-gray-500 dark:text-gray-400">Cerca i tuoi prodotti FPV preferiti su più di 20 negozi in un singolo click</p>
        <a
            href={"https://fpvfinder.lucafpv.com"}
            className="inline-block mt-4 text-white bg-[#eda550] hover:bg-[#c98028] font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none uppercase">
            Usa ora gratis
        </a>
    </div>
  );
};



export { FPVfinderAds };
