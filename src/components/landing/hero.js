import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({ title, subTitle, paragraphs, cta_label, cta_link, image, altText, backgroundUrl, extraCssClasses }) => {
  const cssBgSVGstyle = !image && backgroundUrl ?
    { backgroundImage: `url("${backgroundUrl}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionY: "center" }
    : null
  return (
    <section className={`mb-4`}>
      <div className={`flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-4 sm:p-6  ${extraCssClasses ? extraCssClasses : ""}`}>
        <div className="md:w-1/2 my-auto">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
          {subTitle && <h3 className="max-w-2xl mb-2 font-semi text-gray-600 lg:mb-4 md:text-xl lg:text-2xl dark:text-gray-400">{subTitle}</h3>}
          {paragraphs && paragraphs.map((paragraph) => <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-8">{paragraph}</p>)}
          {cta_link && cta_label &&
            <Link className="text-xl font-semibold bg-[#EDA550] p-4 rounded-lg text-white inline uppercase"
              to={cta_link}>
              {cta_label}
            </Link>}
        </div>
        <div className="md:w-1/2 h-72 md:h-96 md:py-0 py-8" style={cssBgSVGstyle}>
          {!cssBgSVGstyle ? <GatsbyImage
            image={image}
            className="rounded-lg"
            alt={altText}
          /> : ""
          }
        </div>
      </div>
    </section >
  );
}

const query = graphql`
query CorsoFPVHeroQuery {
    allFile(filter: {relativePath: {eq: "corso-fpv/corso-1.jpg"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(height: 650, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

const CorsoFPVHero = () => {
  const data = useStaticQuery(query);
  const img = data.allFile
    ? data.allFile.edges[0].node.childImageSharp.gatsbyImageData
    : "";
  return <Hero
    title="Diventa un pilota di droni FPV"
    subTitle="La seconda edizione dell'unico corso FPV in Italia."
    paragraphs={["Il corso FPVAcademy è organizzato in collaborazione tra NorthFPV (di cui sono co-fondatore) e Flyan, parte di ItalDrone.",]}
    cta_label="Iscriviti Ora"
    cta_link="#iscriviti"
    image={img}
    altText="Prima edizione del corso FPV" />
}

const RisoluzioneProblemiFPVHero = () => {

  return <Hero
    title="Torna a volare con il tuo drone FPV!"
    paragraphs={["La prima guida in Italiano per risolvere i problemi che puoi avere dopo aver costruito un drone FPV.",]}
    cta_label="Scarica gratuitamente"
    cta_link="#download"
    backgroundUrl="/assets/problemi-comuni/main-photo.svg" />
}

const OfferteHero = () => {
  return <Hero 
    title="Offerte e coupon per prodotti FPV ti aspettano!"
    paragraphs={["Entra nel canale telegram per non perdere nessuna delle offerte curamente selezionate per te!",]}
    cta_label="Unisciti subito"
    cta_link="#download"/>
}

export {
  CorsoFPVHero,
  RisoluzioneProblemiFPVHero,
  OfferteHero,
  Hero,
}