"use client"

import { motion } from "framer-motion"
import { Users, Award, ThumbsUp, Clock } from "lucide-react"

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Meszzy Design?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional design solutions with a focus on quality, creativity, and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">85+</h3>
            <p className="text-gray-600">Satisfied Customers</p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <ThumbsUp className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
