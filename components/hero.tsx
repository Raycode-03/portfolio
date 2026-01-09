'use client'

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import { gsap } from "gsap"
export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } })

    if (imageRef.current && textRef.current && subRef.current) {
      tl.from(imageRef.current, { y: -100, opacity: 0 })
        .from(textRef.current, { x: 100, opacity: 0 }, "-=0.5") // overlap a bit
        .from(subRef.current, { y: 50, opacity: 0 }, "-=0.5")
    }
  }, [])

  return (
    <header className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full" id="home">
        <Image 
          src={"/images/computer.jpg"} 
          alt="Computer Background" 
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          {/* Image */}
          <div ref={imageRef}>
            <Image 
              src={"/images/profileimage.jpeg"} 
              alt="RayCode Logo" 
              width={120} 
              height={120}
              className="rounded-2xl shadow-md"
            />
          </div>

          {/* Text */}
          <div ref={textRef}>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight">
              Nice to meet you!
              <br />
              <span className="text-blue-500">I&apos;m Akerele Raymond.</span>
            </h1>
          </div>
        </div>

        {/* Paragraph + Button */}
        <div ref={subRef} className="flex flex-col items-center gap-6">
          <p className="text-base md:text-lg max-w-xl md:max-w-2xl leading-relaxed text-white/90">
            Full-Stack Developer with hands-on experience building responsive, user-focused web applications using React, Next.js, and Node.js. 
            Skilled in API development, modern frontend tooling, and collaborating on real-world products through a remote frontend internship.
            Focused on clean UI, scalable architecture, and practical problem-solving.
          </p>

          <a 
            href="/Akerele_Raymond_Resume.pdf"
            download    
            className="inline-flex items-center px-7 py-3 bg-blue-600 hover:bg-blue-500 
            text-white font-semibold rounded-xl transition-all duration-200 
            shadow-lg hover:shadow-blue-500/30"
          >
            <Download className="w-5 h-5 mr-2"/>
            Download Resume
          </a>
        </div>
      </section>
    </header>
  )
}
