
import Image from "next/image"

export default function SearchBar(){
    return(
        <div className='py-4 w-1/4'>
            <div className='flex items-center w-full text-gray-500 bg-white rounded-full px-5'>
                <Image
                    src='/assets/search.png'
                    height={24}
                    width={24}
                />
                <input placeholder='Search for Products' className='bg-white h-10 ml-3 w-full rounded-full text-sm focus:outline-none'>
                </input>
            </div>
        </div>

    )
}