
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"


const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
      }
    }
  }
`

const Footer = ({cssExtraClasses}) => {
    const { site } = useStaticQuery(query)
    const { siteTitle } = site.siteMetadata

    return (
        <footer className={`bg-white mt-16 ${cssExtraClasses}`}>
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to={`/`} className="flex items-center">
                        {/* {image && <GatsbyImage image={image} className="h-10" />} */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{siteTitle}</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6">
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Seguimi</h3>
                        <ul className="">
                                <li className="mb-4">
                                    <OutboundLink href="https://instagram.com/iamlucafpv" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400 flex">
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                        Instagram</OutboundLink>
                                </li>
                                <li className="mb-4">
                                    <OutboundLink href="https://www.youtube.com/channel/UC3Jw4XZ2h0cAh6jFL63e0uA" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                        </svg>
                                        YouTube</OutboundLink>
                                </li>
                                <li className="mb-4">
                                    <OutboundLink href="https://t.me/fpv_coupons" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                                        </svg>
                                        Telegram</OutboundLink>
                                </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Risorse</h3>
                        <ul className="">
                            {/* {footerLegal.edges.filter((el) => el.node.frontmatter.languageCode ===  context.language).map((el) => {
                                return (
                                <li className="mb-4">
                                    <a
                                        href={el.node.fields.slug}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:underline dark:text-gray-400">
                                        {el.node.frontmatter.title}
                                    </a>
                                </li>)
                            }
                            )} */}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} {" "}
                    <Link to={`/`} target="_blank" className="hover:underline">{siteTitle}</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}



export default Footer

