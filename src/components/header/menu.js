import React from "react"
import { Link } from 'gatsby';
import { menuItems } from "./menu-items"


const Menu = ({isNavOpen, setIsNavOpen}) => {
    return (
        <div>
            <div className="hidden md:flex md:flex-row pt-2">
              {menuItems.map(({link, label}) => {
                return <Link 
                  to={link} 
                  className="py-3 w-full text-base font-semibold text-center px-2">
                    {label}
                  </Link>
            })}
            </div>
            <div className="md:hidden">
                <button aria-label="toggle-menu" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    )

}


export default Menu
