import { motion } from 'framer-motion';
import { Box, Zap, Rocket, Palette, Cog, Clock } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: "Prototyping",
    description: "Rapid prototyping for your innovative ideas. From concept to reality in 24-48 hours.",
    features: ["Fast turnaround", "Multiple materials", "Precision details"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Bespoke 3D models designed specifically for your needs and vision.",
    features: ["Personalized designs", "Unlimited revisions", "3D visualization"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Production Scale",
    description: "Large-scale 3D printing for businesses and manufacturers.",
    features: ["Bulk discounts", "Quality assurance", "Scalable solutions"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Cog,
    title: "Post-Processing",
    description: "Professional finishing touches to make your prints market-ready.",
    features: ["Surface smoothing", "Painting & coating", "Assembly services"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Rush Orders",
    description: "Need it yesterday? Our express service delivers in record time.",
    features: ["Same-day printing", "Priority queue", "24/7 monitoring"],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Consultation",
    description: "Expert advice on materials, design optimization, and manufacturing.",
    features: ["Design review", "Material selection", "Cost optimization"],
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we've got every step of your 3D printing journey covered
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="text-center pb-4 pt-8 px-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="text-xl mb-2 font-semibold">{service.title}</div>
                  <div className="text-base text-muted-foreground">{service.description}</div>
                </div>
                <div className="px-6 flex-1">
                  <ul className="space-y-2 mb-6 mt-4">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-8 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full border border-blue-600 text-blue-600 rounded py-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}