import Head from 'next/head'
import Layout from '../layout/layout.js'
import styles from '../styles/Form.module.css'

export default function Register(){
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

                    <form className='flex flex-col gap-5 items-center'>
                        <div className={styles.input_group}>
                            <input className={styles.input_text} type='email' name='email' placeholder='Email'></input>
                        </div>

                        <div className={styles.input_group}>
                            <input className={styles.input_text} type='email' name='email' placeholder='Email'></input>
                        </div>

                        <div className={styles.input_group}>
                            <input className={styles.input_text} type='password' name='password' placeholder='Password'></input>
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