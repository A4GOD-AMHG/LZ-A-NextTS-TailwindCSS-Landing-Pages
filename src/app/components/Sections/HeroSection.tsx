'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'
import ConsultationModal from '../Modals/ConsultationModal'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section className="relative h-[70vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="parallax-bg" />
                <div className="parallax-overlay" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Asesorías <br className="hidden md:block" />
                            <span className="text-primary">Legales</span> de Vanguardia
                        </h1>
                        <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                            Recibe asesoramiento jurídico personalizado y efectivo, con más de 20 años de experiencia en derecho corporativo y comercial.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-secondary transition-all"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Agenda tu Consulta
                            <FiArrowRight className="text-xl" />
                        </motion.button>
                    </motion.div>
                </div>

                <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </section>
        </>
    )
}
