import sections from "./assets/json/sections.json"
import { getDisplayText, getFormattedText, hasTags } from "./util.js"

const PREVIOUS_RUN_DATE_KEY = "previousRunDate"

// Defaults
const CHAR_DELAY = 20
const START_DELAY = 0
const END_DELAY = 300
const SHOW_PROMPT = true
const SHOW_CURSOR = true
const MIN_SCREEN_WIDTH = Number.NEGATIVE_INFINITY
const PROMPT = "<font color='white'><strong>🚀 ~  </strong>"

// On load
document.addEventListener("DOMContentLoaded", (e) => {
  const previousRunDate = localStorage.getItem(PREVIOUS_RUN_DATE_KEY)
  let enableTypewriting = true
  if (previousRunDate) {
    if (new Date().getTime() - Date.parse(previousRunDate) < 15 * 60 * 1000) {
      enableTypewriting = false
    } else {
      localStorage.setItem(PREVIOUS_RUN_DATE_KEY, new Date().toISOString())
    }
  } else {
    localStorage.setItem(PREVIOUS_RUN_DATE_KEY, new Date().toISOString())
  }
  const terminal = document.getElementById("terminal")
  const screenWidth = window.innerWidth
  const formattedLines = sections
    .filter(
      (section) => screenWidth >= (section.minScreenWidth ?? MIN_SCREEN_WIDTH),
    )
    .flatMap((section) =>
      section.lines.map((line) => ({
        ...section,
        displayText: line,
        formattedText:
          line || (section.showPrompt ?? SHOW_PROMPT) ? line : "&nbsp",
        ...(hasTags(line)
          ? {
              displayText: getDisplayText(line),
              formattedText: getFormattedText(line),
            }
          : {}),
      })),
    )
  const writeLine = (i) => {
    if (formattedLines[i]) {
      const paragraph = document.createElement("p")
      paragraph.innerHTML =
        (formattedLines[i].showPrompt ?? SHOW_PROMPT)
          ? (formattedLines[i].prompt ?? PROMPT)
          : ""
      terminal.appendChild(paragraph)
      const writeChar = (j) => {
        if (formattedLines[i].displayText[j] || j === 0) {
          if (formattedLines[i].showCursor ?? SHOW_CURSOR) {
            paragraph.innerHTML = `${
              paragraph.innerHTML.replace('<span class="cursor"></span>', "") +
              (formattedLines[i].displayText[j] || "")
            }<span class="cursor"></span>`
          } else {
            paragraph.innerHTML += formattedLines[i].displayText[j] || ""
          }
          setTimeout(
            () => writeChar(j + 1),
            formattedLines[i].charDelay ?? CHAR_DELAY,
          )
        } else {
          setTimeout(
            () => {
              if (formattedLines[i].showCursor ?? SHOW_CURSOR) {
                paragraph.innerHTML = paragraph.innerHTML
                  .replace('<span class="cursor"></span>', "")
                  .replace(
                    formattedLines[i].displayText,
                    formattedLines[i].formattedText,
                  )
              } else {
                paragraph.innerHTML = paragraph.innerHTML.replace(
                  formattedLines[i].displayText,
                  formattedLines[i].formattedText,
                )
              }
              writeLine(i + 1)
            },
            (formattedLines[i].startDelay ?? START_DELAY) +
              (formattedLines[i].endDelay ?? END_DELAY),
          )
        }
      }
      if (
        !enableTypewriting ||
        (formattedLines[i].endDelay === 0 && formattedLines[i].charDelay === 0)
      ) {
        paragraph.innerHTML =
          paragraph.innerHTML + formattedLines[i].formattedText
        writeLine(i + 1)
      } else {
        writeChar(0)
      }
    }
  }
  writeLine(0)
})
