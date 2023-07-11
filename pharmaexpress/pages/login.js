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
                    <section className='w-3/4 mx-auto flex flex-col gap-10'>
                        <div className='title'>
                            <h1 className='text-4xl font-bold py-4'>Welcome!</h1>
                            <p className='text-2xl'>Log in</p>
                        </div>

                        <form className='flex flex-col gap-5 items-center'>
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

                            <p className='text-center'> 
                                Don't have an account? Sign up <Link href={'/register'} className = 'text-cyan-400 underline'>here</Link>
                            </p>
                        </form>
                    </section>
                </div>
            </main>
        </Layout>
    )
}