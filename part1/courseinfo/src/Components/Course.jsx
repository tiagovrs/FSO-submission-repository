const Header = ( { course }) => <h1>{course.name}</h1>

const Content = ( { parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part
        key = {part.id}
        part = {part}
        />
      )}
    </div> 
)}

const Part = ( { part } ) =>  <p> {part.name} {part.exercises} </p> 

const Total = ( { parts } ) => <p><b>Total of {parts.reduce( (sum, part) => sum + part.exercises, 0)} exercises</b></p>


const Course = ( {course} ) => {
  return (
    <div>
      <Header course={ course } />
      <Content parts = {course.parts } />
      <Total parts = {course.parts } />
    </div>
  )
}

export default Course