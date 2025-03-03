'use client'

import { CoverBlazzingSpeed } from "@/components/CoverBlazzingSpeed"
import HeroSection from "@/components/HeroSection"
import { LampBox } from "@/components/LampBox"
import Navbar from "@/components/Navbar"
import { ProjectTimeline } from "@/components/ProjectsTimeline"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="w-full min-h-screen  flex flex-col  ">
      <Navbar/>
    <HeroSection/>
      <LampBox/>
      <CoverBlazzingSpeed/>
      <ProjectTimeline />

    </div>
  )
}
