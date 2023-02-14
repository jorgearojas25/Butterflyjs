import React from "react"
import RatingSelector from "../RatingSelector/RangeSelector"
import styles from "./formQuestion.module.css"
import { useDispatch } from "react-redux"
import { manageAnswer } from "../../store/reducers/APIReducer"

export interface Iquestion {
  idQuestion: number
  question: string
  message: string
  number: number
  resource: string
  total: number
  idForm: number
  idQuestionType: number
  questionType: string
  userId: string
}

export interface IAnswer {
  idAnswer?: number
  score: number
  comment?: string
  date: string
  userId: string

  idQuestion: number
}

const FormQuestion: React.FC<Iquestion> = (props: Iquestion) => {
  const dispatch = useDispatch()
  const { number, total, question, questionType, userId } = props

  const [showTextArea, setShowTextArea] = React.useState(false)
  const [comments, setComments] = React.useState("")
  const [rating, setRating] = React.useState(0)
  const handleTextArea = () => {
    setShowTextArea(true)
  }
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.currentTarget.value)
  }

  React.useEffect(() => {
    const date = new Date().toISOString().split("T")[0]
    const answer: IAnswer = {
      date: date,
      idQuestion: props.idQuestion,
      score: rating,
      userId: userId,
      comment: comments,
    }
    dispatch(manageAnswer(answer))
  }, [dispatch, rating, comments])

  const onClickRating = (index: number) => {
    setRating(index)
    setShowTextArea(true)
  }

  return (
    <div className={styles.container}>
      <p className={styles.details}>
        {number} of {total}
      </p>
      <p className={styles.details}>{questionType}</p>
      <p className={styles.question}>{question}</p>
      <div className={styles.range}>
        <RatingSelector rating={rating} onClick={onClickRating} />
        <div className={styles.rangeNames}>
          <span>Disagree</span>
          <span>Agree</span>
        </div>
      </div>

      {showTextArea ? (
        <textarea
          className={styles.textArea}
          onChange={onChangeTextArea}
          placeholder={`Anything to add for ${questionType}`}
        />
      ) : (
        <button onClick={handleTextArea} className={styles.showText}>
          Add comment
        </button>
      )}
    </div>
  )
}

export default FormQuestion
