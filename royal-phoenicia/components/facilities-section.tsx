"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronRight } from "lucide-react"

export function FacilitiesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const facilities = [
    {
      title: "Fitness Center",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    },
    {
      title: "Dining",
      image: "https://www.victoria-house.com/wp-content/uploads/2020/03/5no_0195.jpg",
    },
    {
      title: "Wellness Center & Spa",
      image: "https://plus.unsplash.com/premium_photo-1722686486118-64c4e3649f93?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhJTIwdHJlYXRtZW50fGVufDB8fDB8fHww",
    }
  ]

  return (
    <section ref={ref} className="py-20 w-full bg-white">
  <div className="container ">
    <div className="relative">
      <div ref={scrollContainerRef} className="horizontal-scroll relative flex">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            className="card-hover hover:md:-[450px] hover:-[450px] overflow-hidden relative h-96 w-[full] md:w-[400px] shadow-xl flex-shrink-0"
          >
            <img
              src={facility.image || "/placeholder.svg"}
              alt={facility.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white font-playfair text-3xl md:text-4xl font-light text-center leading-tight">
                {facility.title}
              </h3>
            </div>
          </motion.div>
        ))}


        <div className="ml-2 absolute left-1/2 -translate-x-1/2 top-3/4 -translate-y-1/2 z-10">
           <div className="relative group inline-block">
              <button className="bg-white bg-opacity-30 hover:opacity-0  text-white px-2 py-3 rounded-full shadow-lg border border-white  transition">
                spa & wellness
              </button>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-1000 ease-in-out">
          <div className=" bg-blue-900 text-white rounded-full flex items-center justify-center">
            <ChevronRight size={140} />
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
