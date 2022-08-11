import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag"


const OutsideLink = ({href, label}) => {

    return (
        <OutboundLink href={href} target="_blank" rel="noopener nofollow noreferrer">
            {label}
        </OutboundLink>
    )
}

export default OutsideLink;