const ALLOWED_TAGS = [
  'bold',
  'email',
  'green',
  'red',
  'blue',
  'italic',
  'underscore',
  'url',
]

export const hasTags = (line) => {
  // Check if a given line contains any valid tags
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

export const getDisplayText = (line) => {
  // Return the text (without tags) to display when typewriting
  let formattedLine = line
  for (let i = 0; i < ALLOWED_TAGS.length; i++) {
    const tag = ALLOWED_TAGS[i]
    const regex = new RegExp(`\\[/?${tag}\\]`, 'gi')
    formattedLine = formattedLine.replace(regex, '')
  }
  return formattedLine
}
export const getFormattedText = (line) => {
  // Return the final innerHTML that will be used to represent a line after typewriting
  let formattedLine = line
  for (let i = 0; i < ALLOWED_TAGS.length; i++) {
    const tag = ALLOWED_TAGS[i]
    const regex = new RegExp(`^(.*)(\\[${tag}\\])(.*)(\\[/${tag}\\])(.*)$`)
    const matches = line.match(regex)
    if (matches && matches.length === 6) {
      const start = getFormattedText(matches[1])
      const mid = getFormattedText(matches[3])
      const end = getFormattedText(matches[5])
      if (tag === 'bold') {
        formattedLine = `${start}<strong>${mid}</strong>${end}`
      } else if (tag === 'url') {
        formattedLine = `${start}<a rel="noopener noreferrer" target="_blank" href="${mid}">${mid}</a>${end}`
      } else if (tag === 'email') {
        formattedLine = `${start}<a rel="noopener noreferrer" target="_blank" href="mailto:${mid}">${mid}</a>${end}`
      } else if (tag === 'green') {
        formattedLine = `${start}<font color='lightgreen'>${mid}</font>${end}`
      } else if (tag === 'blue') {
        formattedLine = `${start}<font color='lightblue'>${mid}</font>${end}`
      } else if (tag === 'red') {
        formattedLine = `${start}<font color='lightpink'>${mid}</font>${end}`
      } else if (tag === 'underscore') {
        formattedLine = `${start}<u>${mid}</u>${end}`
      }
    }
  }
  return formattedLine
}
