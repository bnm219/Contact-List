import { useState } from 'react'
import './App.css'
import ContactList from './components/contactlist'
import SelectedContact from "./components/SelectedContact";


function App() {
  const [count, setCount] = useState(0)
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
     {selectedContactId ? (
        <SelectedContact >Selected Contact View</SelectedContact>
      ) : (
        <ContactList />
      )}
    </>
  )
}

export default App
