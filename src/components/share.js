
import React from "react"

const capitalizeWords = (arr) => arr.map(el => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase());


const hashtagify = (s) => {
    s = capitalizeWords(s.split(" "))
    return s.replace(/\s+/g, '')
}


const FacebookShare = () => {

    const share = () => {
        window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`, 'Share on Facebook', 'width=550,height=450')
    }

    return (
        <button
            type="button"
            data-event="social share" data-info="Facebook" aria-label="Share on Facebook"
            onClick={() => share()}
            class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm py-3 text-center inline-flex items-center justify-center dark:focus:ring-[#3b5998]/55 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z" />
            </svg>
        </button>)
}

const TwitterShare = ({ text, hashtags }) => {

    const shareUrl = new URL("https://twitter.com/share")

    const share = () => {
        if (text) shareUrl.searchParams.append('text', text)
        if (hashtags) shareUrl.searchParams.append('hashtags', hashtags.map(h => hashtagify(h)).join(","))

        shareUrl.searchParams.append("url", window.location.href)
        window.open(
            shareUrl.toString(),
            'Share on Twitter',
            'width=550,height=450'
        )
    }

    return (
        <button
            type="button"
            data-event="social share" data-info="Twitter" aria-label="Share on Twitter"
            onClick={() => share()}
            class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm py-3 text-center inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z" />
            </svg>
        </button>
    )
}

const PinterestShare = ({image}) => {
    const share = () => {
        window.open(`https://pinterest.com/pin/create/button/?url=${window.location.origin}${image}`, 'Share on Pinterest', 'width=550,height=450')
    }

    return (
        <button
            type="button"
            data-event="social share" data-info="Pinterest" aria-label="Share on Pinterest"
            onClick={() => share()}
            class="text-white bg-pink-600 hover:bg-pink-600/90 focus:ring-4 focus:outline-none focus:ring-pink/50 font-medium rounded-lg text-sm py-3 text-center inline-flex items-center justify-center dark:focus:ring-pink/55 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
        </button>
    )
}

const WhastappShare = () => {
    const share = () => {
        window.open(`whatsapp://send?text=${window.location.href}`, 'Share on WhastApp')
    }

    return (
        <button
            type="button"
            data-event="social share" data-info="WhastApp" aria-label="Share on WhastApp"
            onClick={() => share()}
            class="text-white bg-green-400 hover:bg-green-400/90 focus:ring-4 focus:outline-none focus:ring-green/50 font-medium rounded-lg text-sm py-3 text-center inline-flex items-center justify-center dark:focus:ring-green/55 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
            </svg>
        </button>
    )
}

const ShareSideBar = ({image}) => {
    return (
        <div className="sticky top-8 mx-auto">
            <div className="hidden md:flex md:flex-col">
                <span className="uppercase w-full text-center font-semibold dark:text-gray-300 mb-2">Condividi</span>
                <FacebookShare />
                <TwitterShare />
                {image && <PinterestShare image={image}/>}
                <WhastappShare />
            </div>
        </div>)
}

export default ShareSideBar
