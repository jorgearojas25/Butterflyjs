import React from "react"
import RangeSelector from "../RangeSelector/RangeSelector"
import styles from "./formQuestion.module.css"

const FormQuestion: React.FC<any> = (props: any) => {
  const [showTextArea, setShowTextArea] = React.useState(false)
  const { number, total, title, type } = props
  const handleTextArea = () => {
    setShowTextArea(true)
  }

  return (
    <div className={styles.container}>
      <p className={styles.details}>
        {number} of {total}
      </p>
      <p className={styles.details}>{type}</p>
      <p className={styles.question}>{title}</p>
      <div className={styles.range}>
        <RangeSelector />
        <div className={styles.rangeNames}>
          <span>Disagree</span>
          <span>Agree</span>
        </div>
      </div>

      {showTextArea ? (
        <textarea
          className={styles.textArea}
          placeholder={`Anything to add for ${type}`}
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
