import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Navbar() {
    const id_user = localStorage.getItem('id_user');

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/login') { id_user: 1};
            setUser(response.data.user);
            console.log(response)
        } catch (error) {
            console.error('Error:', error);
        }
    };

  const handleLogout = async () => {
    try {
        await axios.get('/api/logout');
        setUser(null);
        // Handle logout logic and redirect if needed
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center bg-blue-950 p-4 shadow-lg">
          <h1 className="font-bold text-white text-xl">PharmaExpress</h1>
          <ul className="flex space-x-6 text-lg text-white">
            <li>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/store">
                Store
              </Link>
            </li>
            <li>
              <Link href="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/delivery">
                Delivery
              </Link>
            </li>
            {user ? (
              <li>
                <span>Welcome, {user.username}!</span>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li>
                <Link href="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}