'use client'

import React, { useEffect, useRef } from "react"
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "HTML", src: "/logos/html.png" },
  { name: "CSS", src: "/logos/css-3.png" },
  { name: "JavaScript", src: "/logos/js.png" },
  { name: "Node.js", src: "/logos/node-js.png" },
  { name: "React", src: "/logos/react.png" },
  { name: "MongoDB", src: "/logos/mongo-db.png" },
  { name: "Next.js", src: "/logos/nextjs.png" },
  { name: "Supabase", src: "/logos/supabase.png" },
  { name: "Git", src: "/logos/git.png" },
]

function Skill() {
   const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Tell GSAP that children are HTMLElement
      const cards = Array.from(containerRef.current.children) as HTMLElement[]

      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        })
      })
    }
  }, [])

  return (
    <div className='bg-black/90 py-12 px-6' ref={containerRef}>
      <h1 className='text-white text-center p-5 text-4xl font-bold mb-8'>
        Skills & Technologies
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300"
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={50}
                height={50}
                className="mx-auto mb-2"
              />
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill


