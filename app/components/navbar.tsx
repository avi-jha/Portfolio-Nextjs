import Link from 'next/link'
import React from 'react'
import JsonData from '../Data/data.json'

function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100]">
            {/* fiest part */}
            <div className="hidden lg:flex w-full justify-between">
                <ul className="flex flex-wrap md:flex-row border border-radius rounded-md pr-4 pt-2 pb-2">
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

            {/* download button */}
            <div>
            </div>
        </div>
    )
}

export default Navbar