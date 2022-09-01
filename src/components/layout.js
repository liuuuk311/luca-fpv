import React from "react"
import Header from "./header"
import Footer from "./footer"

import { isLayoutFullScreen } from "../utils/landing"

const Layout = ({ children }) => {
  return (
      <div className="max-w-7xl flex flex-col mx-auto p-4 sm:p-6">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
  )
}

const LandingLayout = ({children}) => {
  return (
    <div>
        <Header cssExtraClasses="max-w-7xl mx-auto p-4 sm:p-6"/>
        <main>{children}</main>
        <Footer cssExtraClasses="max-w-7xl mx-auto p-4 sm:p-6"/>
    </div>
  )
}

export {
  Layout,
  LandingLayout,
}