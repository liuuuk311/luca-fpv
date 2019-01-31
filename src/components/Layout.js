import React from 'react'
import { Link } from 'gatsby'
import { navy, black } from '../utils/colors'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return(
      <div style={{
              backgroundColor: black,
            }}>
        {children}
      </div>
    )
  }
}

export default Layout
