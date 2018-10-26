import * as React from 'react'

const getFormattedLine = line => {
  const allowedTags = [
    'bold',
    'blue',
    'email',
    'green',
    'italic',
    'underscore',
    'url',
  ]
  let formattedLine = line
  for (let i = 0; i < allowedTags.length; i++) {
    const tag = allowedTags[i]
    const regex = new RegExp(`^(.*)(\\[${tag}\\])(.*)(\\[/${tag}\\])(.*)$`)
    const matches = line.match(regex)
    if (matches && matches.length === 6) {
      if (tag === 'bold') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <strong>{matches[3]}</strong>
            {matches[5]}
          </React.Fragment>
        )
      } else if (tag === 'url') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <a rel="noopener noreferrer" target="_blank" href={matches[3]}>
              {matches[3]}
            </a>
            {matches[5]}
          </React.Fragment>
        )
      } else if (tag === 'email') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`mailto:${matches[3]}`}
            >
              {matches[3]}
            </a>
            {matches[5]}
          </React.Fragment>
        )
      } else if (tag === 'italic') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <i>{matches[3]}</i>
            {matches[5]}
          </React.Fragment>
        )
      } else if (tag === 'underscore') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <u>{matches[3]}</u>
            {matches[5]}
          </React.Fragment>
        )
      } else if (tag === 'green') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <font color="#20C20E">{matches[3]}</font>
            {matches[5]}
          </React.Fragment>
        )
      } else if (tag === 'blue') {
        formattedLine = (
          <React.Fragment>
            {matches[1]}
            <font color="#3399ff">{matches[3]}</font>
            {matches[5]}
          </React.Fragment>
        )
      }
    }
  }
  return formattedLine
}

const removeTags = line => {
  const allowedTags = [
    'bold',
    'blue',
    'email',
    'green',
    'italic',
    'underscore',
    'url',
  ]
  let formattedLine = line
  for (let i = 0; i < allowedTags.length; i++) {
    const tag = allowedTags[i]
    const regex = new RegExp(`\\[/?${tag}\\]`, 'gi')
    formattedLine = formattedLine.replace(regex, '')
  }
  return formattedLine
}

const getElementKey = prefix => `${prefix}_${new Date().getTime()}`

export { getElementKey, getFormattedLine, removeTags }
