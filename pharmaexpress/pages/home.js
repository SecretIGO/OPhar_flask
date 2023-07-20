import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Featured from '@/components/featuredproduct.js'
import Header from '../components/navbar.js'
import NewProducts from '../components/newproducts.js'

export default function Home(){
  const [items, setItems] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/get_items');
      console.log(response);
      setItems(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function getRandomItemId() {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex].id;
  }
  
  useEffect(() => {
    if (items.length > 0) {
      const featuredProductId = getRandomItemId();
      const featuredProductItem = items.find((item) => item.id === featuredProductId);
      setFeaturedProduct(featuredProductItem);
    }
  }, [items]);

  return(
      <div>
          <Header/>
          <Featured product={featuredProduct}/>
          <NewProducts products={items}/>
      </div>
  )
}



