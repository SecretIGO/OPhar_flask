// foreign libraries
import React, { useState } from 'react';
import axios from 'axios';

// local libraries
import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'


export default function Login(){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        console.log(username)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/login', { username, password })
        .then(response => {
            const { success } = response.data;
            if (success) {
            window.location.href = '/home';
            } else {
            setError(response.data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        });
    };

    return(
        <Layout>
            <main>
                <div>
                    <section className='w-3/4 mx-auto flex flex-col gap-8 text-white'>
                        <div className='title'>
                            <h1 className='text-3xl font-bold py-2 uppercase'>welcome</h1>
                            <h2 className='font-light'>Enter your username and password to start browsing!</h2>
                        </div>

                        <form className='flex flex-col gap-8 items-center text-black' onSubmit={handleSubmit}>
                            <div className={styles.input_group}>
                                <input className={styles.input_text} type="text" value={username} placeholder='Username' onChange={handleUsernameChange} />
                            </div>

                            <div className={styles.input_group}>
                                <input className={styles.input_text} type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
                            </div>
                            {error && <p>{error}</p>}
                            <div className={styles.button}>
                                <button type='submit'>
                                    Log in 
                                </button>
                            </div>

                            <p className='text-center font-light'> 
                                Don't have an account? Sign up <Link href={'/register'} className = 'text-cyan-400 underline'>here</Link>
                            </p>
                        </form>
                    </section>
                </div>
            </main>
        </Layout>
    )
}