import React from 'react'
import JsonData from '../Data/data.json'

const ContactPage = () => {
    return (
        <div className='w-screen h-screen items-start justify-center flex pl-32 flex-col '>

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
    )
}

export default ContactPage

