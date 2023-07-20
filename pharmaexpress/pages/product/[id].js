import Header from "@/components/navbar";
import QuantityBtn from "@/components/quantitybutton";
import AddBtn from "@/components/AddCartBtn";
import styles from '@/styles/SingleProduct.module.css';
import Image from "next/image";
import Cookies from 'universal-cookie';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('')

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        const cookies = new Cookies();
        const username = cookies.get('username');
        setUsername(username);
    };

    // data connection to database
    useEffect(() => {
        if (id) {
            fetchItemDetails();
        }
    }, [id]);

    const fetchItemDetails = async () => {
        try {
        const response = await axios.post('http://localhost:8080/api/get_itemDetails', { id_item: id });
        setItem(response.data);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const addQuantity = () => {
        setCount(count => count + 1);
    };

    const minusQuantity = () => {
        setCount(count => count - 1);
    };

    // data handler

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/add_item_toCart', { id_item: id, username, quantity: count })
        .then(response => {
            const { success } = response.data;
            if (success) {
                router.push('/store');
            } else {
                setError(response.data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        });
    };
    
    return (
        <div>
        <Header />
        {item && (
            <div className='flex justify-center'>
            <div className={styles.gridLayout}>
                <div className='flex justify-center'>
                <div className="bg-blue-300 p-10 rounded-full shadow-xl">
                    <Image
                    src={item.image}
                    height={280}
                    width={280}
                    />
                </div>
                </div>
                <div className="w-4/5">
                <div className='py-6'>
                    <h1 className="text-4xl font-bold">{item.name}</h1>
                    <h2 className="text-2xl font-light">{item.category}</h2>
                    <p>____________________________________</p>
                    <h2 className="text-5xl font-bold">P{item.price}.00</h2>
                </div>
                <h2 className="text-2xl">In stock: {item.remaining_stock}</h2>
                <div className="my-6">
                <div className="flex">
                    <QuantityBtn
                        itemCount={count}
                        onDecrement={minusQuantity}
                        onIncrement={addQuantity}
                    />
                    <div className="w-1/5">
                        <button className="bg-blue-500 text-white rounded-full px-4 py-2" onClick={handleSubmit}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
                <div className='text-lg text-justify mt-6'>
                    {item.description}
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}