import React from "react";
import { Helmet } from "react-helmet"

import "./src/styles/main.css";
import "./src/styles/blog-post.css";

import Layout from "./src/components/layout";

export const onClientEntry = () => <Helmet> <script async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/></Helmet>;

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}