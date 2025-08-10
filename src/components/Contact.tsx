import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's start your 3D printing journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-0 shadow-2xl bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Start Your Project</h3>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                    <input id="name" placeholder="Your name" className="mt-1 w-full p-2 rounded border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input id="email" type="email" placeholder="your@email.com" className="mt-1 w-full p-2 rounded border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="project" className="block mb-1 font-medium">Project Type</label>
                  <input id="project" placeholder="Prototyping, Custom Design, etc." className="mt-1 w-full p-2 rounded border" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Project Details</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project, timeline, and requirements..."
                    className="mt-1 w-full p-2 rounded border min-h-32"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3 rounded text-white flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Maker Street, Tech District",
                subinfo: "Innovation City, IC 12345",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 3D-PRINT",
                subinfo: "Mon-Fri 9AM-6PM PST",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@print3dpro.com",
                subinfo: "We reply within 2 hours",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Clock,
                title: "Rush Orders",
                info: "24/7 Express Service",
                subinfo: "Same-day printing available",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg mb-1">{contact.title}</h3>
                        <p className="text-foreground mb-1">{contact.info}</p>
                        <p className="text-sm text-muted-foreground">{contact.subinfo}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}