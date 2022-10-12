const Score = (props) => {
  return ( 
    <>
      <li>
        <h3>Date:{props.score.date}. Score:{props.score.score}</h3>
      </li>
    </>
  )
}

export default Score;