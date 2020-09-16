import React from 'react';
import Helmet from 'react-helmet';

import {
    Navigation,
    Footer
} from '../../../components';
const Default = props => {
    const { children, location } = props;
    const url = location.href ? location.href : '';

    return (
        
        <div>
            <Helmet>
                <script type="text/javascript">{`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KR695CJ'); 
                `}</script>
                <html lang="it" />
                <meta charset="UTF-8" />
                <meta property="og:title" content="Luca FPV"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="it_IT"/>
                <meta property="og:description" content="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."/>
                {/* <meta property="og:image" content="http://lucafpv.com/avatar.png"/> */}
                <meta property="og:url" content={url}/>
            </Helmet>

            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR695CJ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

            <Navigation/>
            <div>
            {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Default;
