"use client"

import { motion } from "framer-motion"

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="text-6xl font-playfair text-white mb-6 logo-animation">RP</div>
        <motion.div
          className="h-px bg-white mx-auto line-animation"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
    </div>
  )
}
