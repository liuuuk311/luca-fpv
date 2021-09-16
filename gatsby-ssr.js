const React = require('react')

const HeadComponents = [
  <script async data-ad-client="ca-pub-4566556883137005" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>,
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}