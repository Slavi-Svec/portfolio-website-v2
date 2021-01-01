import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'

export default function Project() {
    const [projectData, setProjectData] = usestate(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error)
    }, [])

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive"></h1>
                <h2 className="text-lg text-gray-600 flex justify center mb-12">
                    Welcome to my projects
                </h2>
                <section className="grid cols-2 gap-8">
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={projectData.link}
                            alt={projectData.title}
                            rel="noopener noreferrer"
                            >
                            {projectData.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date)toLocalDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>: {project.place}
                            </span>
                            <span></span>
                            <p></p>
                            <span></span>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}