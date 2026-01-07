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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>
      
      {/* Content Section */}
     <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <Image 
          src={"/images/raycode.jpg"} 
          alt="RayCode Logo" 
          width={120} 
          height={120}
          className="rounded-2xl shadow-md"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight">
          Nice to meet you!
          <br />
          <span className="text-blue-500">I&apos;m Akerele Raymond.</span>
        </h1>
      </div>

      <p className="text-base md:text-lg max-w-xl md:max-w-2xl mb-10 leading-relaxed text-white/90">
        Full-Stack Developer with hands-on experience building responsive, user-focused web applications using React, Next.js, and Node.js. 
        Skilled in API development, modern frontend tooling, and collaborating on real-world products through a remote frontend internship.
        Focused on clean UI, scalable architecture, and practical problem-solving.
      </p>

      <a 
        href="https://docs.google.com/document/d/1oXjtZ_oQT2Rmc_Pdqr0ikxfURezKkM-4Jyk1bwfKHP0/edit?usp=sharing"
        className="inline-flex items-center px-7 py-3 bg-blue-600 hover:bg-blue-500 
        text-white font-semibold rounded-xl transition-all duration-200 
        shadow-lg hover:shadow-blue-500/30"
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