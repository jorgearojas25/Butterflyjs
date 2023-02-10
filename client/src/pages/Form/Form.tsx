import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import FormQuestion from "../../components/FormQuestion/FormQuestion"
import MoodSelector from "../../components/MoodSelector/MoodSelector"
import styles from "./form.module.css"

const Form: React.FC = () => {
  const { id } = useParams()
  const [mood, setMood] = React.useState<any>()
  const [showTracker, setShowTracker] = React.useState(false)
  const questions = useSelector((state: any) => state.API.questions)
  const moods = useSelector((state: any) => state.API.moodQuestions)
  const companyName = useSelector((state: any) => state.API.company.companyName)

  React.useEffect(() => {
    console.log(moods, id)
    const actualMood = [...moods].filter(
      (moo) => moo.idQuestion === Number(id)
    )[0]
    setMood(actualMood)
    setShowTracker(false)
  }, [id, moods])

  const handleShowTracker = React.useCallback(() => {
    setShowTracker(true)
  }, [])

  return mood ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.moodGroup}>
          {showTracker ? (
            <div className={styles.moodSelector}>
              <p className={styles.formTitle}>
                Did you make a mistake? Please select your correct mood:
              </p>
              <MoodSelector />
            </div>
          ) : (
            <>
              <button className={styles.changeMood} onClick={handleShowTracker}>
                <img alt={"change mood"} width={120} src={mood.resource} />
              </button>
              <div>
                <p className={styles.moodMessage}>{mood.message}</p>
                <p className={styles.reminder}>
                  Your answers will always remain anonymous
                </p>
              </div>
            </>
          )}
        </div>
        <span className={styles.producer}>{companyName}</span>
      </div>
      <div className={styles.formBody}>
        <p className={styles.formTitle}>
          Do you agree whith the following statements:
        </p>
        <div className={styles.questionsGroup}>
          {[...questions]?.map((q, i) => (
            <FormQuestion
              number={i + 1}
              type={q.questionType}
              total={questions?.length}
              title={q.question}
            />
          ))}
          <div className={styles.comments}>
            <p>Anything to add? (Optional)</p>
            <textarea placeholder='Express yourself freely and safely. This will always remain anonymous.' />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default Form
