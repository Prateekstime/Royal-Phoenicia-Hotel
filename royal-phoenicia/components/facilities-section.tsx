"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useRef } from "react"

export function FacilitiesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const facilities = [
    {
      title: "Fitness Center",
      image: "/placeholder.svg?height=500&width=700&text=Modern+Fitness+Center",
    },
    {
      title: "Dining",
      image: "/placeholder.svg?height=500&width=700&text=Fine+Dining+Restaurant",
    },
    {
      title: "Wellness Center & Spa",
      image: "/placeholder.svg?height=500&width=700&text=Luxury+Spa+Center",
    },
    {
      title: "Conference Rooms",
      image: "/placeholder.svg?height=500&width=700&text=Modern+Conference+Room",
    },
    {
      title: "Infinity Pool",
      image: "/placeholder.svg?height=500&width=700&text=Infinity+Pool+View",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={scrollContainerRef} className="horizontal-scroll">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="card-hover rounded-2xl overflow-hidden relative h-96 w-[350px] md:w-[400px] shadow-xl"
            >
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-playfair text-3xl md:text-4xl font-light text-center px-6 leading-tight">
                  {facility.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
