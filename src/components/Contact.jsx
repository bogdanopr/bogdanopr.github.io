import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark-lighter/50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                            <p className="text-slate-400 mb-10 text-lg">
                                Have a project in mind? Looking for a developer to join your team? Feel free to reach out.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                                        <p className="text-lg">bogdancojocaruoprea@icloud.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Location</p>
                                        <p className="text-lg">Bucharest, Romania / Canary Islands, Spain</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 p-8 bg-dark rounded-2xl border border-white/5"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Hello..." />
                            </div>
                            <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                Send Message <Send size={20} />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
