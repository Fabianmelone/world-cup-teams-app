import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.scss';
import Hero from './components/Hero/Hero';
import ScrollingFlags from './components/ScrollingFlags/ScrollingFlags';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const fetchItems = useCallback(async () => {
    const { data } = await axios.get('/api/items');
    setItems(data);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get('/api/items');
      setItems(data);
    };

    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/items', { name, description });
    setName('');
    setDescription('');
    await fetchItems();
  }

  const handleDelete = async (id) => {
    await axios.delete(`/api/items/${id}`);
    fetchItems();
  };

  return (
    <div className="app">
      <Hero />
      <ScrollingFlags />
      <form className="app__form" onSubmit={handleSubmit}>
        <input 
          className="app__input"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <input 
          className="app__input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="app__button" type="submit">
          Add Item
        </button>
      </form>

      <ul className="app__list">
        {items.map((item) => (
          <li className="app__list-item" key={item._id}>
            <span>
              <strong>{item.name}</strong> - {item.description}
            </span>
            <button
              className="app__delete-button"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
