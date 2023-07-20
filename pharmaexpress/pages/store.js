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
      <h1 className='text-center pt-6 font-bold text-3xl'>All Products</h1>
      <ProductGrid products={items} />
    </div>
  );
}

export default Store;