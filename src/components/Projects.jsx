import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: "E-Commerce Experience",
        description: "A premium shopping experience built with React and Tailwind.",
        tech: ["React", "Tailwind", "Framer Motion"],
        image: "/project1.jpg",
    },
    {
        title: "SaaS Dashboard",
        description: "Cloud management dashboard with real-time analytics.",
        tech: ["TypeScript", "Next.js", "Chart.js"],
        image: "/project2.jpg",
    },
    {
        title: "Travel Platform",
        description: "Interactive booking platform for luxury travelers.",
        tech: ["Node.js", "PostgreSQL", "React"],
        image: "/project3.jpg",
    },
]

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full" />
                    </div>
                    <p className="text-slate-400 max-w-md">
                        A selection of my best work, focusing on performance, design, and user experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-800 aspect-video">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                {/* Image placeholder - in real app would use real images */}
                                <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold text-2xl">
                                    {project.title}
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                    <a href="#" className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-2 mb-3">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-400">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
