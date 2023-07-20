import Link from 'next/link'
import { BiSolidCartAlt } from "react-icons/bi";
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function Navbar(){
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

    return(
        <header>
            <nav>
                <div className='flex justify-between items-center bg-blue-950 p-4 shadow-lg'>
                    <h1 className='font-bold text-white text-xl'>PharmaExpress</h1>
                    <ul className='flex font-light space-x-6 text-lg text-white items-center'>
                        <li>
                            <Link href='/home'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href='/store'>
                                Store
                            </Link>
                        </li>

                        <li>
                            <Link href='/orders'>
                                Orders
                            </Link>
                        </li>

                        <li>
                            <Link href='/cart'>
                                <BiSolidCartAlt size={24}/>
                            </Link>
                        </li>

                        {user ? (
                            <li>
                                <span> | {user} | </span>
                                <Link onClick={handleLogout} href='/home'>Logout</Link>
                            </li>
                            ) : (
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}