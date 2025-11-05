# 📥 GUÍA DE INSTALACIÓN - ProtectGo 2.0

## 🎯 Vista General

Este proyecto optimiza completamente la página web de ProtectGo, manteniendo su identidad visual pero añadiendo funcionalidades modernas y profesionales.

---

## ⚡ INSTALACIÓN RÁPIDA (15 minutos)

### OPCIÓN 1: Usando el código que te proporciono

1. **Descargar el proyecto** de la carpeta `protectgo-2.0`
2. **Instalar dependencias**
3. **Configurar variables de entorno**
4. **Ejecutar en desarrollo**

### OPCIÓN 2: Crear desde cero (recomendado para aprender)

Sigue esta guía paso a paso.

---

## 📋 REQUISITOS PREVIOS

```bash
✅ Node.js 18+ (https://nodejs.org)
✅ Python 3.9+ (https://python.org)
✅ PostgreSQL 14+ (https://postgresql.org) - Opcional, SQLite para desarrollo
✅ Git (https://git-scm.com)
✅ VS Code (recomendado)
```

---

## 🚀 PASO 1: CREAR EL PROYECTO FRONTEND (Next.js)

### 1.1 Crear proyecto Next.js

```bash
# Navegar a tu carpeta de proyectos
cd C:\Users\mate_\OneDrive\Documentos\Proyectos

# Crear proyecto Next.js con TypeScript
npx create-next-app@latest protectgo-frontend --typescript --tailwind --app --use-npm

# Responder a las preguntas:
# ✔ Would you like to use ESLint? › Yes
# ✔ Would you like to use `src/` directory? › Yes
# ✔ Would you like to use App Router? › Yes
# ✔ Would you like to customize the default import alias? › No

cd protectgo-frontend
```

### 1.2 Instalar dependencias adicionales

```bash
npm install framer-motion lucide-react axios react-hook-form zod @hookform/resolvers date-fns react-query @stripe/stripe-js @stripe/react-stripe-js socket.io-client react-hot-toast clsx tailwind-merge swiper
```

```bash
npm install -D @tailwindcss/forms @tailwindcss/typography prettier prettier-plugin-tailwindcss
```

### 1.3 Configurar Tailwind CSS

Reemplaza `tailwind.config.ts` con el que te proporcioné (ya está optimizado con colores de ProtectGo).

### 1.4 Estructura de carpetas

```bash
mkdir -p src/components/landing
mkdir -p src/components/shared
mkdir -p src/components/forms
mkdir -p src/components/dashboard
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/types
mkdir -p public/images
```

---

## 🔧 PASO 2: CREAR EL PROYECTO BACKEND (FastAPI)

### 2.1 Crear carpeta y entorno virtual

```bash
cd ..
mkdir protectgo-backend
cd protectgo-backend

# Crear entorno virtual
python -m venv venv

# Activar (Windows)
venv\Scripts\activate

# Activar (Mac/Linux)
source venv/bin/activate
```

### 2.2 Crear requirements.txt

```bash
# Crear archivo requirements.txt con este contenido:
```

```txt
fastapi==0.109.0
uvicorn[standard]==0.27.0
sqlalchemy==2.0.25
pydantic==2.6.0
pydantic-settings==2.1.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
python-dotenv==1.0.1
alembic==1.13.1
stripe==7.10.0
sendgrid==6.11.0
twilio==8.11.1
celery==5.3.4
redis==5.0.1
boto3==1.34.14
pillow==10.2.0
reportlab==4.0.9
qrcode==7.4.2
```

### 2.3 Instalar dependencias

```bash
pip install -r requirements.txt
```

### 2.4 Estructura de carpetas

```bash
mkdir -p app/models
mkdir -p app/schemas
mkdir -p app/routes
mkdir -p app/services
mkdir -p app/utils
mkdir -p app/middleware
mkdir -p alembic/versions
mkdir -p tests
```

---

## 🎨 PASO 3: COPIAR LOS ARCHIVOS DEL PROYECTO

### Archivos clave que ya te proporcioné:

#### Frontend:
✅ `tailwind.config.ts` - Configuración de colores y estilos
✅ `src/components/landing/Hero.tsx` - Hero section mejorado
✅ `src/components/landing/Services.tsx` - Sección de servicios
✅ Faltan: Testimonials, Coverages, CTA, Footer, Forms, etc.

#### Backend:
✅ Estructura base lista
✅ Modelos y schemas por crear
✅ Rutas de API por crear

---

