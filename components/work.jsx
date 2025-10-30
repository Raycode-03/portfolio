import React from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { SquareArrowOutUpRight } from 'lucide-react';

function Work() {
  const project_details = [
    {
      title: "KongaHub E-commerce App",
      description: "Node js Express js MongoDB EJS Css",
      image: "/images/Kongahub.png",
      github_link: "https://github.com/Raycode-03/ray_project",
      live_link: "https://ray-project.onrender.com/kongahub/phones",
    },
    {
      title: "Flowline Social App",
      description: "Next js Mongodb Cloudinary Tailwind Css",
      image: "/images/Flowline.png", 
      github_link: "https://github.com/Raycode-03/Social-app",
    },
    {
      title: "Raycode Portfolio",
      description: "Next js Tailwind Css", 
      image: "/images/Raycode_portfolio.png",
      github_link: "https://github.com/Raycode-03/portfolio",
      live_link: "https://portfolio-eight-azure-xdb4q5r3eo.vercel.app/",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8" id="project">
      <h1 className='mb-3 text-4xl font-bold uppercase text-center'>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {project_details.map((project, index) => (
          <Card key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 pt-0">
            {/* Image Container */}
            <div className="relative h-54 overflow-hidden ">
              {project.image && (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              
              {/* Overlay with Links - Shows on Hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                {project.github_link && (
                  <a 
                    href={project.github_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white/20"
                  >
                    <Image src={"/logos/github.svg"} alt="github logo" width={24} height={24}/>
                  </a>
                )}
                {project.live_link && (
                  <a 
                    href={project.live_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20"
                  >
                    <SquareArrowOutUpRight className="w-6 h-6 text-white"/>
                  </a>
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h2>
              <p className="text-gray-600 text-md leading-relaxed">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Work
