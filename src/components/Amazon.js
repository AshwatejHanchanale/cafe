// src/components/Amazon.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({ handleClick }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <section>
      {
        menuItems.map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))
      }
    </section>
  );
};

export default Amazon;
