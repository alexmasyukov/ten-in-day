import { StyledWord } from 'components/Word'
import React, {
  ChangeEvent,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'
import styled from 'styled-components'
import { Word } from 'types'

// interface WordProps extends Word {
//   onClick: React.MouseEventHandler
// }

// const WordBlock: React.FC<WordProps> = (props) => {
//   return <div onClick={props.onClick}>{props.en}</div>
// }

interface PlayerProps {
  words: Array<Word>
  className?: string
}

// const actionTypes = {
//   SWITCH_REPEAT: 'SWITCH_REPEAT'
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case
//   }
// }

//onClick={handleClick(word.audio)}

// const useTimeInterval = (callback) => {
//   return []
// }

type Toogle = (status: boolean) => void
type UseAudio = [play: boolean, toggle: Toogle]

const useAudio = (url: string, playingInit: boolean): UseAudio => {
  const [audio] = useState<HTMLAudioElement>(new Audio(url))
  const [playing, setPlaying] = useState<boolean>(playingInit)
  const togglePlaying: Toogle = (status: boolean) => setPlaying(status)

  // const audio: HTMLAudioElement =
  // audio.muted = true
  // audio.autoplay = false
  // console.log('useAudio render')

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    console.log('useAudio run useEffect')

    audio.addEventListener('ended', () => {
      setPlaying(false)
    })

    return () => {
      audio.removeEventListener('ended', () => {
        setPlaying(false)
      })
    }
  })

  return [playing, togglePlaying]
}

interface WordBlockProps {
  audioUrl: string
  audioPlaying: boolean
  word: string
  translated: string
  visibleTranslated: boolean
}

const WordBlock: React.FC<WordBlockProps> = React.memo(
  ({ audioUrl, word, visibleTranslated, translated, audioPlaying }) => {
    const [playing, setPlaying] = useAudio(audioUrl, audioPlaying)

    useEffect(() => {
      setPlaying(audioPlaying)
    }, [audioPlaying])

    useEffect(() => {
      console.log('useEffect playing')
    }, [playing])

    return (
      <div>
        <StyledWord
          word={word}
          translated={translated}
          visibleTranslated={visibleTranslated}
        />
        <div>{playing && 'playing...'}</div>
        <br />
      </div>
    )
  }
)

const Player: React.FC<PlayerProps> = (props) => {
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)

  const handleWordPlayEnd = () => {
    console.log('handleWordPlayEnd')
  }

  return (
    <div className={props.className}>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Stop' : 'Play'}
      </button>

      {props.words.map(({ id, audio, en, ru }, index) => {
        const translated = ru[0][0]
        const isPlay = playing && current === index ? true : false
        console.log(isPlay, index)

        return (
          <WordBlock
            key={id}
            audioUrl={audio}
            audioPlaying={isPlay}
            word={en}
            translated={translated}
            visibleTranslated={true}
            // onPlayEnd={handleWordPlayEnd}
          />
        )
      })}
    </div>
  )
}

export const StyledPlayer = styled(Player)`
  /* color: red; */
`
