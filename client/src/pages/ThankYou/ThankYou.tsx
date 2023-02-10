import React from "react"
import styles from "./thankYou.module.css"
import check from "../../Assets/InfoIcon.svg"
import { useNavigate } from "react-router-dom"

const ThankYou: React.FC = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    const interval = setInterval(() => navigate("/"), 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.thankYou}>
        <img width={30} src={check} alt={"thank you"} />
        <p className={styles.thanksText}> Thank You!</p>
        <p> Your feedback has been sent</p>
        <p> Have a lovely day</p>
      </div>
    </div>
  )
}

export default ThankYou
