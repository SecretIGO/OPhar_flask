import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function Navbar() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    const cookies = new Cookies();
    const username = cookies.get('username');
    setUser(username);
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove('username');
    setUser(null);
  };

  console.log(user)

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center bg-blue-950 p-4 shadow-lg">
          <h1 className="font-bold text-white text-xl">PharmaExpress</h1>
          <ul className="flex space-x-6 text-lg text-white">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/delivery">Delivery</Link>
            </li>
            {user ? (
              <li>
                <span> | {user} | </span>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}