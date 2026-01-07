// page.tsx
import Image from "next/image";
import Navbar from "@/components/navbar"
import Skill from "@/components/skill"
import Work from "@/components/work"
import Contact from "@/components/contact"
import {  Download } from "lucide-react";
export default async function Page() {
    return(
      <><Navbar/>
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
    <div className="absolute inset-0 bg-black/70"></div>
  </div>
  
  {/* Content Section */}
  <section className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-24 sm:pt-0">
    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
      {/* Logo/Image */}
      <Image 
        src={"/images/raycode.jpg"} 
        alt="RayCode Logo" 
        width={160} 
        height={65}
        className="rounded-[33px]"
      />
      
      {/* Heading - will stack below image on mobile */}
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
        Nice to meet you!
        <br />
        I&apos;m Akerele Raymond.
      </h1>
    </div>
   
    <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
      Full-Stack Developer with hands-on experience building responsive, user-focused web applications using React, Next.js, and Node.js. 
      Skilled in API development, modern frontend tooling, and collaborating on real-world products through a remote frontend internship.
       Focused on clean UI, scalable architecture, and practical problem-solving.
    </p>
    
    <a 
      href="https://docs.google.com/document/d/1oXjtZ_oQT2Rmc_Pdqr0ikxfURezKkM-4Jyk1bwfKHP0/edit?usp=sharing"
      download="Akerele_Raymond_Resume.pdf"
      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <Download className="w-5 h-5 mr-2"/>
      Download Resume
    </a>
  </section>
</header>
        <Skill/>
        <Work/>
        <Contact/>
      </>
    )
}