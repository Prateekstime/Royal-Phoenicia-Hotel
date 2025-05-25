"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = ["Home", "About", "Rooms", "Dining", "Facilities", "Contact"]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 fade-in
        ${scrolled ? "bg-black/90 backdrop-blur-sm py-4 shadow-lg" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair font-bold text-primary">RP</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <a key={i} href="#" className="text-white hover:text-primary transition-colors">
                {item}
              </a>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-2xl font-playfair font-bold text-primary">RP</div>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item, i) => (
                    <a key={i} href="#" className="text-xl font-medium hover:text-primary transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
