import { motion } from 'motion/react';
// import { Button } from "./ui/button";
import { Play, Zap, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950"></div>
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3d opacity-20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full opacity-30"
      ></motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Print Your
            <br />
            <span className="text-foreground">Future</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Transform your wildest ideas into reality with cutting-edge 3D printing technology. 
            Fast, precise, and absolutely mind-blowing results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button>click</button>
              {/* <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                <Zap className="mr-2 h-5 w-5" />
                Start Creating
              </Button> */}
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button>click</button>
              {/* <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button> */}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: "500+", label: "Projects Printed" },
            { number: "48h", label: "Fastest Turnaround" },
            { number: "99.9%", label: "Precision Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}