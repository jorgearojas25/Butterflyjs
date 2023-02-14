import * as React from "react"
import styles from "./rangeSelector.module.css"

export interface IRatingSelectorProps {
  onClick: (index: number) => void
  rating: number
  size?: number
}

const RatingSelector = ({
  size = 10,
  rating,
  onClick,
}: IRatingSelectorProps) => {
  const [hover, setHover] = React.useState(0)
  return (
    <div className={styles.starRating}>
      {[...Array(size)].map((star, index) => {
        index += 1
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => onClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={styles.star}>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default RatingSelector
