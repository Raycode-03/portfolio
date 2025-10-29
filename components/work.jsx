import React from 'react'
import {Card} from "@/components/ui/card"
import { link } from 'fs'
function Work() {
  const porject_details = [
    {
      title: "KongaHub",
      description: "A node app created  having auth, products display, payment gateway and admin dashboard functionalities.",
      image: "/images/Kongahub.png",
      github_link: "https://github.com/Raycode-03/ray_project",
      live_link: "https://ray-project.onrender.com/kongahub/phones",
    },
    {
      title: "Flowline",
      description: "A web app created having auth, next-auth, feeds creation, likes and comments functionalities. and also chat system",
      image: "/images/", 
      github_link: "https://github.com/Raycode-03/Social-app",
    },
    {
      title: "Raycode Portfolio",
      description: "Description for project three.", 
      image: "/images/Raycode_Portfolio.png",
      github_link: "",
    },
  ]
  return (
    <>
      <Card>
        
      </Card>   
    </>
  )
}

export default Work