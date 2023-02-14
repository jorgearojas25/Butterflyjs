import React from "react"
import { Link, useNavigate } from "react-router-dom"

const MoodButton: React.FC<any> = (props: any) => {
  const { source, alt, link, width }: any = props
  const navigate = useNavigate()

  const onSelectMood = React.useCallback(
    (e: any) => {
      e.preventDefault()
      navigate(`/mood/${link}`, { replace: true })
    },
    [link, navigate]
  )
  return (
    <Link to={`/mood/${link}`} onClick={onSelectMood}>
      <img src={source} width={width} alt={alt} />
    </Link>
  )
}

export default MoodButton
