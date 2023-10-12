import { useState } from "react";
import { useEffect } from "react"

export default function SelectedContact({ selectedContact } ){
    const [contact, setContacts] = useState([]);
    useEffect(() => {
      async function fetchContacts() {
        try {
          const dataAPI = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const json = await dataAPI.json();
          setContacts(() => json);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts();
    }, []);
  
    return (
      <>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      </>
    );

}