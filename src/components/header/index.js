import React, {useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { menuItems } from "./menu-items"
import Menu from "./menu"
import OutsideLink from "../../components/blog/outside-link"


const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`


const Header = ({cssExtraClasses}) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <nav className={`flex flex-col ${cssExtraClasses}`}>
      <div className="mb-8 flex flex-row justify-between md:h-24 items-center">
        <Link to={`/`} className="hidden md:inline-block">
          <span className="text-3xl font-bold">{siteTitle}</span>
        </Link>
        <div className="flex flex-row flex-grow md:justify-end items-end">
          <Menu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
          <OutsideLink 
                href="https://buymeacoffee.com/iamlucafpv"             
                extraCssClasses="hidden md:inline flex items-center justify-center rounded-md border bg-[#eda550] px-4 py-3 text-sm font-bold shadow-sm uppercase"
                extraStyle={{color: "white"}} 
                label="Supporta ora!"
            />
          <Link to={`/`} className="md:hidden mx-auto">
            <span className="text-2xl font-bold">{siteTitle}</span>
          </Link>
        </div>
      </div>
      {isNavOpen && 
          <div className="flex flex-col divide-y pt-2">
          {menuItems.map(({link, label}) => {
            return <Link 
              to={link} 
              className="py-3 w-full text-base font-semibold text-center" 
             >
                {label}
              </Link>
        })}
        </div>
      }
    </nav>
  )
}


export default Header
