// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

// const query = graphql`
//   query AboutMeQuery {
//     allFile(
//       filter: {
//         relativePath: { eq: "wieger-stienstra-SDWbEi94QG0-unsplash.jpg" }
//       }
//     ) {
//       edges {
//         node {
//           childImageSharp {
//             gatsbyImageData(
//               height: 650
//               placeholder: BLURRED
//               formats: [AUTO, WEBP]
//             )
//           }
//         }
//       }
//     }
//   }
// `;

const AboutMe = () => {
  // const data = useStaticQuery(query);
  // const Image = data.allFile
  //   ? data.allFile.edges[0].node.childImageSharp.gatsbyImageData
  //   : "";

  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row">
        {/* <GatsbyImage
          image={Image}
          className="h-72 md:h-96 md:w-1/2 rounded-lg"
        /> */}
        <div className="md:w-1/2 md:py-4 md:px-8 flex flex-col text-left justify-start">
          <h2 className="text-3xl mb-8 font-bold dark:text-gray-200">
            Ciao!
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Mi chiamo Luca e sono un appassionato di droni FPV. Questa passione mi ha portato anche a creare la prima community italiana di FPV chiamata NorthFPV.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Lo scopo di questo blog è aiutare principalmente chi inizia ad usare droni FPV.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Nel corso degli anni ho potuto aiutare diverse migliaia di persone, facendole diventare piloti migliori. Se non trovi quello di cui hai bisogno, contattami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
