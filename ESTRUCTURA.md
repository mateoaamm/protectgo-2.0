# 🚚 ProtectGo 2.0 - Estructura del Proyecto

```
protectgo-2.0/
│
├── 📚 DOCUMENTACIÓN
│   ├── README.md                    ← Documento principal
│   ├── INSTALACION.md               ← Guía de instalación
│   ├── DEPLOYMENT.md                ← Guía de despliegue
│   └── API_DOCS.md                  ← Documentación de API
│
├── 🎨 FRONTEND (Next.js)
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── src/
│   │   ├── app/                     ← App Router (Next.js 14)
│   │   │   ├── (landing)/          ← Páginas públicas
│   │   │   │   ├── page.tsx        ← Home (página actual mejorada)
│   │   │   │   ├── cotizacion/     ← Nueva: cotización online
│   │   │   │   ├── servicios/      ← Servicios
│   │   │   │   ├── nosotros/       ← Sobre nosotros
│   │   │   │   ├── blog/           ← Blog nuevo
│   │   │   │   └── contacto/       ← Contacto
│   │   │   ├── (auth)/             ← Autenticación
│   │   │   │   ├── login/
│   │   │   │   └── registro/
│   │   │   ├── (dashboard)/        ← Panel del cliente
│   │   │   │   ├── panel/
│   │   │   │   ├── polizas/
│   │   │   │   ├── pagos/
│   │   │   │   ├── documentos/
│   │   │   │   └── perfil/
│   │   │   └── (admin)/            ← Panel administrativo
│   │   │       ├── dashboard/
│   │   │       ├── clientes/
│   │   │       ├── cotizaciones/
│   │   │       ├── polizas/
│   │   │       └── reportes/
│   │   ├── components/              ← Componentes reutilizables
│   │   │   ├── landing/            ← Componentes de landing
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Services.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── Coverages.tsx
│   │   │   │   ├── CTA.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── shared/             ← Componentes compartidos
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Modal.tsx
│   │   │   ├── forms/              ← Formularios
│   │   │   │   ├── QuoteForm.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── PaymentForm.tsx
│   │   │   └── dashboard/          ← Componentes del panel
│   │   ├── lib/                    ← Utilidades
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   └── utils.ts
│   │   ├── hooks/                  ← Custom hooks
│   │   ├── types/                  ← TypeScript types
│   │   └── styles/                 ← Estilos globales
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── 🔧 BACKEND (FastAPI)
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                 ← Aplicación principal
│   │   ├── config.py               ← Configuración
│   │   ├── database.py             ← Base de datos
│   │   ├── models/                 ← Modelos de BD
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── client.py
│   │   │   ├── policy.py
│   │   │   ├── quote.py
│   │   │   ├── payment.py
│   │   │   └── document.py
│   │   ├── schemas/                ← Validación Pydantic
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── client.py
│   │   │   ├── policy.py
│   │   │   ├── quote.py
│   │   │   └── payment.py
│   │   ├── routes/                 ← Endpoints API
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── clients.py
│   │   │   ├── policies.py
│   │   │   ├── quotes.py
│   │   │   ├── payments.py
│   │   │   ├── documents.py
│   │   │   └── admin.py
│   │   ├── services/               ← Lógica de negocio
│   │   │   ├── __init__.py
│   │   │   ├── auth_service.py
│   │   │   ├── quote_service.py
│   │   │   ├── policy_service.py
│   │   │   ├── payment_service.py
│   │   │   ├── email_service.py
│   │   │   └── pdf_service.py
│   │   ├── utils/                  ← Utilidades
│   │   │   ├── __init__.py
│   │   │   ├── security.py
│   │   │   ├── validators.py
│   │   │   └── helpers.py
│   │   └── middleware/             ← Middleware
│   │       ├── __init__.py
│   │       └── error_handler.py
│   ├── alembic/                    ← Migraciones
│   ├── tests/                      ← Tests
│   ├── requirements.txt
│   ├── .env.example
│   └── Dockerfile
│
├── 🗄️ DATABASE
│   ├── migrations/
│   └── seeds/                      ← Datos iniciales
│
├── 🐳 DOCKER
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   └── .dockerignore
│
└── 📊 SCRIPTS
    ├── setup.sh                    ← Setup inicial
    ├── deploy.sh                   ← Despliegue
    └── backup.sh                   ← Backup de BD
```

## 🎨 Diseño Visual

### Colores (manteniendo identidad actual):
- **Primary**: #2563EB (Azul ProtectGo)
- **Secondary**: #7C3AED (Morado/Púrpura)
- **Accent**: #F59E0B (Naranja para CTAs)
- **Dark**: #1E293B
- **Light**: #F8FAFC

### Tipografía:
- **Headings**: Inter Bold
- **Body**: Inter Regular
- **Numbers**: Roboto Mono

### Mejoras Visuales:
✅ Animaciones suaves (Framer Motion)
✅ Micro-interacciones
✅ Skeleton loaders
✅ Transiciones fluidas
✅ Glassmorphism en cards
✅ Gradientes modernos
✅ Iconos animados (Lucide React)

## 🚀 Funcionalidades Nuevas

### 1. Sistema de Cotización Inteligente
- Formulario multi-step (3 pasos)
- Cálculo automático en tiempo real
- Comparación con múltiples aseguradoras
- Guardado de progreso
- Envío por email

### 2. Panel del Cliente
- Dashboard con métricas
- Gestión de pólizas
- Descarga de certificados
- Historial de pagos
- Chat con asesor

### 3. Sistema de Pagos
- Stripe integration
- Pagos recurrentes
- Facturas automáticas
- Recordatorios

### 4. Chat en Vivo
- Socket.io
- Respuestas automáticas
- Transferencia a humano
- Historial de conversaciones

### 5. Blog y Recursos
- CMS integrado
- SEO optimizado
- Categorías
- Búsqueda avanzada

## 📱 Responsive Design
- Mobile-first approach
- Diseño adaptativo
- Touch-friendly
- PWA ready

## ⚡ Performance
- Next.js 14 con App Router
- Server Components
- Image optimization
- Code splitting
- Caché inteligente
- CDN integration

## 🔒 Seguridad
- JWT tokens
- Rate limiting
- CORS configurado
- SQL injection prevention
- XSS protection
- HTTPS only
