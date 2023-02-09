export default interface Answer {
  idAnswer?: number
  score: number
  comment?: string
  date: Date
  userId: string

  idQuestion: number
}
