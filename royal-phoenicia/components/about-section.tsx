"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="font-playfair text-4xl md:text-5xl mb-8 text-gray-800">About Royal Phoenicia</h2>
            <div className="space-y-6 text-gray-600 font-montserrat text-lg leading-relaxed">
              <p>
                Located in the heart of the city, Hotel Royal Phoenicia offers a perfect blend of luxury, comfort, and
                exceptional service. Our commitment to excellence ensures that every guest experiences the finest
                hospitality during their stay with us.
              </p>
              <p>
                From our elegantly appointed rooms to our world-class dining options and wellness facilities, every
                aspect of Royal Phoenicia is designed to provide an unforgettable experience. We invite you to discover
                the perfect balance of relaxation and sophistication that defines our hotel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
