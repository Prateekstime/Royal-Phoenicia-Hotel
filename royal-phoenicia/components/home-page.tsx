"use client"

import { useEffect, useState } from "react"
import { Navigation } from "./navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 fade-in-delay-1">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 slide-up-delay-1">
            Royal Phoenicia
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 slide-up-delay-2">
            Experience luxury and comfort in the heart of the city
          </p>
          <div className="slide-up-delay-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
              Book Now
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 fade-in-delay-3">
          <ChevronDown className="animate-bounce w-8 h-8 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-primary">About Our Hotel</h2>
              <p className="text-gray-300 mb-4">
                Royal Phoenicia stands as a beacon of luxury and comfort in the heart of the city. With our commitment
                to excellence, we provide an unparalleled experience for our guests.
              </p>
              <p className="text-gray-300 mb-6">
                From our exquisite dining options to our state-of-the-art facilities, every aspect of Royal Phoenicia is
                designed to exceed your expectations.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=600&width=800" alt="Hotel Exterior" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-zinc-900">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Our Luxurious Rooms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Deluxe Room", price: "$250" },
              { title: "Executive Suite", price: "$450" },
              { title: "Presidential Suite", price: "$850" },
            ].map((room, index) => (
              <motion.div
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={`/placeholder.svg?height=300&width=500&text=Room${index + 1}`}
                    alt={room.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground px-4 py-2">
                    {room.price} / night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2">{room.title}</h3>
                  <p className="text-gray-400 mb-4">
                    Luxurious accommodations with premium amenities and exceptional service.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-3xl font-playfair font-bold text-primary">RP</div>
              <p className="mt-4 text-gray-400 max-w-md">
                Royal Phoenicia Hotel offers luxury accommodations with world-class amenities and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
                <ul className="space-y-2">
                  {["Home", "About", "Rooms", "Dining", "Spa", "Contact"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-primary">Contact</h4>
                <address className="text-gray-400 not-italic">
                  <p>123 Luxury Avenue</p>
                  <p>City Center, 10001</p>
                  <p className="mt-2">info@royalphoenicia.com</p>
                  <p>+1 (555) 123-4567</p>
                </address>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-lg mb-4 text-primary">Newsletter</h4>
                <p className="text-gray-400 mb-4">Subscribe to receive special offers and updates.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-900 border border-zinc-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Royal Phoenicia Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
