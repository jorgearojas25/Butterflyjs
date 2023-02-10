import React from "react"
import { Link } from "react-router-dom"

const MoodButton: React.FC<any> = (props: any) => {
  const { source, alt, link, width }: any = props

  return (
    <Link to={`/mood/${link}`}>
      <img src={source} width={width} alt={alt} />
    </Link>
  )
}

export default MoodButton
