"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CorporateEvents() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=800&width=1600&text=Corporate+Events+Venue"
          alt="Corporate Events Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl max-w-2xl text-center"
          >
            <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-gray-800">Corporate Events</h2>
            <p className="text-gray-600 font-montserrat mb-8 text-lg leading-relaxed">
              Host your next corporate event, conference, or business meeting in our sophisticated venues. Our dedicated
              team will ensure every detail is perfect, from state-of-the-art technology to exquisite catering.
            </p>
            <Button className="bg-blue-800 text-white hover:bg-blue-700 button-transition font-montserrat font-semibold tracking-wide text-lg px-8 py-6">
              <span className="text">INQUIRE NOW</span>
              <span className="icon">
                <ChevronRight size={22} />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
