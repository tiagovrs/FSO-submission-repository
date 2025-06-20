import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({ total, good, neutral, bad}) => {

  const percentage = total === 0 ? 0 : ( 100 * good )/ total
  const average = total === 0 ? 0 : (good - bad) / total


  if (total === 0) {
    return (
      <p> No feedback given </p>
    )
  }
  else{
    return (
      // <>
      // <h1>statistics</h1>
      // <p>good {good}</p>
      // <p>neutral {neutral}</p>
      // <p>bad {bad}</p>
      // <p> all {total} </p>
      
      // <p>percentage {percentage} % </p>
      // <p>average  { average }</p> 
      // </>
      <>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total} />
      <StatisticLine text="Percentage" value={percentage} />
      <StatisticLine text="Average" value={average}/>
      </>

    )
  }

}

const StatisticLine =  ({text, value}) => {
  return (

  <p> {text}: {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad 

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='positive'/> 
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <Statistics total = {total} good = { good } neutral = {neutral} bad ={bad} />


    </div>
  )
}

export default App