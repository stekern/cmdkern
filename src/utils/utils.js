import * as React from 'react'

const ALLOWED_TAGS = [
  'bold',
  'email',
  'green',
  'blue',
  'italic',
  'underscore',
  'url',
]

const hasTags = line => {
  for (let i = 0; i < ALLOWED_TAGS.length; i++) {
    const tag = ALLOWED_TAGS[i]
    const regex = new RegExp(`^(.*)(\\[${tag}\\])(.*)(\\[/${tag}\\])(.*)$`)
    const matches = line.match(regex)
    if (matches && matches.length === 6) {
      return true
    }
  }
  return false
}

const getFormattedLine = line => {
  let formattedLine = line
  for (let i = 0; i < ALLOWED_TAGS.length; i++) {
    const tag = ALLOWED_TAGS[i]
    const regex = new RegExp(`^(.*)(\\[${tag}\\])(.*)(\\[/${tag}\\])(.*)$`)
    const matches = line.match(regex)
    if (matches && matches.length === 6) {
      const start = getFormattedLine(matches[1])
      const mid = getFormattedLine(matches[3])
      const end = getFormattedLine(matches[5])

      if (tag === 'bold') {
        formattedLine = (
          <React.Fragment>
            {start}
            <strong>{mid}</strong>
            {end}
          </React.Fragment>
        )
      } else if (tag === 'url') {
        formattedLine = (
          <React.Fragment>
            {start}
            <a rel="noopener noreferrer" target="_blank" href={matches[3]}>
              {mid}
            </a>
            {end}
          </React.Fragment>
        )
      } else if (tag === 'email') {
        formattedLine = (
          <React.Fragment>
            {start}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`mailto:${matches[3]}`}
            >
              {mid}
            </a>
            {end}
          </React.Fragment>
        )
      } else if (tag === 'italic') {
        formattedLine = (
          <React.Fragment>
            {start}
            <i>{mid}</i>
            {end}
          </React.Fragment>
        )
      } else if (tag === 'underscore') {
        formattedLine = (
          <React.Fragment>
            {start}
            <u>{mid}</u>
            {end}
          </React.Fragment>
        )
      } else if (tag === 'green') {
        formattedLine = (
          <React.Fragment>
            {start}
            <font color="#20C20E">{mid}</font>
            {end}
          </React.Fragment>
        )
      } else if (tag === 'blue') {
        formattedLine = (
          <React.Fragment>
            {start}
            <font color="#3399ff">{mid}</font>
            {end}
          </React.Fragment>
        )
      }
    }
  }
  return formattedLine
}

const removeTags = line => {
  let formattedLine = line
  for (let i = 0; i < ALLOWED_TAGS.length; i++) {
    const tag = ALLOWED_TAGS[i]
    const regex = new RegExp(`\\[/?${tag}\\]`, 'gi')
    formattedLine = formattedLine.replace(regex, '')
  }
  return formattedLine
}

const getElementKey = prefix => `${prefix}_${new Date().getTime()}`

export { getElementKey, getFormattedLine, hasTags, removeTags }
