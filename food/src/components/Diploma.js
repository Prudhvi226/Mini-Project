import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


import './VIT.css';

const Diploma = ({ foodItems }) => {
  const [budget, setBudget] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showFilteredItems, setShowFilteredItems] = useState(false);
  const [sortOrder, setSortOrder] = useState('lowToHigh'); // Default sort order
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setFilteredItems(foodItems);
  }, [foodItems]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Check if inputValue is a valid number
    if (!isNaN(inputValue)) {
      // If it's a valid number, update the budget state
      setBudget(parseInt(inputValue));
    } else {
      // If it's not a valid number, display a message or handle it accordingly
      console.log("Please enter a valid number for the budget.");
      // You can also set an error state and display it in the UI
    }
  };

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = () => {
    if (foodItems) {
      // Check if at least one category is selected
      if (selectedCategories.length === 0) {
        alert("Please select at least one category.");
        return; // Exit the function if no category is selected
      }

      // Check if any item in the selected categories matches the budget
      const anyItemWithinBudget = foodItems.some(
        (item) =>
          parseFloat(item.price) <= budget &&
          item.location === 'diploma' &&
          selectedCategories.includes(item.category)
      );

      if (!anyItemWithinBudget) {
        setErrorMessage('No item is available in your given amount.');
        setShowFilteredItems(false);
        return;
      }

      // Filter items based on selected categories and budget
      const filtered = foodItems.filter(
        (item) =>
          parseFloat(item.price) <= budget &&
          item.location === 'diploma' &&
          selectedCategories.includes(item.category)
      );

      // Sort filtered items based on selected sort order
      if (sortOrder === 'lowToHigh') {
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else {
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }

      setFilteredItems(filtered);
      setShowFilteredItems(true);
      setErrorMessage('');
    }
  };
  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    if (filteredItems.length > 0) {
      // Sort filtered items based on selected sort order
      const sortedItems = [...filteredItems];
      if (e.target.value === 'lowToHigh') {
        sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else {
        sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
      setFilteredItems(sortedItems);
    }
  };

  // Function to toggle favorite status
  const toggleFavorite = (item) => {
    const index = favorites.findIndex((favorite) => favorite.item === item.item);
    if (index === -1) {
      setFavorites((prevFavorites) => [...prevFavorites, { item, isFavorite: true }]);
    } else {
      setFavorites((prevFavorites) => {
        const newFavorites = [...prevFavorites];
        newFavorites.splice(index, 1);
        return newFavorites;
      });
    }
  };
  return (
    <div className='body'>
      <h1>Food Items Filter for Diploma</h1>
      <div className='input-container'>
      <label htmlFor='budgetInput'>Enter your budget:</label>
      <input type='number' id='budgetInput' value={budget} onChange={handleInputChange} />
      </div>
      <div className='category-list'>
  {/* Veg */}
  <div className={`category-card ${selectedCategories.includes('veg') ? 'selected' : ''}`} onClick={() => handleCategoryClick('veg')}>
    <img src='https://c.ndtvimg.com/2021-03/69go9vko_copper-thali_625x300_10_March_21.jpg' alt='Veg' />
    <p>Veg</p>
  </div>
  
  {/* Non-Veg */}
  <div className={`category-card ${selectedCategories.includes('non veg') ? 'selected' : ''}`} onClick={() => handleCategoryClick('non veg')}>
    <img src='https://media.istockphoto.com/id/914008376/photo/indian-dish-of-spicy-hot-chicken-curry-in-red.jpg?s=612x612&w=0&k=20&c=vxFrP7rD0njsK7cSzZ126XPEwyK06AfpH8enVG_dKjI=' alt='Non-Veg' />
    <p>Non Veg</p>
  </div>
  
  {/* Tiffins */}
  <div className={`category-card ${selectedCategories.includes('tiffins') ? 'selected' : ''}`} onClick={() => handleCategoryClick('tiffins')}>
    <img src='https://content.jdmagicbox.com/comp/mumbai/r5/040pxx40.xx40.180630225100.v2r5/catalogue/my-tiffins-kanajiguda-hyderabad-breakfast-restaurants-ve06sxaer6.jpg' alt='Tiffins' />
    <p>Tiffins</p>
  </div>
  
  {/* Cake */}
  <div className={`category-card ${selectedCategories.includes('cake') ? 'selected' : ''}`} onClick={() => handleCategoryClick('cake')}>
    <img src='https://images8.alphacoders.com/135/1350238.png' alt='Cake' />
    <p>Cake</p>
  </div>
  
  {/* Tea */}
  <div className={`category-card ${selectedCategories.includes('tea') ? 'selected' : ''}`} onClick={() => handleCategoryClick('tea')}>
    <img src='https://c4.wallpaperflare.com/wallpaper/668/530/460/coffee-cup-beverage-espresso-wallpaper-preview.jpg' alt='Tea' />
    <p>Tea</p>
  </div>
  
  {/* Drinks */}
  <div className={`category-card ${selectedCategories.includes('drinks') ? 'selected' : ''}`} onClick={() => handleCategoryClick('drinks')}>
    <img src='https://t4.ftcdn.net/jpg/03/49/80/15/360_F_349801592_MX0ZnIl6pXNQH4srBoJEhJCSxlhUTDpf.jpg' alt='Drinks' />
    <p>Drinks</p>
  </div>
  
  {/* Juice */}
  <div className={`category-card ${selectedCategories.includes('juice') ? 'selected' : ''}`} onClick={() => handleCategoryClick('juice')}>
    <img src='https://media.istockphoto.com/id/1314791604/photo/orange-kiwi-and-strawberry-juices-on-wooden-table.jpg?s=612x612&w=0&k=20&c=NNdsH9wigP7thwEGM5llrzt6-WLwz_WNx1NDfWf_IiY=' alt='Juice' />
    <p>Juice</p>
  </div>
  
  {/* Shakes */}
  <div className={`category-card ${selectedCategories.includes('shakes') ? 'selected' : ''}`} onClick={() => handleCategoryClick('shakes')}>
    <img src='https://wallpapercave.com/wp/wp11669203.jpg' alt='Shakes' />
    <p>Shakes</p>
  </div>
  
  {/* Ice Creams */}
  <div className={`category-card ${selectedCategories.includes('icecreams') ? 'selected' : ''}`} onClick={() => handleCategoryClick('icecreams')}>
    <img src='https://w0.peakpx.com/wallpaper/702/688/HD-wallpaper-ice-cream-background-beautiful-best-available-for-ice-cream.jpg' alt='Ice Creams' />
    <p>Ice Creams</p>
  </div>
</div>


      <button onClick={handleSubmit} className='submit-button'>
        Submit
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showFilteredItems && (
        <>
          <div className='filter-container'>
            <label htmlFor='sortOrder'>Sort by:</label>
            <select id='sortOrder' value={sortOrder} onChange={handleSortChange} className='sort-select'>
              <option value='lowToHigh'>Low to High</option>
              <option value='highToLow'>High to Low</option>
            </select>
          </div>
          <h2>Filtered Food Items</h2>
          <div className='card-container'>
           
          {filteredItems.map((item, index) => (
  <div key={index} className='card'>
    {/* Heart icon positioned on the top right corner */}
    <FontAwesomeIcon
      icon={favorites.some((favItem) => favItem.item === item) ? solidHeart : regularHeart}
      className="heart-icon"
      onClick={() => toggleFavorite(item)}
      style={{ color: favorites.some((favItem) => favItem.item === item) ? 'red' : 'black' }}
    />   
    <div className='card-body'>
      <h3 className='card-title'>{item.item}</h3>
      <p>
        <strong>Location:</strong> {item.location}
      </p>
      <p>
        <strong>Store:</strong> {item.store}
      </p>
      <p>
        <strong>Price:</strong> {item.price}
      </p>
      <p>
        <strong>Category:</strong> {item.category}
      </p>
    </div>
  </div>
))}

          </div>
          {/* Link to favorites page */}
   
        </>
      )}
    </div>
  );
};

export default Diploma;
