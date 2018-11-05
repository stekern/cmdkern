import * as React from 'react'
import { getFormattedLine, removeTags } from '../utils/utils'

class Linewriter extends React.Component {
  timeoutId = undefined

  linePrefix = getFormattedLine(
    '[green][bold]➜[/bold][/green] [blue][bold]~[/bold][/blue] '
  )

  state = {
    charIndex: 0,
  }

  componentDidMount() {
    const { speed } = this.props
    this.timeoutId = setInterval(() => this.nextLetter(), speed)
  }

  componentDidUpdate(prevProps, prevState) {
    const { handleFinish, line, speed } = this.props
    const { charIndex } = this.state
    if (speed === 0) {
      handleFinish(getFormattedLine(line))
    } else if (!line.length) {
      clearInterval(this.timeoutId)
      this.timeoutId = setInterval(() => this.nextLetter(), 200)
    } else if (!prevProps.line.length && charIndex === 0) {
      clearInterval(this.timeoutId)
      this.timeoutId = setInterval(() => this.nextLetter(), speed)
    } else if (
      speed !== prevProps.speed ||
      prevState.charIndex === prevProps.line.length - 1
    ) {
      clearInterval(this.timeoutId)
      this.timeoutId = setInterval(() => this.nextLetter(), speed)
    } else if (charIndex === line.length - 1) {
      clearInterval(this.timeoutId)
      this.timeoutId = setInterval(() => this.nextLetter(), 0)
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
      handleFinish(
        <React.Fragment>
          {prefix && this.linePrefix}
          {line.split(/^(\s*)/).length === 3 &&
            line
              .split(/^(\s*)/)[1]
              .split('')
              .map(_ => <span>&nbsp;</span>)}
          {getFormattedLine(line)}
        </React.Fragment>
      )
    } else if (charIndex < line.length - 1) {
      this.setState(prevState => ({
        charIndex: prevState.charIndex + 1,
        ...{
          ...(charIndex === 0 && {
            formattedLine: prefix ? (
              <React.Fragment>
                {this.linePrefix}
                {line.split(/^(\s*)/).length === 3 &&
                  line
                    .split(/^(\s*)/)[1]
                    .split('')
                    .map(_ => <span>&nbsp;</span>)}
                {getFormattedLine(line)}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {line.split(/^(\s*)/).length === 3 &&
                  line
                    .split(/^(\s*)/)[1]
                    .split('')
                    .map(_ => <span>&nbsp;</span>)}
                {getFormattedLine(line)}
              </React.Fragment>
            ),
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
    const { cursor, line, prefix } = this.props
    const outputLine = removeTags(line)
    const leadingSpaces = outputLine.split(/^(\s*)/).length === 3
    // const outputLine = line
    return (
      <div className="terminal__line">
        {prefix && this.linePrefix}
        {leadingSpaces &&
          outputLine
            .split(/^(\s*)/)[1]
            .split('')
            .map(_ => <span>&nbsp;</span>)}
        {`${outputLine.substr(0, charIndex)}`}
        {cursor && <span className="cursor">&nbsp;</span>}
      </div>
    )
  }
}

export default Linewriter
