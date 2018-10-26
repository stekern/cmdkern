import * as React from 'react'
import { getElementKey } from '../utils/utils'
import Linewriter from './Linewriter'

class Typewriter extends React.Component {
  timeoutId = undefined

  prefix = '> '

  speedDivider = 1

  state = {
    finished: false,
    sectionIndex: 0,
    lineIndex: 0,
    writtenLines: [],
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false)
    document.addEventListener('touchend', this.handleTouchEnd, false)
  }

  handleFinish = line => {
    const { lineIndex, sectionIndex } = this.state
    const { sections } = this.props
    const { lines } = sections[sectionIndex]
    if (lineIndex < lines.length - 1) {
      this.setState(prevState => ({
        writtenLines: [...prevState.writtenLines, line],
        lineIndex: prevState.lineIndex + 1,
      }))
    } else if (sectionIndex < sections.length - 1) {
      this.setState(prevState => ({
        writtenLines: [...prevState.writtenLines, line],
        lineIndex: 0,
        sectionIndex: prevState.sectionIndex + 1,
      }))
    } else if (
      sectionIndex === sections.length - 1 &&
      lineIndex === lines.length - 1
    ) {
      this.setState(prevState => ({
        finished: true,
        writtenLines: [...prevState.writtenLines, line],
      }))
    }
  }

  handleTouchEnd = e => {
    if (this.speedDivider > 0.0625) {
      this.speedDivider = this.speedDivider * 0.5
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (this.speedDivider > 0.0625) {
        this.speedDivider = this.speedDivider * 0.5
      }
    }
  }

  render() {
    const { sections } = this.props
    const { finished, lineIndex, sectionIndex, writtenLines } = this.state
    const section = sections[sectionIndex]
    const { lines, speed } = section
    const line = lines[lineIndex]
    const prefix = 'prefix' in section && section.prefix

    return (
      <div className="terminal">
        {writtenLines.map((writtenLine, i) => (
          <div
            key={getElementKey(`${writtenLine}_${i}`)}
            className="terminal__line"
          >
            {writtenLine}
          </div>
        ))}
        {!finished && (
          <Linewriter
            handleFinish={this.handleFinish}
            line={line}
            speed={speed > 0 ? Math.floor(this.speedDivider * speed) : speed}
            prefix={prefix}
          />
        )}
      </div>
    )
  }
}

export default Typewriter