## ⚙️ PASO 4: CONFIGURAR VARIABLES DE ENTORNO

### Frontend (.env.local)

```bash
# Crear archivo .env.local en la raíz del frontend:
```

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_tu_clave_stripe
NEXT_PUBLIC_SOCKET_URL=http://localhost:8000
```

### Backend (.env)

```bash
# Crear archivo .env en la raíz del backend:
```

```env
# Database
DATABASE_URL=sqlite:///./protectgo.db
# Para PostgreSQL: postgresql://usuario:password@localhost/protectgo

# Security
SECRET_KEY=tu-clave-super-secreta-aqui
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Stripe
STRIPE_SECRET_KEY=sk_test_tu_clave_stripe
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook_secret

# Email (SendGrid)
SENDGRID_API_KEY=tu_sendgrid_api_key
FROM_EMAIL=noreply@protectgoservices.com

# SMS (Twilio)
TWILIO_ACCOUNT_SID=tu_twilio_sid
TWILIO_AUTH_TOKEN=tu_twilio_token
TWILIO_PHONE_NUMBER=+1234567890

# AWS S3 (para documentos)
AWS_ACCESS_KEY_ID=tu_aws_key
AWS_SECRET_ACCESS_KEY=tu_aws_secret
AWS_BUCKET_NAME=protectgo-documents
AWS_REGION=us-east-1

# Redis (para caché)
REDIS_URL=redis://localhost:6379

# CORS
BACKEND_CORS_ORIGINS=["http://localhost:3000","https://protectgoservices.com"]
```

---

## 🚀 PASO 5: EJECUTAR EL PROYECTO

### Terminal 1 - Backend

```bash
cd protectgo-backend
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

uvicorn app.main:app --reload
```

**Debe mostrar:** `Uvicorn running on http://127.0.0.1:8000`

### Terminal 2 - Frontend

```bash
cd protectgo-frontend
npm run dev
```

**Debe mostrar:** `Local: http://localhost:3000`

---

## 🌐 ACCEDER A LA APLICACIÓN

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

---

## 📦 ARCHIVOS PRINCIPALES A CREAR

Te he proporcionado la base. Ahora necesitas:

### Frontend (Componentes faltantes):

```
✅ Hero.tsx (listo)
✅ Services.tsx (listo)
⬜ Coverages.tsx - Sección de coberturas
⬜ Testimonials.tsx - Testimonios de clientes
⬜ CTA.tsx - Call to action
⬜ Footer.tsx - Footer mejorado
⬜ QuoteForm.tsx - Formulario de cotización (3 pasos)
⬜ Navbar.tsx - Navegación responsive
⬜ page.tsx - Página principal que une todo
```

### Backend (Archivos principales):

```
⬜ app/main.py - Aplicación FastAPI
⬜ app/models/client.py - Modelo de clientes
⬜ app/models/policy.py - Modelo de pólizas
⬜ app/models/quote.py - Modelo de cotizaciones
⬜ app/routes/quotes.py - Endpoints de cotización
⬜ app/services/quote_service.py - Lógica de cotización
⬜ app/services/email_service.py - Envío de emails
```

---

## 🎯 PRIORIDADES DE DESARROLLO

### Fase 1 (Semana 1-2): Lo Esencial
1. ✅ Landing page completa y responsive
2. ✅ Sistema de cotización online (formulario + cálculo)
3. ✅ Backend básico con base de datos
4. ✅ Integración frontend-backend

### Fase 2 (Semana 3-4): Panel Cliente
5. ⬜ Autenticación de usuarios
6. ⬜ Dashboard del cliente
7. ⬜ Sistema de descarga de certificados

### Fase 3 (Semana 5-6): Pagos
8. ⬜ Integración con Stripe
9. ⬜ Sistema de pagos recurrentes
10. ⬜ Facturas automáticas

---

## 💡 CONSEJOS IMPORTANTES

1. **Diseño:** Mantén los colores azul (#2563EB) y morado (#7C3AED) de ProtectGo
2. **Imágenes:** Usa imágenes de alta calidad de camiones (Unsplash/Pexels)
3. **Performance:** Optimiza imágenes con Next.js Image
4. **SEO:** Usa metadata adecuada en cada página
5. **Mobile:** Diseña mobile-first

---

## 📞 SIGUIENTE PASO

¿Quieres que continúe creando:
1. Los componentes restantes del frontend?
2. El backend completo con todas las rutas?
3. El sistema de cotización completo?
4. Todo lo anterior?

Dime qué prefieres y continúo con el código completo.
