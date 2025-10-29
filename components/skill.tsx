import React from 'react'
import Image from 'next/image'
function skill() {
  return (
    <div className='bg-black/90 py-12 px-6'>
  <h1 className='text-white text-center p-5 text-4xl font-bold mb-8'>Skills & Technologies</h1>
  
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Web Development Skills */}
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/html.png"} alt="HTML" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">HTML</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/css-3.png"} alt="CSS" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">CSS</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/js.png"} alt="JavaScript" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">JavaScript</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/node-js.png"} alt="Node.js" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">Node.js</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/react.png"} alt="React" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">React</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/mongo-db.png"} alt="MongoDB" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">MongoDB</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/nextjs.png"} alt="Next.js" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium">Next.js</span>
      </div>
      
      {/* Programming Languages - With Skill Level */}
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/c-.png"} alt="C++" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium block">C++</span>
        <span className="text-gray-400 text-sm">Beginner</span>
      </div>
      
      <div className="skill-item bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
        <Image src={"/logos/python.png"} alt="Python" width={50} height={50} className="mx-auto mb-2"/>
        <span className="text-white font-medium block">Python</span>
        <span className="text-gray-400 text-sm">Beginner</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default skill