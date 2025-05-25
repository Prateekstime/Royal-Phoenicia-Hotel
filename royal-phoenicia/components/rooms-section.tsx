"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function RoomsSection() {
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

  const rooms = [
    {
      title: "DELUXE ROOM",
      price: "$250",
      image: "/placeholder.svg?height=400&width=600&text=Deluxe+Room",
      description: "Elegant comfort with city views",
    },
    {
      title: "EXECUTIVE SUITE",
      price: "$450",
      image: "/placeholder.svg?height=400&width=600&text=Executive+Suite",
      description: "Spacious luxury with premium amenities",
    },
    {
      title: "PRESIDENTIAL SUITE",
      price: "$850",
      image: "/placeholder.svg?height=400&width=600&text=Presidential+Suite",
      description: "Ultimate luxury and sophistication",
    },
  ]

  return (
    <section ref={sectionRef} id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 text-gray-900">ROOMS & SUITES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of beautifully appointed rooms and suites, each designed to provide the ultimate in
            comfort and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img src={room.image || "/placeholder.svg"} alt={room.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 text-sm font-medium">
                  {room.price}/NIGHT
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-light mb-2 text-gray-900">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  VIEW DETAILS
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
