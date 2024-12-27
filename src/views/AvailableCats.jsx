import { useEffect, useState } from 'react';
import './AvailableCats.css';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'briman' },
  { name: 'Mittens', age: '2', breed: 'bengal' },
  { name: 'Shadow', age: '1', breed: 'persian' },
  { name: 'Pumpkin', age: '3', breed: 'sphynx' },
  { name: 'Luna', age: '4', breed: 'alsesian' },
  { name: 'Simba', age: '2', breed: 'romanian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const breeds = ['all', ...new Set(availableCats.map(cat => cat.breed))];

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };
    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(cat => {
    const matchesBreed = selectedBreed === 'all' || cat.breed === selectedBreed;
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBreed && matchesSearch;
  });

  return (
    <div className="container">
      <div className="section-header">
        <h2>Available cats</h2>
        <div className="search-controls">
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed.charAt(0).toUpperCase() + breed.slice(1)}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="divider"></div>

      <div className="cats-grid">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="cat-image"
            />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}