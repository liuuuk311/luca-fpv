import React from 'react';
import Helmet from 'react-helmet';

export const onClientEntry = () => <Helmet> 
  <link rel="preconnect" href="https://adservice.google.com/"/>
<link rel="preconnect" href="https://googleads.g.doubleclick.net/"/>
<link rel="preconnect" href="https://www.googletagservices.com/"/>
<link rel="preconnect" href="https://tpc.googlesyndication.com/"/>
<link rel="preload" href="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script"/>
  <script async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" data-ad-client="ca-pub-4566556883137005"
  /></Helmet>;
