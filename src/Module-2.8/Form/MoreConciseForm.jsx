import { useState } from 'react';

export default function MoreConciseForm() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      [e.target.name]:[e.target.value]
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          className="border-2 border-black"
          value={person.firstName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          className="border-2 border-black"
          value={person.lastName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          className="border-2 border-black"
          value={person.email}
          onChange={handleNameChange}
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