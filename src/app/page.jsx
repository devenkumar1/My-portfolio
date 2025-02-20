'use client'

import { CoverBlazzingSpeed } from "@/components/CoverBlazzingSpeed"
import HeroSection from "@/components/HeroSection"
import { LampBox } from "@/components/LampBox"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-zinc-500 scrollbar-thin scrollbar-track-zinc-300">
      <Navbar/>
<HeroSection/>
      
      <LampBox/>
      <CoverBlazzingSpeed/>

    </div>
  )
}
