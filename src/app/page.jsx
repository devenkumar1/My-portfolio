'use client'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/DarkModeToggler"
export default function Home() {
  return (
    <div>
      <ModeToggle/>
      <Button>Click me</Button>
    </div>
  )
}
