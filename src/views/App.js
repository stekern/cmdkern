import React from 'react'
import sections from '../assets/json/sections.json'
import Typewriter from '../components/Typewriter'

const App = () => (
  <div className="app">
    <div className="topbar">ekern.me</div>
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
