const Score = (props) => {
  return ( 
    <>
      <li>
        <div>Date:  {props.score.date}</div>
        <div>Score:  {props.score.score}</div>
      </li>
    </>
  )
}

export default Score;