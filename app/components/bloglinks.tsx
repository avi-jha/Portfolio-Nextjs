import Link from 'next/link';
import React from 'react'

interface BlogLinksProps {
    title: string;
    views: string;
    fileName: string
}

const BlogLinks: React.FC<BlogLinksProps> = (props) => {
    const { title, views, fileName } = props

    return (
        <div className='flex flex-col m-12 mt-5'>
            <Link href={`/posts/?fileName=${fileName}`}>
                <p className='text-sm leading-relaxed'>{title}</p>
                <p className='text-xs leading-tight'>{views}</p>
            </Link>
        </div>
    )
}

export default BlogLinks