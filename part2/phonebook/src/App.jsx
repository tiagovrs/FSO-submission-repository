import { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ( { nameSearch, handleSearchChange }) => {
  return (
    <div>
      filter shown with: <input 
        value={nameSearch}
        onChange={handleSearchChange}
        />
    </div>
  )
}

const FormSection = ({type, value, handler}) => {
  return (
    <div>
      {type} : <input 
      value = { value }
      onChange={ handler }
      />
    </div>
  )
}

const PersonForm = ( {newName, handleNameChange, newNumber, handleNumberChange, addPerson} ) => {

  return (
      <form>
        <FormSection type={"name"} value={ newName } handler={handleNameChange}/>
        <FormSection type={"number"} value={ newNumber } handler={handleNumberChange} />
        <div>
          <button 
            type="submit" 
            onClick={addPerson}>add</button>
        </div>
      </form>
  )
}

const FilteredNumbers = ( { nameSearch, persons }) => {


  // Will show all the names if the search bar is empty
  if (nameSearch === "") {
    
    // Calls the component 
    return (
      <>
      <Numbers persons={persons} />
      </>
    )

  } else {

    // Defines the people to show according to the value of nameSearch

    // Filter iterates thorugh the array and for each name it will
    // Lower case and seek if the search value is in any of the names (like la is in Hellas and Lovelace)
    const personsToShow = persons.filter( person => 
      person.name
      .toLowerCase()
      .includes(nameSearch.toLowerCase()) 
    )

    // Returns the component with the new array of people to show
    return (
      <Numbers persons = { personsToShow } /> 
    )
  }

}

const Numbers = ( {persons} ) => {

  return (

    // Higher order function map iterates through the array creating paragraphs with name
    // In this case, key can be the name of the persons, as people should not appear twice
    persons.map( person => <p key={person.name}> { person.name } {person.number}</p>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('new number')
  const [nameSearch, setNameSearch] = useState("")

  //Use axios to get the Persons data

  const hook = () => {

    axios
    .get('http://localhost:3001/persons') // Access the database
    .then(response => {
      setPersons(response.data) // Update the persons array to the get results "response"
    })
  }

  useEffect(hook, []) // Call the hook with useEffect

  const addPerson = (event) => {

    // Checks if the Name is already in the phone book
    if (persons.some(person => person.name === newName)) {
      event.preventDefault()
      return (alert(`${newName} is already added to phonebook`))
    }

    // Prevents the page from updating when adding a new name
    event.preventDefault()

    // Template to create a new object in the array persons
    const nameObject = {
      name: newName,
      number: newNumber
    }

    // React method to add a new person in the persons array
    setPersons(persons.concat(nameObject))

    //Update the placeholder to appear as empty after adding a person
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {

    // Changes the name value according to the value in the input area
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => { setNewNumber(event.target.value)}

  const handleSearchChange = (event) => { setNameSearch(event.target.value) }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} handleSearchChange={handleSearchChange}/>

      <h3>Add a new</h3>
      <PersonForm newName ={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addPerson ={addPerson}/>

      <h3>Numbers</h3>
      
      <FilteredNumbers nameSearch={nameSearch} persons={ persons }/>
    </div>
  )
}

export default App