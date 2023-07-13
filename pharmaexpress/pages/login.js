import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'

export default function Login(){
    return(
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <main>
                <div>
                    <section className='w-3/4 mx-auto flex flex-col gap-8 text-white'>
                        <div className='title'>
                            <h1 className='text-3xl font-bold py-2 uppercase'>welcome</h1>
                            <h2 className='font-light'>Enter your username and password to start browsing!</h2>
                        </div>

                        <form className='flex flex-col gap-8 items-center'>
                            <div className={styles.input_group}>
                                <input className={styles.input_text} type='email' name='email' placeholder='Email'></input>
                            </div>

                            <div className={styles.input_group}>
                                <input className={styles.input_text} type='password' name='password' placeholder='Password'></input>
                            </div>

                            <div className={styles.button}>
                                <Link href='/home'>
                                    <button type='submit'>
                                        Log in 
                                    </button>
                                </Link>
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