import { motion } from 'framer-motion'
import { Code2, Palette, Globe2, Cpu } from 'lucide-react'

const skills = [
    { name: 'Frontend Dev', icon: <Code2 size={24} />, description: 'React, Next.js, TypeScript' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, description: 'Tailwind, Framer Motion, Figma' },
    { name: 'Fullstack', icon: <Globe2 size={24} />, description: 'Node.js, PostgreSQL, Prisma' },
    { name: 'Performance', icon: <Cpu size={24} />, description: 'Optimization, SEO, Core Web Vitals' },
]

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-dark-lighter/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Skills</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-dark-lighter border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-slate-400">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
