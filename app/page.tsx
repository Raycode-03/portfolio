// page.tsx
import Image from "next/image";
import Navbar from "@/components/navbar"
import Skill from "@/components/skill"
import Work from "@/components/work"
export default async function Page() {
    return(
      <><Navbar/>
        <header className="relative w-full h-screen"> {/* Use h-screen for full viewport height */}
          
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <Image 
      src={"/images/computer.jpg"} 
      alt="Computer Background" 
      fill
      className="object-cover opacity-90"
      priority
    />
    {/* Optional overlay for better text readability */}
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
  
  {/* Content Section */}
  <section className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <div className="mt-4 flex items-center gap-6">
      <Image 
        src={"/images/raycode.jpg"} 
        alt="RayCode Logo" 
        width={160} 
        height={65}
        className="rounded-[33px]"
      />
       <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
      Nice to meet you!
      <br />
       I&apos;m Akerele Raymond.
    </h1>
    </div>
   
    <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
      Experienced Full-Stack Developer with 5+ years in the industry, specializing in creating intuitive digital products 
      that bridge the gap between user experience and business requirements. A self-taught professional dedicated to
       delivering impactful solutions.
    </p>
    <a href="https://docs.google.com/document/d/1oXjtZ_oQT2Rmc_Pdqr0ikxfURezKkM-4Jyk1bwfKHP0/edit?usp=sharing" className="text-blue-300">Resume</a>
  </section>
        </header>
        <Skill/>
        <Work/>
      </>
    )
}