'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/truck-hero.jpg"
          alt="Camión en carretera"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Más de 2,000 camioneros protegidos</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Seguros para camiones y{' '}
            <span className="text-accent-400">respaldo experto</span>{' '}
            para tu operación
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
          >
            Asesoría personalizada, pólizas comerciales, y gestión de permisos para que puedas
            concentrarte en lo que importa: seguir en ruta y hacer crecer tu negocio.
          </motion.p>

          {/* Features Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Activación en 2 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white">
              <Truck className="w-4 h-4" />
              <span className="text-sm font-medium">Todas las coberturas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Sin papeleo eterno</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/cotizacion"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Cotiza en 3 minutos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200"
            >
              Ver servicios
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-8 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm">+2,000 clientes satisfechos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-sm">4.9/5 estrellas</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
    </section>
  );
}
