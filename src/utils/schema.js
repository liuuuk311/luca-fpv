import React from 'react';
import { WebSite } from "schema-dts";
import { JsonLd } from "react-schemaorg";

export function SchemaWebSite() {
  return <JsonLd>
            <WebSite
            item={{
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Luca FPV",
                url: "lucafpv.com",
                sameAs: [
                    "https://www.instagram.com/luca.fpv/"
                ]
            }}>
            </WebSite>
      </JsonLd>;
}