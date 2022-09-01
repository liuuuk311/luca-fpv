
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { menuItems } from "./header/menu-items"
import { Instagram, Telegram, YouTube } from "./socials"

const footerResources = menuItems.slice(0, 3)
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
                                    <Instagram showText={true}/>
                                </li>
                                <li className="mb-4">
                                    <YouTube showText={true} />
                                </li>
                                <li className="mb-4">
                                    <Telegram showText={true} />
                                </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Risorse</h3>
                        <ul className="">
                            {footerResources.map(({link, label}) => {
                                return (<li className="mb-4">
                                    <Link
                                        to={link}
                                        className="text-gray-600 hover:underline dark:text-gray-400">
                                        {label}
                                    </Link>
                                </li>);
                            })}
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

