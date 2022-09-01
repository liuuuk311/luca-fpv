import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag"


const OutsideLink = ({href, label, extraCssClasses, extraStyle}) => {

    return (
        <OutboundLink href={href} target="_blank" rel="noopener nofollow noreferrer" style={extraStyle} className={`${extraCssClasses ? extraCssClasses : ""}`}>
            {label}
        </OutboundLink>
    )
}

export default OutsideLink;