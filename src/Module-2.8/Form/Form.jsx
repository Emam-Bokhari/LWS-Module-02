import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      firstName: e.target.value,
      lastName: 'Hepworth',
      email: 'bhepworth@sculpture.com'
    })
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    })
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          className="border-2 border-black"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          className="border-2 border-black"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          className="border-2 border-black"
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}