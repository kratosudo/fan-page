import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './HomePage.css';

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="homePage-container">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="characters-list">
        {filteredCharacters.map(character => (
          <div key={character.id} className="character-item">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} className="character-image" />
            <p>{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;