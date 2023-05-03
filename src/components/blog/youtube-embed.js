import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import React from "react";

const YouTubeEmbed = ({link, caption}) => {
    if (!link) return ""
    
    const url = new URL(link);

    return (
        <div className="my-6 rounded-lg">
            <LiteYouTubeEmbed
                id={url.pathname.replace("/", "")} 
                params={url.search.replace("?", "").replace("t", "start")}
                playlist={false}
                poster="maxresdefault"
                title="YouTube Embed"
                activeClass="lyt-activated"
                iframeClass=""
                playerClass="lty-playbtn"
                wrapperClass="yt-lite h-fit"
                />
            {caption && <p className="text-center">{ caption }</p>}
        </div>
    )
}

export default YouTubeEmbed;