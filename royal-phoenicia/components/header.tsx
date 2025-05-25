"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"



export function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
})
  const navItems = ["Home", "About", "Rooms", "Dining", "Wellness", "Contact"]

  return (
    <header >
      <div className={`container mx-auto  text-bold bg-transparent border border-x-0 ` }>
        <div className="flex items-center justify-center lg:justify-center  ">
        
         
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 py-6 border-none bottom-2 border-blue-200 ">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white font-montserrat font-medium tracking-wide transition-all duration-300 hover-zoom "
              >
                {item}
              </a>
            ))}
          </nav>

       

        
     
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md mt-6 rounded-xl shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col py-6">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="px-8 py-4 text-blue-900 hover:bg-blue-50 transition-colors font-montserrat font-medium hover-zoom"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
             
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
