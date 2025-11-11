'use client';

import { motion } from 'framer-motion';
import { FileText, FileCheck, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const services = [
  {
    icon: FileText,
    title: 'Pólizas Comerciales',
    description: 'Protege tu actividad económica con coberturas especializadas para empresas y vehículos comerciales.',
    image: '/images/polizas-comerciales.jpg',
  },
  {
    icon: FileCheck,
    title: 'Permisos & Regulaciones',
    description: 'Te ayudamos con el proceso de permisos esenciales como USDOT, MC Number, IFTA, entre otros.',
    image: '/images/permisos.jpg',
  },
  {
    icon: Users,
    title: 'Asesoría & Revisión',
    description: 'Recibe apoyo experto en la revisión de documentos y coberturas. Más claridad, menos riesgos.',
    image: '/images/asesoria.jpg',
  },
];

export default function AdditionalServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
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
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicios diseñados para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              respaldarte
            </span>{' '}
            en cada paso
          </h2>
          <p className="text-xl text-gray-600">
            Más que seguros, soluciones integrales para tu día a día.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas ayuda para elegir el servicio adecuado?
          </p>
          
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Habla con un experto
          </a>
        </motion.div>
      </div>
    </section>
  );
}