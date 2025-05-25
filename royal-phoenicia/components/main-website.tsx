"use client"

import { useState, useEffect } from "react"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { RoomsSection } from "./rooms-section"
import { ServicesSection } from "./services-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"

export function MainWebsite() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
