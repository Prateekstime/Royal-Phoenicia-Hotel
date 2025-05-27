"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.0 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={` ${
              isVisible ? "opacity-100 " : "opacity-0 "
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-gray-900">GET IN TOUCH</h2>

            <div className="space-y-6 ">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">ADDRESS</h3>
                <p className="text-gray-600">
                  123 Luxury Avenue
                  <br />
                  Downtown District
                  <br />
                  City, State 12345
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">PHONE</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">EMAIL</h3>
                <p className="text-gray-600">info@royalphoenicia.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 " : "opacity-0"
            }`}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-gray-300" />
                <Input placeholder="Last Name" className="border-gray-300" />
              </div>
              <Input placeholder="Email" type="email" className="border-gray-300" />
              <Input placeholder="Phone" type="tel" className="border-gray-300" />
              <Textarea placeholder="Message" rows={5} className="border-gray-300" />
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300">SEND MESSAGE</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
