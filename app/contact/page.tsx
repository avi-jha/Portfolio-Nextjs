import React from 'react'
import JsonData from '../Data/data.json'
import Link from 'next/link'
import "../styles/customStyles.css";

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
                    <div className='mt-10'>
                        <div className='flex flex-row justify-between'>
                            <div className='mr-5'>
                                <p className='required-field'>First Name</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder={'First Name'}
                                />
                            </div>
                            <div className='ml-5'>
                                <p className='required-field'>Last Name</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder={'Last Name'}
                                />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between mt-10'>
                            <div className='mr-5'>
                                <p className='required-field'>Email ID</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder={'abc@xyz.com'}
                                />
                            </div>
                            <div className='ml-5'>
                                <p className='required-field'>Job Title</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder={'What is your job title?'}
                                />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between mt-10'>
                            <div className='mr-5' >
                                <p className='required-field'>Any Message or suggestion?</p>
                                <br />
                                <textarea className=' p-3 w-80 pt-7 pb-7 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent'
                                    placeholder='Message'
                                />
                            </div>
                        </div>
                        <div className='mt-20 w-32 border-white border flex justify-center rounded-lg hover:bg-white hover:text-black'>
                            <button className='p-4'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ContactPage

