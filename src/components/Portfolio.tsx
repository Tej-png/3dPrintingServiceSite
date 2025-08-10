import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';

const projects = [
  {
    title: "Gaming Controller Prototype",
    category: "Prototyping",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop",
    description: "Custom ergonomic gaming controller with haptic feedback integration",
    tech: ["PLA", "Resin", "Electronics"],
    likes: 127
  },
  {
    title: "Architectural Model",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description: "Detailed scale model of modern residential complex",
    tech: ["ABS", "Multi-color", "High Detail"],
    likes: 89
  },
  {
    title: "Custom Jewelry Collection",
    category: "Design",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    description: "Intricate jewelry pieces with personalized engravings",
    tech: ["Resin", "Metal Plating", "Custom"],
    likes: 203
  },
  {
    title: "Drone Parts Assembly",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    description: "Lightweight, durable drone components for racing",
    tech: ["Carbon Fiber", "PETG", "Lightweight"],
    likes: 156
  },
  {
    title: "Medical Training Model",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    description: "Anatomically accurate model for medical education",
    tech: ["TPU", "Biocompatible", "Detailed"],
    likes: 98
  },
  {
    title: "Art Installation Piece",
    category: "Art",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    description: "Large-scale sculptural installation for gallery exhibition",
    tech: ["PLA", "Large Format", "Multi-piece"],
    likes: 234
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the amazing projects we've brought to life through precision 3D printing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative border"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </button>
                </div>
                <span className="absolute top-4 left-4 bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="border border-gray-300 dark:border-gray-700 rounded px-2 py-0.5 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    {project.likes}
                  </div>
                  <button className="text-purple-600 hover:underline text-sm px-2 py-1 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700 text-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}