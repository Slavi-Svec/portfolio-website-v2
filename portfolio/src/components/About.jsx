import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import sydney from "../assets/sydney.jpg"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const  About = () => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`).then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, [])

  if (!author) return <div>Loading...</div>
 
  return (
    <main className="relative">
      <img
        src={sydney}
        alt="Sydney image"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={sydney}
            className="rounded w-32 h-32 lg:w-64 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hi there. I'm{" "}
              <span className="text-blue-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent blocks={author.bio} projectID="c4lwb6zm" dataset="production" />
              </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About