export type Translated = [
  word: string,
  frequency?: number,
  audioFile?: string,
  custom?: boolean
]

export interface Word {
  id: string
  en: string
  ru: Array<Translated>
  audio: string
}