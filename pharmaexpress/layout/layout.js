import Image from "next/image"

export default function Layout({ children }){
    return(
        <div className="flex h-screen bg-blue-200">
            <div className="m-auto bg-blue-800 rounded-3xl w-2/3 h-3/4 grid lg:grid-cols-2 shadow-2xl">
                <div className="left flex flex-col rounded-l-3xl justify-evenly bg-blue-700 shadow-2xl">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
                <div className='flex justify-center relative overflow-hidden'>
                    <Image  
                        src='/assets/register.png'
                        height={640}
                        width={640}
                    />
                </div>
            </div>
        </div>
    )
}