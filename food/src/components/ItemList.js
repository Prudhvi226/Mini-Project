import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Recommended Food Items</h1>
      <p className="lead text-center mt-3">
        Here are the recommended food items based on the amount you entered.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Store</th>
            <th>Menu</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.location}</td>
              <td>{item.store}</td>
              <td>{item.menu}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
