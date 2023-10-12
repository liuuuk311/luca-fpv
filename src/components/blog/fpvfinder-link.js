import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag"

const BASE_URL = `http://fpvfinder.lucafpv.com/search?only_verified=true&utm_source=lucafpv&q=`


const FPVfinderLink = ({name, label}) => {
    label = label ? label : "FPVfinder"
    return (
        <OutboundLink href={BASE_URL + name} target="_blank">
            {label}
        </OutboundLink>
    )
}

export default FPVfinderLink;