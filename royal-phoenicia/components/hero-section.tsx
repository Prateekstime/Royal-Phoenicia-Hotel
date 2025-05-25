"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Navbar } from "./navbar"

const images = [
  "https://media-cdn.holidaycheck.com/image/fetch/w_640,h_480,c_fill,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F9000000%2F8220000%2F8212600%2F8212515%2F4aabbddc.jpg",
  'https://news.cgtn.com/news/3d3d514d78417a4d34457a6333566d54/img/7db026104c554535bfd652331ecadfa2/7db026104c554535bfd652331ecadfa2.jpg',
  ]

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(interval)
  }, [])

  return (
    
    <section id="home" className="relative h-screen overflow-hidden">

  {/* Navbar - Keep it above everything else */}
  <div className="absolute top-0 left-0 w-full z-20">
    <Navbar />
  </div>

  {/* Background Image Slideshow */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence>
      <motion.img
        key={images[current]}
        src={images[current]}
        alt="Hotel Image"
        initial={{ opacity: 1, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/30 to-blue-900/40" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
    <motion.div
      initial={{ opacity: 1, y: 50 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 5, delay: 1.5, ease: "easeOut" }}
      className="max-w-5xl"
    >
      <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight">
        Hotel
        <br />
        Royal Phoenicia
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="font-montserrat text-base md:text-lg font-light tracking-[0.2em] uppercase"
      >
        Luxury Experience in the Heart of the City
      </motion.p>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover-zoom z-10"
  >
    <ChevronDown className="w-8 h-8 animate-bounce" />
  </motion.div>
</section>

  )
}
