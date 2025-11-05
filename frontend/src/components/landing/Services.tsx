'use client';

import { motion } from 'framer-motion';
import { Truck, Zap, Users, Handshake, Shield, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Truck,
    title: 'Especialistas en transporte',
    description: 'Entendemos tu negocio, tus riesgos y tus necesidades específicas.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Activación inmediata',
    description: 'Tu seguro activo en cuestión de horas, sin papeleos eternos.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Asesoría personalizada',
    description: 'Te ayudamos a encontrar la póliza ideal y contratar solo lo que necesitas.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Handshake,
    title: 'Alianzas con líderes',
    description: 'Conectamos tu necesidad con las mejores aseguradoras del país.',
    color: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { label: 'Clientes satisfechos', value: '2,000+', icon: Users },
  { label: 'Años de experiencia', value: '10+', icon: Shield },
  { label: 'Tiempo de activación', value: '2h', icon: Clock },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Nuestro Respaldo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Más que seguros,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              respaldo completo
            </span>{' '}
            para conductores
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos soluciones integrales diseñadas específicamente para camioneros y operadores de transporte.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-primary rounded-3xl p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
