import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import styles from '../styles/Form.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const cookies = new Cookies();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', { username, password });
      const { success, id_user } = response.data;
      if (success) {
        cookies.set('username', username, { path: '/' }); // Store the username in cookies
        router.push('/home');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <div>
          <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
              <h1 className='text-4xl font-bold py-4'>Welcome!</h1>
              <p className='text-2xl'>Log in</p>
            </div>

            <form className='flex flex-col gap-5 items-center' onSubmit={handleSubmit}>
              <div className={styles.input_group}>
                <input
                  className={styles.input_text}
                  type='text'
                  value={username}
                  placeholder='Username'
                  onChange={handleUsernameChange}
                />
              </div>

              <div className={styles.input_group}>
                <input
                  className={styles.input_text}
                  type='password'
                  value={password}
                  placeholder='Password'
                  onChange={handlePasswordChange}
                />
              </div>
              {error && <p>{error}</p>}
              <div className={styles.button}>
                <button type='submit'>Log in</button>
              </div>

              <p className='text-center'>
                Don't have an account? Sign up <Link href={'/register'} className='text-cyan-400 underline'>here</Link>
              </p>
            </form>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Login;