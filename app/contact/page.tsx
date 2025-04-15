import React from "react"
import JsonData from "../Data/data.json"
import Link from "next/link"
import "../styles/customStyles.css";

const ContactPage = () => {
    return (
        <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
            <div className="w-full md:w-[90%] lg:w-[55%]">
                {/* nav bar */}
                <div className="z-10 w-full md:w-[90%] lg:w-[60%] max-w-5xl font-mono text-sm lg:flex">
                    <ul className="flex flex-wrap md:flex-row">
                        {JsonData.Header.map((data, index) => (
                            <li className="px-4" key={index + data}>
                                {/* TODO: add "Blogs" on nav bar */}
                                <Link href={data === "home" ? "/" : `/${data}`}>
                                    {data}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="items-start justify-center flex flex-col lg:m-12 mt-20">
                    <p className="text-2xl loading-relaxed whitespace-nowrap">contact me.</p>
                    <div className="mt-10 w-full">
                        <div className="lg:flex lg:flex-row justify-between w-full">
                            <div className="w-full">
                                <p className="required-field">First Name</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-full lg:w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="mt-10 lg:mt-0 lg:ml-10">
                                <p className="required-field">Last Name</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-full lg:w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-row justify-between mt-10">
                            <div className="">
                                <p className="required-field">Email ID</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-full lg:w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder="abc@xyz.com"
                                />
                            </div>
                            <div className="mt-10 lg:mt-0  lg:ml-10">
                                <p className="required-field">Job Title</p>
                                <br />
                                <input
                                    type="text"
                                    className="w-full lg:w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder={"What is your job title?"}
                                />
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-row justify-between mt-10">
                            <div className="" >
                                <p className="required-field">Any Message or suggestion?</p>
                                <br />
                                <textarea className="p-3  w-full lg:w-80  border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                        <div className="mt-20 w-32 border-white border flex justify-center rounded-lg hover:bg-white hover:text-black">
                            <button className="p-4">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ContactPage

