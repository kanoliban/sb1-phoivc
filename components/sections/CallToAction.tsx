'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-16 bg-[#0A5C99] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Begin Your Professional Care Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of medical-grade nail care provided by registered nurses. Your health and comfort are our top priorities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              className="bg-white text-[#0A5C99] hover:bg-[#E6F3FF] transition-colors duration-300 flex items-center w-48"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A5C99] transition-colors duration-300 flex items-center w-48"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A5C99] transition-colors duration-300 flex items-center w-48"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}