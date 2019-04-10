import * as React from 'react'
import Logo from './Logo'

const Topbar = ({ title = 'ekern.me', showLogo, logoUrl }) => (
  <div className="topbar">
    <div className="topbar__title">{title}</div>
    {showLogo &&
      logoUrl && (
        <div className="topbar__logo">
          <Logo url={logoUrl} />
        </div>
      )}
  </div>
)

export default Topbar
