const React = require('react')

const HeadComponents = [
  <link rel="preconnect" href="https://adservice.google.com/"/>,
  <link rel="preconnect" href="https://googleads.g.doubleclick.net/"/>,
  <link rel="preconnect" href="https://www.googletagservices.com/"/>,
  <link rel="preconnect" href="https://tpc.googlesyndication.com/"/>,
  <link rel="preconnect" href="https://pagead2.googlesyndication.com/"/>,
  <link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script"/>,,
  <script async data-ad-client="ca-pub-4566556883137005" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>,
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}

