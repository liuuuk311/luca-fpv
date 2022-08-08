import React from "react"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <div className=" dark:bg-gray-800">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout