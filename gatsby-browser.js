import React from "react";
import {Helmet} from "react-helmet"

import "prismjs/themes/prism-solarizedlight.css"
import "./src/styles/global.css"

export const onClientEntry = () => <Helmet> <script async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  /></Helmet>;  