"use client"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"


const images = [
  "https://media-cdn.holidaycheck.com/image/fetch/w_640,h_480,c_fill,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F9000000%2F8220000%2F8212600%2F8212515%2F4aabbddc.jpg",
  "https://news.cgtn.com/news/3d3d514d78417a4d34457a6333566d54/img/7db026104c554535bfd652331ecadfa2/7db026104c554535bfd652331ecadfa2.jpg",
];


export function WellnessSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} id="wellness" className="py-40 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col justify-center">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gray-600 mb-8 leading-relaxed">
            The stay at Wellness & pool Hotel <br />
            RoyalPhoenicia means enjoying every moment.
            <br />
            Relax. Find inspiration. Be fascinated.
          </h2>

          {/* Button with hover effect */}
          <div className="p-2 mt-20">
            <div className="relative group inline-block">
              <button className="border p-4 text-gray-700 border-gray-700 px-8 pl-10 rounded-full transition-all duration-700">
                Hotel
              </button>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-1000 ease-in-out">
          <div className=" bg-blue-900 text-white rounded-full flex items-center justify-center">
            <ChevronRight size={120} />
          </div>
        </div>
      </div>
    </div>
        </motion.div>

             <div ref={ref} className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Center Text */}
     
      {/* Animated Slideshow */}
      <AnimatePresence initial={false} mode="wait">
  {/* Animated Image Transition */}
  <motion.img
    key={images[current]}
    src={images[current]}
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className="absolute top-0 left-0 w-full h-full object-cover"
    alt="Slideshow image"
  />

  {/* Centered Text Overlay */}
  <div>
    <div className="absolute inset-0 flex items-center justify-center z-20  border border-gray-400 ">
         <div className="p-4 border border-gray-600  ">
           <div className="bg-white bg-opacity-80 backdrop-blur-sm  text-center shadow-lg border border-black ">
              <div className="m-4 border border-gray-400 py-6 px-4">
                 <h1 className="text-sm md:text-sm font-light text-gray-800 py-1">Hotel Views</h1>
                  <h1 className="text-sm md:text-sm font-light text-gray-800 py-1">Incredible Luxury</h1>
                  <h1 className="text-sm md:text-sm font-light text-gray-800 py-1">Diverse Dining Options</h1>
                  <h1 className="text-sm md:text-sm font-light text-gray-800 py-1">Multiple Swimming Pools</h1>
                  <h1 className="text-sm md:text-sm font-light text-gray-800 py-1">Family-Friendly Amenities</h1>
       
              </div>  
            </div>
        </div>
    </div>
  </div>
 
</AnimatePresence>


      {/* Bottom orange wave animation */}
      <motion.div
         initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full h-32 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f97316"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </div>

       
      </div>
    </section>
  )
}