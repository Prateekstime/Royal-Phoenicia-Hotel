"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CategorySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    {
      title: "Rooms",
      image: "https://images.trvl-media.com/lodging/9000000/8220000/8212600/8212515/ea84c353.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      link: "https://images.trvl-media.com/lodging/9000000/8220000/8212600/8212515/ea84c353.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fills",
    },
    {
      title: "Pools",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/11/9f/9e/d6/gym-3rd-floor-06-00-20.jpg",
      link: "https://media-cdn.tripadvisor.com/media/photo-s/11/9f/9e/d6/gym-3rd-floor-06-00-20.jpg",
    },
    {
      title: "Dining",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLngg4PG8waP827cd3kTSrpvOpf7NX0jO7OTG_Za882Z1sLmHDOp3BemZtqFPyLoJgrs&usqp=CAU",
      link: "#dining",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container  ">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: index * 0.2, ease: "easeOut" }}
              className="card-hover  overflow-hidden relative h-96 shadow-xl"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 category-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center text-blue-700  hover:text-white hover:text-5xl md:hover:text-5xl transition-all duration-900">
                <h3 className="font-playfair text-3xl md:text-3xl font-light tracking-wide  ">
                  {category.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex justify-center mt-16"
        >
          <Button
            variant="outline"
            className="border-2 rounded-full border-gray-500 text-gray-600 hover:bg-blue-900 hover:text-white button-transition font-montserrat font-semibold tracking-wide text-md px-8 hover:p-16 hover:px-18 m-10 duration-1000"
          >
            <span className="text">Accomodation</span>
            <span className="icon ">
              <ChevronRight size={140} />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
