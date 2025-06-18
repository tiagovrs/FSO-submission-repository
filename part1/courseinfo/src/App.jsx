const Header = ({course}) => {
  return (
  <div>
    <h1>{ course.name }</h1>
  </div> 
  )
}

const Content = ({parts}) => {
  console.log(parts) // Checks if the array exists
  return (
    <div>
      {parts.map((part) => (
        <Part name = {part.name} exercise = {part.exercises}/> ))  }
    </div>
  )
}

const Part = ({name, exercise}) => {

  return (
    <p>
      {name} {exercise}
    </p>
  )
}

const Total = ({parts}) => {

  let total = 0

  parts.forEach(part => {
    total += part.exercises
  })

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={ course } />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App