import { motion } from 'framer-motion'
import { Rocket, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                        Bogdan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Oprea</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Fullstack Developer
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors flex items-center gap-2"
                        >
                            View Projects <Rocket size={20} />
                        </motion.a>
                        <div className="flex items-center gap-4 ml-2">
                            <a href="https://github.com/bogdanwsh" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/bogdancojocaruoprea" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                                <Linkedin size={24} />
                            </a>
                            <a href="#contact" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-white/50 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
