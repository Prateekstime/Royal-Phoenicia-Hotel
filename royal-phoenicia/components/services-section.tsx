"use client"

import { useState, useEffect, useRef } from "react"
import { Utensils, Wifi, Car, Dumbbell } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Utensils,
      title: "FINE DINING",
      description: "World-class cuisine prepared by renowned chefs",
    },
    {
      icon: Wifi,
      title: "FREE WIFI",
      description: "High-speed internet throughout the property",
    },
    {
      icon: Car,
      title: "VALET PARKING",
      description: "Complimentary valet service for all guests",
    },
    {
      icon: Dumbbell,
      title: "FITNESS CENTER",
      description: "State-of-the-art equipment and personal training",
    },
  ]

  return (
    <section ref={sectionRef} id="facilities" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">FACILITIES & SERVICES</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience our comprehensive range of amenities designed to make your stay exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <service.icon className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="font-serif text-xl font-light mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
