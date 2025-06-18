const Header = (props) => {
  return (
  <div>
    <h1>{ props.course }</h1>
  </div> 
  )
}

// Go Horse Approach 
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} - {props.exercise}
    </p>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={ course } />
      <Content part1 = {part1.name} part2={part2.name} part3={part3.name} exercise1 = {part1.exercises} exercise2 = {part2.exercises} exercise3 = {part3.exercises} />
      <Total exercises = { part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App