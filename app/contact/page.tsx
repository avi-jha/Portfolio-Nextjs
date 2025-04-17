'use client'

import React from "react"
import JsonData from "../Data/data.json"
import Link from "next/link"
import "../styles/customStyles.css";

const ContactPage = () => {
    const textInputClassName =
        "w-full mt-2 mb-4 lg:w-80 h-6 p-5 pt-6 pb-6 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"
    const textareaClassName =
        "p-3 w-full mt-2 mb-4 lg:w-80 border border-stone-500 hover:border-white focus:border-white focus:outline-none placeholder-slate-400 text-white bg-transparent"

    const formData = [
        { name: "Name", type: "text", placeholder: "First Name", className: textInputClassName },
        { name: "Email Id", type: "text", placeholder: "Email ID", className: textInputClassName },
        { name: "Job Title", type: "text", placeholder: "Job Title", className: textInputClassName },
        {
            name: "Any Message or suggestion?",
            type: "textarea", // distinguish textarea
            placeholder: "Message",
            className: textareaClassName,
        },
    ]

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "d49ad116-d70f-4dbc-8f95-bcec3dae180a",
                name: (form.elements.namedItem("Name") as HTMLInputElement).value,
                email: (form.elements.namedItem("Email Id") as HTMLInputElement).value,
                jobTitle: (form.elements.namedItem("Job Title") as HTMLInputElement).value,
                message: (form.elements.namedItem("Any Message or suggestion?") as HTMLTextAreaElement).value,
            }),
        });

        const result = await response.json();
        if (result.success) {
            console.log(result);
            form.reset(); // Clear the form data
        }
    }

    return (
        <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
            <div className="w-full md:w-[90%] lg:w-[55%]">
                {/* nav bar */}
                <div className="z-10 w-full md:w-[90%] lg:w-[60%] max-w-5xl font-mono text-sm lg:flex">
                    <ul className="flex flex-wrap md:flex-row">
                        {JsonData.Header.map((data, index) => (
                            <li className="px-4" key={index + data}>
                                <Link href={data === "home" ? "/" : `/${data}`}>{data}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* body */}
                <div className="items-start justify-center flex flex-col m-4 md:m-12 mt-20 md:mt-20">
                    <p className="text-2xl loading-relaxed whitespace-nowrap">contact me.</p>
                    <div className="mt-10 w-full">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="lg:grid grid-cols-2">
                                {formData.map((item, index) => (
                                    <div key={index}>
                                        <div className="lg:flex lg:flex-row justify-between w-full">
                                            <div className="w-full">
                                                <p className="required-field">{item.name}</p>
                                                {item.type === "textarea" ? (
                                                    <textarea
                                                        className={item.className}
                                                        placeholder={item.placeholder}
                                                        name={item.name}
                                                        required
                                                    />
                                                ) : (
                                                    <input
                                                        type={item.type}
                                                        className={item.className}
                                                        placeholder={item.placeholder}
                                                        name={item.name}
                                                        required
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 w-32 border-white border flex justify-center rounded-lg hover:bg-white hover:text-black">
                                <button type="submit" className="p-4">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
