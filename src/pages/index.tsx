import { motion } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navigation />
      
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 border-t border-border bg-muted/30"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0"
            >
              Print3D Pro
            </motion.div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-foreground">Privacy</motion.a>
              <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-foreground">Terms</motion.a>
              <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-foreground">Support</motion.a>
            </div>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-blue-600 to-purple-600 mt-8"
          />
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            © 2025 Print3D Pro. Bringing your ideas to life, one layer at a time.
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}