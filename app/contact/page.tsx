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
                        {JsonData.Header.map((data, index) => (
                            <li className="px-4" key={index}>
                                <Link href={data === "home" ? "/" : `/${data}`}>{data}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=' items-start justify-center flex flex-col m-12 mt-20'>
                    <p className='text-xl loading-relaxed'>contact me.</p>
                    <div className='w-60'>
                        {JsonData.Contact.map((data, index) => (
                            data === 'Message' ?
                                <textarea className='w-80 mt-10 p-5 pt-7 pb-7 border rounded-lg border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent' placeholder='Message' key={data + index} />
                                : <input
                                    key={data + index}
                                    type="text"
                                    className="w-80 h-10 mt-10 p-5 pt-7 pb-7 border rounded-lg border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder={data}
                                />
                        ))}
                    </div>
                    <div className='mt-20 w-32 border-white border flex justify-center rounded-lg hover:bg-white hover:text-black'>
                        <button className='p-4'>Send</button>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ContactPage

