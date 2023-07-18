import React, { useEffect, useState } from 'react';
import Header from '@/components/navbar';
import ProductGrid from '@/layout/productgrid';
import axios from 'axios';

function Store() {
  const [items, setItems] = useState([]);

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
  
  return (
    <div>
      <Header />
      <ProductGrid products={items} />
    </div>
  );
}

export default Store;