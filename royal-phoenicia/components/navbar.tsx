"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"

import { Menu, X, MenuIcon, ChevronRight,Stars, Star } from "lucide-react"




export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 

  return (
    <header
      className={`bg-transparent  transition-all duration-500 px-8 `}>
        <div className="container mx-auto px-6 flex items-center justify-between ">
            <div className="flex justify-items-center items-center ">
        
                <div className="hidden lg:block ">
                    <Button
                    className={`font-montserrat font-semibold tracking-wide rounded-3xl bg-blue-900 ${
                        isScrolled
                        ? "bg-blue-900 text-white hover:bg-blue-900"
                        : ""
                    }`}
                    >
                        <MenuIcon size={20} />
                    <span className="text">Menu</span>
                    
                    </Button>
                </div>
                
                   
                
         

          
          <button
            className="lg:hidden hover-zoom"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? "text-blue-800" : "text-white"} />
            ) : (
              <Menu size={28} className={isScrolled ? "text-blue-800" : "text-white"} />
            )}
          </button>
        </div>
        <div className="flex gap-x-10 items-center text-white">
            <h1>2022</h1>
            <h1>
              Royal Phoenicia
            </h1>
            <h1 className=" text-white flex bg-transparent size-20 items-center"><Star /><Star /><Star /><Star /><Star /></h1>
                
        </div>
        <div className="flex items-center">
         

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button
              className={` font-montserrat font-semibold tracking-wide rounded-3xl p-4 bg-blue-900 ${
                isScrolled
                  ? "bg-blue-900 text-white hover:bg-blue-900"
                  : ""
              }`}
            >
              <span className="text">BOOK NOW</span>
              <span className="icon">
               <ChevronRight size={20} />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden hover-zoom"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? "text-blue-800" : "text-white"} />
            ) : (
              <Menu size={28} className={isScrolled ? "text-blue-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
         
        
            <nav className="flex flex-col py-6">
             
              <div className="px-8 pt-4">
                <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 button-transition font-montserrat font-semibold">
                  <span className="text">BOOK NOW</span>
                  <span className="icon">
                 
                  </span>
                </Button>
              </div>
            </nav>
         
        )}
      </div>
      <div className={` ${isScrolled  ? '': ''}`}>
        <Header  />
      </div>
      
     
    </header>
  )
}
