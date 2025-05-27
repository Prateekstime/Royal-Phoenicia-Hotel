"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export function GastronomySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

    const facilities = [
    {
      title: "Checkin Image",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    },
    {
      title: "Dining img",
      image: "https://www.victoria-house.com/wp-content/uploads/2020/03/5no_0195.jpg",
    },
    {
      title: "Bedroom Image",
      image: "https://plus.unsplash.com/premium_photo-1722686486118-64c4e3649f93?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhJTIwdHJlYXRtZW50fGVufDB8fDB8fHww",
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-6xl font-playfair text-center mb-20 text-gray-800 leading-relaxed"
        >
          Exceptional gastronomy
          <br />
          served in elegant spaces.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-hide">
         <div className="scrollbar-hide vertical-scroll flex flex-col items-center gap-6 overflow-y-auto max-h-[400px] snap-y snap-mandatory scroll-smooth">
  {facilities.map((facility, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="card-hover snap-start flex-shrink-0 overflow-hidden relative h-96 w-[350px] md:w-[400px] shadow-xl snap-y snap-mandatory scroll-smooth scrollbar-hide"
    >
      <img
        src={facility.image || "/placeholder.svg"}
        alt={facility.title}
        className="w-full h-full object-cover snap-y snap-mandatory scroll-smooth scrollbar-hide"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div> */}
    </motion.div>
  ))}
</div>



          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-playfair mb-6 text-gray-800">About Us</h3>
              <p className="text-gray-600 font-montserrat text-base leading-relaxed">
                At Royal Phoenicia, we believe that dining is an art form. Our culinary team creates exceptional
                gastronomic experiences using the finest ingredients and innovative techniques. Each dish is crafted
                with passion and presented with elegance, ensuring that every meal becomes a memorable occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Restaurant", "POOL", "ROOMS"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className="text-center p-6 border-2 border-gray-200 rounded-xl hover-zoom bg-white shadow-lg"
                >
                  <h4 className="font-playfair text-xl mb-3 text-gray-800">{item}</h4>
                  <p className="text-gray-500 text-sm font-montserrat leading-relaxed">
                    Experience the finest {item.toLowerCase()} services at Royal Phoenicia
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
