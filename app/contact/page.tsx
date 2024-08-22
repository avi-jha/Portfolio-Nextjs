import React from 'react'
import JsonData from '../Data/data.json'
import Link from 'next/link'

const ContactPage = () => {
    return (
        <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
            <div className="w-[55%]">
                {/* nav bar */}
                <div className="z-10 w-[60%] max-w-5xl font-mono text-sm lg:flex m-10">
                    <ul className="flex flex-row ">
                        {/* TODO: add guestbook or contact me */}
                        {JsonData.Header.map((data, index) => (
                            <li className="px-4" key={index}>
                                <Link href={data === "home" ? "/" : `/${data}`}>{data}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=' items-start justify-center flex flex-col m-12 mt-20'>

                    <p className='text-xl loading-relaxed'>Talk to me!! 🎙️</p>
                    <div className='mt-10 w-60'>
                        {/* <p className='text-sm pr-1'>Name</p> */}
                        {JsonData.Contact.map((data, index) => (
                            <input
                                key={data + index}
                                type="text"
                                className="w-full h-10 mt-10 border-b border-stone-500 focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                placeholder={data}
                            />
                        ))}
                    </div>

                    <div className='mt-20 border-white border-b'>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactPage

