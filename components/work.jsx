'use client'

import React, { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { SquareArrowOutUpRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const project_details = [
  {
    title: "KongaHub E-commerce App",
    description: "A full-featured e-commerce platform where users can browse products, add to cart, and checkout. Built with Node.js, Express.js, MongoDB, and EJS",
    image: "/images/Kongahub.png",
    github_link: "https://github.com/Raycode-03/ray_project",
    live_link: "https://ray-project.onrender.com/kongahub/phones",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS"]
  },
  {
    title: "Flowline Social App",
    description :"A social networking app where users can create profiles, share posts, like, comment, and engage with others. Built with Next.js, MongoDB, Cloudinary, and Tailwind CSS.",
    image: "/images/Flowline.png",
    github_link: "https://github.com/Raycode-03/Social-app",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Tailwind CSS"]
  },
  {
    title: "BookHive Library App",
    description: "A library management app to browse, reserve, and borrow books. Features JWT authentication, scheduled tasks, and cloud image storage. Built with React, Node.js, and Tailwind CSS.",
    image: "/images/BookHive.png",
    github_link: "https://github.com/Raycode-03/BookHive",
    live_link: "https://book-hive-steel.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cron", "Tailwind CSS", "Cloudinary"]
  },
]

function Work() {
  // Use a single container ref and animate children instead
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      gsap.utils.toArray(containerRef.current.children).forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          },
        })
      })
    }
  }, [])

  return (
    <div className=" bg-black/90 px-9 py-12 md:py-20 lg:py-24" id="project" ref={containerRef}>
      <h1 className="text-4xl font-bold uppercase text-center mb-12 text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project_details.map((project, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-black/10"
          >
            {/* Image */}
            <div className="relative top-0 h-64 overflow-hidden">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              {/* Overlay Links */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition"
                  >
                    <Image src="/logos/github.svg" width={24} height={24} alt="Github" />
                  </a>
                )}
                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition"
                  >
                    <SquareArrowOutUpRight className="w-6 h-6 text-white" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="text-gray-500 mb-3">{project.description}</p>
              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/50 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Work
