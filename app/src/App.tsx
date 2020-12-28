import { StyledPlayer } from 'components/Player'
import React from 'react'
import { Word } from 'types'

const words: Word[] = [
  {
    id: '1',
    en: 'advantage',
    ru: [['достоинство']],
    audio: 'http://localhost:3000/media/ru/advantage_1.ogg'
  },
  {
    id: '2',
    en: 'prevents',
    ru: [['избежать']],
    audio: 'http://localhost:3000/media/ru/prevents_1.ogg'
  },
  {
    id: '3',
    en: 'thus',
    ru: [['таким образом']],
    audio: 'http://localhost:3000/media/ru/thus_1.ogg'
  },
  {
    id: '4',
    en: 'underlying',
    ru: [['лежащий в основе']],
    audio: 'http://localhost:3000/media/ru/underlying_1.ogg'
  }
]

function App() {
  return (
    <div className="App">
      <StyledPlayer words={words} />
    </div>
  )
}

export default App

//https://cloud.yandex.ru/services/speechkit#demo
