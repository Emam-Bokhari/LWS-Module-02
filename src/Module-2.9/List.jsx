import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  console.log(artists)

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input 
      className="border-2 border-black"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button 
      className="bg-indigo-500 ml-2 px-2 rounded-sm text-white"
      onClick={() => {
        setArtists([
            ...artists,
            {id:nextId++,name:name}

        ])
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}