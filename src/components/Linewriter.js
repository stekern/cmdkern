import * as React from 'react'
import { getFormattedLine, removeTags } from '../utils/utils'

class Linewriter extends React.Component {
  timeoutId = undefined

  state = {
    charIndex: 0,
  }

  componentDidMount() {
    const { speed } = this.props
    this.timeoutId = setInterval(() => this.nextLetter(), speed)
  }

  componentDidUpdate(prevProps) {
    const { handleFinish, line, speed } = this.props
    if (speed === 0) {
      handleFinish(getFormattedLine(line))
    } else if (speed !== prevProps.speed) {
      clearInterval(this.timeoutId)
      this.timeoutId = setInterval(() => this.nextLetter(), speed)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId)
  }

  nextLetter = () => {
    const { charIndex, formattedLine } = this.state
    const { line, handleFinish, prefix } = this.props
    const prefixedLine = `${prefix ? '> ' : ''}${line}`

    if (!line.length) {
      handleFinish(getFormattedLine(prefixedLine))
    } else if (charIndex < line.length - 1) {
      this.setState(prevState => ({
        charIndex: prevState.charIndex + 1,
        ...{
          ...(charIndex === 0 && {
            formattedLine: getFormattedLine(prefixedLine),
          }),
        },
      }))
    } else {
      this.setState({
        charIndex: 0,
        formattedLine: undefined,
      })
      handleFinish(formattedLine)
    }
  }

  render() {
    const { charIndex } = this.state
    const { line, prefix } = this.props
    // const outputLine = removeTags(line)
    const outputLine = line
    return (
      <div className="terminal__line">
        {`${prefix ? '> ' : ''}${outputLine.substr(0, charIndex)}`}
      </div>
    )
  }
}

export default Linewriter
