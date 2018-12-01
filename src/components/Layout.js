import React from 'react'
import { Link } from 'gatsby'
import { gray } from '../utils/colors'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return(
      <div style={{
              backgroundColor: gray,
            }}>
        {children}
      </div>
    )
  }
}

export default Layout
