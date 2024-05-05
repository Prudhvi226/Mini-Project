// VIT.js

import React, { useState } from 'react';
import './VIT.css';
const VIT = ({ foodItems }) => {
  const [budget, setBudget] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    setBudget(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    const filtered = foodItems.filter(item => item.price <= budget && item.location === 'vit');
    setFilteredItems(filtered);
  };

  return (
    <div className='body'>
      <h1>Food Items Filter for VIT</h1>
      <label htmlFor="budgetInput">Enter your budget:</label>
      <input 
        type="number" 
        id="budgetInput" 
        value={budget} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSubmit}>Submit</button>

      <h2>Filtered Food Items</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <strong>Location:</strong> {item.location}<br />
            <strong>Store:</strong> {item.store}<br />
            <strong>Item:</strong> {item.item}<br />
            <strong>Price:</strong> {item.price}<br />
            <strong>Category:</strong> {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VIT;
