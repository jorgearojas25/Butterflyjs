import React from "react"
import styles from "./home.module.css"
import butterflyLogo from "../../Assets/Butterfly.svg"
import MoodSelector from "../../components/MoodSelector/MoodSelector"
import { useSelector } from "react-redux"

const Home: React.FC = () => {
  React.useEffect(() => {
    const sayHello = async () => {
      //! The path should be in a configure file
      const response = await fetch("/api/company")
      const body = await response.json()
      console.log(body)
    }
    sayHello()
  }, [])

  const companyName = useSelector((state: any) => state.API.company.companyName)
  return (
    <div className={styles.container}>
      <section className={styles.moodTracker}>
        <div className={styles.header}>
          <div>
            <img width={60} src={butterflyLogo} alt='Butterfly Company Logo' />
            <span className={styles.companyName}>Butterfly</span>
          </div>
          <span className={styles.companyMessage}>
            Your Teams's Happiness Manager
          </span>
        </div>
        <div className={styles.tracker}>
          <span className={styles.producer}>
            {companyName}, would like to know:
          </span>
          <span className={styles.formTitle}> How is your week going?</span>
          <MoodSelector />
          <span> Your answoers will allways remain anonymous</span>
        </div>
      </section>
    </div>
  )
}

export default Home
