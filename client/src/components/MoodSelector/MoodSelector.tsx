import React from "react"
import { useSelector } from "react-redux"
import MoodButton from "../MoodButton/MoodButton"
import styles from "./moodSelector.module.css"

const MoodSelector: React.FC = () => {
  const moods = useSelector((state: any) => state.API.moodQuestions)
  return (
    <div className={styles.container}>
      {moods ? (
        [...moods].map((mood) => (
          <MoodButton
            key={mood.idQuestion}
            source={mood.resource}
            alt={mood.question}
            width={70}
            link={mood.idQuestion}
          />
        ))
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default MoodSelector
