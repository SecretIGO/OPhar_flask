import Link from 'next/link'
import { BiSolidCartAlt } from "react-icons/bi";

export default function Navbar(){
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
                            <Link href='/cart'>
                                <BiSolidCartAlt size={24}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}