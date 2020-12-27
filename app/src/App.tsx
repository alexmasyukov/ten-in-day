import React from 'react'

type Translated = [
  translate: string,
  frequency?: number,
  audioFile?: string,
  custom?: boolean
]

interface Word {
  en: string
  ru: Array<Translated>
  audio: string
}

const words: Array<Word> = [
  {
    en: 'advantage',
    ru: [['достоинство']],
    audio: 'http://localhost:3000/media/ru/advantage_1.ogg'
  },
  {
    en: 'prevents',
    ru: [['избежать']],
    audio: 'http://localhost:3000/media/ru/prevents_1.ogg'
  },
  {
    en: 'thus',
    ru: [['таким образом']],
    audio: 'http://localhost:3000/media/ru/thus_1.ogg'
  },
  {
    en: 'underlying',
    ru: [['лежащий в основе']],
    audio: 'http://localhost:3000/media/ru/underlying_1.ogg'
  }
]

interface WordProps extends Word {
  onClick: React.MouseEventHandler
}

// const player = (url: string) => {
//   let audioElement: null | HTMLAudioElement = new Audio(url)
//   audioElement.play()
//   audioElement = null
// }

const WordBlock: React.FC<WordProps> = (props) => {
  return <div onClick={props.onClick}>{props.en}</div>
}

function App() {
  const audioElement = new Audio()

  const handleClick = (url: string) => () => {
    audioElement.src = url
    audioElement.play()
  }

  return (
    <div className="App">
      {words.map((word) => (
        <WordBlock {...word} onClick={handleClick(word.audio)} />
      ))}
    </div>
  )
}

export default App

//https://cloud.yandex.ru/services/speechkit#demo
