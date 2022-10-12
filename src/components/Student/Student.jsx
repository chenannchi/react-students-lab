import Score from "../Score/Score"

const Student = (props) => {
  return ( 
    <>
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      <ul>
        {props.student.scores.map(score =>
          <Score score={score} />
        )}
      </ul>
    </> 
  )
}

export default Student