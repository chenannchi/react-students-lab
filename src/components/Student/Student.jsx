import Score from "../Score/Score"

const Student = (props) => {
  return ( 
    <div className="card">
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      <ul>
        {props.student.scores.map(score =>
          <Score score={score} />
        )}
      </ul>
    </div> 
  )
}

export default Student