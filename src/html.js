import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  const iframeStyle = {
    display:'none', 
    visibility:'hidden'
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        
        {props.headComponents}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', (event) => {
            algoliasearchNetlify({
              appId: 'G0M23X5AHA',
              apiKey: 'f64ebf0353bcad837657a655e4523786',
              siteId: 'c3f13e8c-97b2-4e0f-b137-9df20f9f0153',
              branch: 'master',
              selector: '#search',
              placeholder: 'Cerca...',
              theme: {
                mark: '#eda550',                                 // Color of the matching content
                background: '#fff',                        // Background Color of the input and the panel
                selected: '#f5f5fa',                          // Background Color of the selected item
                text: '#23263b',                              // Color of the title of the items
                colorSourceIcon: '#d6d6e7'                    // Color of the icon on the left of results
              }
          });
          })
          ` }} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
