// foreign libraries
import { useState } from 'react'
import axios from 'axios';

// local libraries
import Head from 'next/head'
import Layout from '../layout/layout.js'
import styles from '../styles/Form.module.css'

export default function Register(){

    // data handling
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [id_role, setRole] = useState('');
    const [error, setError] = useState('');

    // error handling
    const [email_error, set_emailError] = useState('');
    const [username_error, set_usernameError] = useState('');
    const [password_error, set_passwordError] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstname(e.target.value);
        console.log(firstname)
    };

    const handleLastNameChange = (e) => {
        setLastname(e.target.value);
        console.log(lastname)
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        console.log(username)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password)
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        console.log(id_role)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/signup', { firstname, lastname, username, password, email, id_role })
        .then(response => {
            const { success } = response.data;
            if (success) {
                window.location.href = '/home';
            } else {
                set_emailError(response.data.email_error);
                set_usernameError(response.data.username_error);
                set_passwordError(response.data.password_error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        });
    };

    function resetValues(){
        
    }
    return(
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <main>
                <section className='w-3/4 mx-auto flex flex-col gap-10'>
                    <div>
                        <h1 className='text-3xl font-bold'>Create Account</h1>
                    </div>

                    <form className='flex flex-col gap-8 items-center' onSubmit={handleSubmit}>
                        {error && <p>{error}</p>}
                        <div className ='flex space-x-7 justify-betwen'>
                            <input className={styles.input_text} type='text' name='fname' placeholder='First Name' value={firstname} onChange={handleFirstNameChange}></input>
                            <input className={styles.input_text} type='text' name='lname' placeholder='Last Name' value={lastname} onChange={handleLastNameChange}></input>
                        </div>

                        <div className={styles.input_group}>
                            {username_error && <p>{username_error}</p>}
                            <input className={styles.input_text} type='Username' name= 'username' placeholder ='Username' value={username} onChange={handleUsernameChange}></input>
                        </div>

                        <div className={styles.input_group}>
                            {password_error && <p>{password_error}</p>}
                            <input className={styles.input_text} type='password' name='password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
                        </div>

                        <div className={styles.input_group}>
                            {email_error && <p>{email_error}</p>}
                            <input className={styles.input_text} type='email' name='email' placeholder='Email' value={email} onChange={handleEmailChange}></input>
                        </div>

                        <div className='flex w-full'>
                            <h1 className='text-white pr-2 font-bold'>Select user type:</h1>
                            <select className='rounded-xl p-1 focus:outline-none text-sm' defaultValue='0' onChange={handleRoleChange}>
                                <option value='0'> - select role - </option>
                                <option value='1' onChange={handleRoleChange}>Customer</option>
                                <option value='2' onChange={handleRoleChange}>Pharmacy Staff</option>
                            </select>

                        </div>

                        <div className={styles.button}>
                            <button type='submit'>
                                Sign Up 
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </Layout>
    )
}