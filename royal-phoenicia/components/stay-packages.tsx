"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from "./ui/button"
import { ChevronRight, } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'; // or free-light if using Pro



export function StayPackages() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const packages = [
    {
      title: "Royal Weekend Escape Package",
      description: "From BHD 250 / Per person / 3 Night",
      image: "https://www.shutterstock.com/image-photo/couple-enjoying-wellness-weekend-spa-600nw-420980662.jpg",
      
    },
    {
      title: "Family Fun Staycation",
      description: "From BHD 150 / 4 person / 2 Night",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HJPsfEULsP1Q1fCBYcMEqhvinpUOhOgrYw&s",
     
    },
    {
      title: "Family Fun Staycation",
      description: "From BHD 150 / 4 person / 2 Night",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7KHBOCUBxuLgMJrpbz6u2z1ZLI6OtCVe2Q&s",
     
    },

  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto ">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-playfair text-center mb-16 text-gray-800"
        >
          Stay packages
        </motion.h2>

        <div className="relative">
          <div>
            <div>
               <div ref={scrollContainerRef} className="horizontal-scroll">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="card-hover relative  overflow-hidden group cursor-pointer w-[600px] md:w-[500px] shadow-xl"
              >
                <div className="aspect-w-4 aspect-h-4">
                 
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 p-8 text-white">
                   <p className="mb-60 mx-44">All season</p>
                  <h3 className="text-2xl font-playfair mb-2 font-light">{pkg.title}</h3>
                  <p className="mb-4 text-sm font-montserrat opacity-90 tracking-wide">{pkg.description}</p>
                   <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 0.8, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="flex justify-center gap-4"
                      >
                        <Button
                          variant="outline"
                          className="border-2 rounded-full border-gray-500 text-gray-600  hover:text-black button-transition font-montserrat font-semibold tracking-wide text-md px-8 hover:p-8 duration-1000 mb-6"
                        >  <span className="icon ">
                            <ChevronRight size={80} /> 
                            </span>
                          <span className="text">More</span>
                         
                        </Button>
                        <Button
                          variant="outline"
                          className="border border-white rounded-full bg-white text-gray-600  hover:text-black button-transition font-montserrat font-semibold tracking-wide text-md px-8 hover:p-8 duration-1000 mb-6"
                        >
                          <span className="icon ">
                            <FontAwesomeIcon className="text-gray-600 hover:bg-black" icon={"function"} />
                          </span>
                          <span className="text">Booking</span>
                          
                        </Button>
                    </motion.div>
                </div>
                </div>
               
              </motion.div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
