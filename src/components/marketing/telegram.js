import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

    
const TelegramBlock = () => {
    return (
        <div>
            <h4 className="text-2xl font-semibold dark:text-gray-200">Telegram</h4>
            <p className="dark:text-gray-300" style={{fontSize: "1rem", lineHeight: "1.5rem"}} >Lorem ipsum</p>
            <OutboundLink href={"t.me/fpv_coupons"} target="_blank" rel="nofollow" style={{color: "white"}}
                class="my-4 w-36 block hover:bg-sky-600 my-auto bg-sky-700 rounded-lg text-base font-semibold text-center text-white p-3 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700">
            Unisciti al canale
            </OutboundLink>
        </div>
    )
}


export default TelegramBlock;