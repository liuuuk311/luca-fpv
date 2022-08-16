import React from "react";

import "./src/styles/main.css";
import "./src/styles/blog-post.css";

import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}