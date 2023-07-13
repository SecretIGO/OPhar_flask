import Head from 'next/head'
import { useState } from 'react'
import Layout from '../layout/layout.js'
import styles from '../styles/Form.module.css'

export default function Register(){

    function resetValues(){
        
    }

    const [user, setUser] = useState()

    return(
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <main>
                <section className='w-4/5 mx-auto flex flex-col gap-10'>
                    <div>
                        <h1 className='text-3xl font-bold text-white'>Create Account</h1>
                    </div>

                    <form className='flex flex-col gap-8 items-center'>
                        
                        <div className ='flex space-x-7 justify-betwen'>
                            <input className={styles.input_text} type={'text'} name='fname' placeholder='First Name'></input>
                            <input className={styles.input_text} type={'text'} name='lname' placeholder='Last Name'></input>
                        </div>

                        <input className={styles.input_text} type={'Username'} name= 'username' placeholder ='Username'></input>

                        <div className={styles.input_group}>
                            <input className={styles.input_text} type='password' name='password' placeholder='Password'></input>
                        </div>

                        <div className={styles.input_group}>
                            <input className={styles.input_text} type='email' name='email' placeholder='Email'></input>
                        </div>

                        <div className='flex w-full'>
                            <h1 className='text-white pr-2 font-bold'>Select user type:</h1>
                            <select className='rounded-xl p-1 focus:outline-none text-sm' value={user} onChange={user=>setUser(user.target.value)}>
                                <option value='customer'>Customer</option>
                                <option value='manager'>Pharmacy Manager</option>
                            </select>
                        </div>

                        <div className='flex w-full space-x-8 justify-between'>
                            <div className={styles.button}>
                                <button type='submit'>
                                    Sign Up 
                                </button>
                            </div>
                            <div className={styles.button}>
                                <button type='submit'>
                                    Reset 
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </Layout>
    )
}