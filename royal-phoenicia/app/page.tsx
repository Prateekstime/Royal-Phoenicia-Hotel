"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WellnessSection } from "@/components/wellness-section"
import { CategorySection } from "@/components/category-section"
import { StayPackages } from "@/components/stay-packages"
import { FacilitiesSection } from "@/components/facilities-section"
import { GastronomySection } from "@/components/gastronomy-section"
import { AboutSection } from "@/components/about-section"
import { CorporateEvents } from "@/components/corporate-events"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  



  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-visible">
      
        <>
         
         
          <HeroSection />
          <WellnessSection />
          <CategorySection />
          <StayPackages />
          <FacilitiesSection />
          <GastronomySection />
          <AboutSection />
          <CorporateEvents />
          <Footer />
          <ScrollToTop />
        </>
    
    </main>
  )
}
