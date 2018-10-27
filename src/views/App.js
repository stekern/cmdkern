import React from 'react'
import sections from '../assets/json/sections.json'
import Typewriter from '../components/Typewriter'
import Topbar from '../components/Topbar'

const App = () => (
  <div className="app">
    <Topbar
      title="ekern.me"
      showLogo
      logoUrl="https://github.com/stekern/cmdkern"
    />
    <Typewriter
      sections={sections.filter(
        section =>
          (!('minScreenWidth' in section) ||
            section.minScreenWidth <= window.innerWidth) &&
          (!('maxScreenWidth' in section) ||
            section.maxScreenWidth >= window.innerWidth)
      )}
    />
  </div>
)

export default App
