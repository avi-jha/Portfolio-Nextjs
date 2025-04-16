import React from "react"
import JsonData from "../Data/data.json"
import Link from "next/link"
import "../styles/customStyles.css";

const ContactPage = () => {

    const textInputClassName = "w-full lg:w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
    const textareaClassName = "p-3 w-full lg:w-80 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"

    const formData = [
        { name: "First Name", type: "text", placeholder: "First Name", className: textInputClassName },
        { name: "Last Name", type: "text", placeholder: "Last Name", className: textInputClassName },
        { name: "Email Id", type: "text", placeholder: "Email ID", className: textInputClassName },
        { name: "Job Title", type: "text", placeholder: "Job Title", className: textInputClassName },
        { name: "Any Message or suggestion?", type: "text", placeholder: "Message", className: textareaClassName },
    ]

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

                {/* body */}
                <div className="items-start justify-center flex flex-col m-4 md:m-12 mt-20 md:mt-20">
                    <p className="text-2xl loading-relaxed whitespace-nowrap">contact me.</p>
                    <div className="mt-10 w-full lg:grid grid-cols-2">
                        {formData.map((item, index) => (
                            <div key={index}>
                                <div className="lg:flex lg:flex-row justify-between w-full">
                                    <div className="w-full mt-2">
                                        <p className="required-field">
                                            {item.name}
                                        </p>
                                        <br />
                                        <input
                                            type={item.type}
                                            className={item.className}
                                            placeholder={item.placeholder}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="mt-10 w-32 border-white border flex justify-center rounded-lg hover:bg-white hover:text-black">
                        <button className="p-4">Send</button>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ContactPage

