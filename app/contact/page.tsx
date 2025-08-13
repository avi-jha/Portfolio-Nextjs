'use client'

import React, { useState } from "react"
import JsonData from "../Data/data.json"
import Link from "next/link"
import "../styles/customStyles.css";

const ContactPage = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

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
        setSubmitStatus('sending');
        const form = e.currentTarget;

        try {
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
                setSubmitStatus('success');
                form.reset();
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
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
                                <button type="submit" className="p-4" disabled={submitStatus === 'sending'}>
                                    {submitStatus === 'sending' ? 'Sending...' : 'Send'}
                                </button>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="mt-4 p-3 bg-green-600 text-white rounded-lg">
                                    ✓ Email sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mt-4 p-3 bg-red-600 text-white rounded-lg">
                                    ✗ Failed to send email. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                
                {/* footer */}
                <footer className="mt-20 pt-8 border-t border-stone-500 text-center text-sm text-gray-400">
                    <p className="mb-2">Or reach me directly at:</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="mailto:avinashbhaskarjha@gmail.com" className="hover:text-white transition-colors">
                            avinashbhaskarjha@gmail.com
                        </a>
                        <a href="tel:+916387796299" className="hover:text-white transition-colors">
                            +91 6387796299
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
};

export default ContactPage;
