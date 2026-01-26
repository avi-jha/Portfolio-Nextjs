import React from 'react'
import ReactMarkdown from 'react-markdown'
import { promises as fs } from 'fs'
import path from 'path'

interface PageProps {
    searchParams: { fileName?: string }
}

export default async function Posts({ searchParams }: PageProps) {

    const { fileName } = searchParams
    const filePath = path.join(process.cwd(), `app/posts/${fileName}.md`)
    const fileContent = await fs.readFile(filePath, 'utf8')

    return (
        <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
            <div className="w-[55%]">
                <ReactMarkdown
                    components={{
                        img: ({ node, ...props }) => (
                            <img
                                {...props}
                                className="my-8 w-full rounded-lg"
                                alt={props.alt || ''}
                            />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="my-4 leading-relaxed">{props.children}</p>
                        ),
                        h2: ({ node, ...props }) => (
                            <h2 className="my-8 text-3xl font-bold">{props.children}</h2>
                        ),
                    }}
                >
                    {fileContent}
                </ReactMarkdown>
            </div>
        </main>
    )
}