import React from 'react'
import styled from 'styled-components'

interface WordProps {
  word: string
  translated: string
  visibleTranslated?: boolean
  className?: string
}

const Word: React.FC<WordProps> = ({
  word = '',
  translated = '',
  visibleTranslated = true,
  className
}: WordProps) => {
  return (
    <div className={className}>
      <p>{word}</p>
      {visibleTranslated && <span>{translated}</span>}
    </div>
  )
}

export const StyledWord = styled(Word)`
  span {
    display: block;
  }
`
