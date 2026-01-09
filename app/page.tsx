    // page.tsx
    import Navbar from "@/components/navbar"
    import Hero from "@/components/hero";
    import Skill from "@/components/skill"
    import Work from "@/components/work"
    import Contact from "@/components/contact"
    
    export default async function Page() {
        return(
          <><Navbar/>
            <Hero/>
            <Skill/>
            <Work/>
            <Contact/>
          </>
        )
    }