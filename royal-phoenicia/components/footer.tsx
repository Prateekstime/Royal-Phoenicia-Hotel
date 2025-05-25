"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const footerLinks = [
    {
      title: "Rooms",
      links: ["Deluxe Room", "Executive Suite", "Presidential Suite", "Family Room", "Wellness Room"],
    },
    {
      title: "More about rooms",
      links: ["Amenities", "Services", "Booking Policy", "Cancellation", "Special Offers"],
    },
  ]

  return (
    <footer ref={ref} className="footer-gradient text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <h3 className="font-playfair text-2xl mb-8 text-blue-100">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-blue-200 hover:text-white transition-colors text-base font-montserrat hover-zoom"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="footer-wobble"
          >
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mr-4 shadow-lg">
                <span className="text-blue-800 font-playfair text-2xl font-bold">RP</span>
              </div>
              <div>
                <span className="font-playfair text-xl text-blue-100 block">Wellness & Pools</span>
                <span className="font-playfair text-xl text-white">Hotel Royal Phoenicia</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-blue-200">
                <MapPin size={18} className="mr-3 text-blue-300" />
                <div>
                  <p>123 Luxury Avenue</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center text-blue-200">
                <Mail size={18} className="mr-3 text-blue-300" />
                <p>info@royalphoenicia.com</p>
              </div>
              <div className="flex items-center text-blue-200">
                <Phone size={18} className="mr-3 text-blue-300" />
                <p>+971 4 123 4567</p>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors hover-zoom">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors hover-zoom">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors hover-zoom">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="border-t border-blue-400/30 pt-8 text-center text-blue-200 font-montserrat"
        >
          <p>&copy; {new Date().getFullYear()} Hotel Royal Phoenicia. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
