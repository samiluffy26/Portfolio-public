# Portfolio Fullstack Developer - Dark Edition

Portfolio profesional artístico y dinámico para desarrollador fullstack y Project Manager, construido con React, TypeScript, Tailwind CSS y Motion (Framer Motion).

## 🚀 Características

- 🌌 **Tema oscuro profesional** con fondo negro y efectos visuales impactantes
- ✨ **Animaciones extravagantes** - partículas, grid animado, efectos 3D, transiciones fluidas
- 🎨 **Diseño artístico** con gradientes personalizados (Verde #10B981 y Morado #6D28D9)
- 🎠 **Carrusel de proyectos** con 11 proyectos e imágenes reales
- 📸 **Foto personal** integrada con efectos de brillo y badges flotantes
- 🎭 **Efectos visuales** - código matrix, terminal animado, partículas conectadas
- 📱 Totalmente responsive (mobile-first)
- ♿ Accesible (ARIA labels, contraste de color, navegación por teclado)
- 🎭 Respeta `prefers-reduced-motion`
- ⚡ Optimizado para rendimiento
- 🎯 SEO-friendly

## 🛠️ Tech Stack

### Core
- **React 18+** - Biblioteca de UI
- **TypeScript** - Type safety y mejor DX
- **Tailwind CSS v4** - Utilidades CSS con tokens personalizados
- **Motion (Framer Motion)** - Animaciones fluidas y controladas

### UI Components
- **shadcn/ui** - Componentes accesibles y customizables
- **Lucide React** - Iconos modernos
- **Sonner** - Toast notifications elegantes

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 🎨 Paleta de Colores - Tema Oscuro

El proyecto utiliza un sistema de tokens CSS para mantener consistencia en el tema oscuro:

```css
--color-brand-primary: #10B981      /* Verde neón - Acciones principales */
--color-brand-primary-600: #059669  /* Verde oscuro - Hover states */
--color-brand-primary-400: #34D399  /* Verde claro - Highlights */
--color-brand-accent: #6D28D9       /* Morado - Acentos */
--color-brand-accent-600: #5B21B6   /* Morado oscuro - Hover states */
--color-brand-accent-400: #8B5CF6   /* Morado claro - Highlights */
--color-ink: #000000                /* Negro - Fondo principal */
--color-bg: #000000                 /* Negro - Fondo */
--color-text: #FFFFFF               /* Blanco - Texto principal */
--color-text-muted: #A0A0A0         /* Gris - Texto secundario */
--color-grid: rgba(16, 185, 129, 0.1) /* Verde transparente - Grid */
```

### Gradientes principales
```css
/* Gradiente principal */
background: linear-gradient(135deg, #6D28D9 0%, #10B981 100%);

/* Gradiente alternativo */
background: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 50%, #10B981 100%);
```

## 📁 Estructura del Proyecto

```
/
├── App.tsx                      # Componente principal
├── components/
│   ├── Header.tsx              # Navegación con animaciones y logo rotatorio
│   ├── Hero.tsx                # Hero épico con foto, código animado, badges
│   ├── About.tsx               # Sección sobre mí con cards 3D
│   ├── Skills.tsx              # Tech stack con badges explosivos
│   ├── ProjectsCarousel.tsx    # Carrusel de 11 proyectos con imágenes
│   ├── Contact.tsx             # Formulario glassmorphism
│   ├── Footer.tsx              # Footer minimalista
│   ├── GridBackground.tsx      # Grid animado de fondo
│   ├── ParticlesBackground.tsx # Partículas conectadas
│   └── ui/                     # shadcn/ui components
├── styles/
│   └── globals.css             # Estilos oscuros y tokens
└── README.md
```

## 🎯 Componentes Principales

### Header
- Logo animado rotatorio con efecto de pulso
- Navegación con underline animado
- Menú mobile con glassmorphism
- Backdrop blur oscuro profesional

### Hero
- **Layout de 2 columnas** - texto + foto personal
- **Código animado** estilo terminal en la esquina
- **Efecto matrix** de fondo con caracteres cayendo
- **Foto circular** con anillo de brillo pulsante
- **Badges flotantes** animados (⚡ Fast, 🎯 Precise)
- **Tags de tecnología** con animación spring
- **CTAs** con efectos de shimmer y sombras de neón

### GridBackground
- Grid SVG animado con líneas verdes
- Orbs de gradiente flotando y morphing
- 3 capas de animación independiente
- Mix-blend-mode para efectos artísticos

### ParticlesBackground
- 50 partículas conectadas por líneas
- Movimiento fluido con física realista
- Conexiones que aparecen/desaparecen según distancia
- Canvas optimizado para performance

### About
- Cards con efecto 3D rotateY
- Iconos rotatorios en hover
- Glassmorphism con bordes animados
- Glow effects en gradiente

### Skills
- **22 badges** con animaciones spring individuales
- **Favoritas destacadas** con gradiente triple y shimmer
- Efecto de shake en hover para favoritas
- Grid de fondo con líneas animadas
- Rotación y escala en hover

### ProjectsCarousel
- **Carrusel completo** con 11 proyectos
- **Imágenes reales** de cada proyecto
- Navegación con flechas animadas
- Pagination dots interactivos
- **Overlay en hover** con botones GitHub/Live
- **Glassmorphism** en las cards
- Transiciones fluidas entre proyectos
- Badge "Destacado" para proyectos principales

### Contact
- Formulario con glassmorphism
- Inputs con focus glow effect
- Links sociales con iconos rotatorios
- Backdrop gradient animado
- Toast notifications

## 🔧 Personalización

### Cambiar colores

Edita `/styles/globals.css`:

```css
:root {
  --color-brand-primary: #TU_COLOR;
  --color-brand-accent: #TU_COLOR;
  /* ... */
}
```

### Actualizar contenido

1. **Sobre mí**: Edita `components/About.tsx`
2. **Skills**: Modifica los arrays en `components/Skills.tsx`
3. **Proyectos**: Actualiza el array `projects` en `components/Projects.tsx`
4. **Links sociales**: Edita `socialLinks` en `components/Contact.tsx`

### Agregar nuevos proyectos

En `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción breve",
    technologies: ["React", "Node.js", "MongoDB"],
    featured: true, // Opcional: marca como destacado
    githubUrl: "https://github.com/...",
    liveUrl: "https://..." // Opcional
  },
  // ... más proyectos
];
```

## 🎨 Animaciones Extravagantes

### Principios de animación
- Duración: 200-1000ms para efectos dramáticos
- Easing: `spring`, `easeInOut` para movimientos naturales
- Stagger: 30-100ms para efectos cascada
- `prefers-reduced-motion` respetado automáticamente por Motion
- GPU acceleration con `transform` y `opacity`

### Catálogo completo de animaciones

#### Hero Section
- **Matrix rain** - Código cayendo estilo Matrix
- **Terminal typing** - Código escribiéndose con cursor parpadeante
- **Foto con pulso** - Anillo de brillo que pulsa continuamente
- **Badges flotantes** - Float animation infinita con delays
- **Split-text gradient** - Cada letra con gradiente animado
- **Tech tags** - Entrada con rotate y spring physics

#### Backgrounds
- **Grid SVG** - Aparición gradual con fade
- **Morphing orbs** - 3 orbs que se mueven, escalan y rotan infinitamente
- **Partículas conectadas** - 50 partículas con líneas dinámicas

#### About
- **Cards 3D** - rotateY en entrada, elevación en hover
- **Iconos spin** - Rotación 360° en hover
- **Border animation** - Gradiente que rota alrededor del borde
- **Glow pulse** - Efecto de brillo que aparece/desaparece

#### Skills
- **Badge explosion** - Entrada con scale, rotate y spring
- **Shimmer effect** - Barra de luz que atraviesa los badges favoritos
- **Shake animation** - Sacudida en hover de favoritos
- **Opacity pulse** - Texto que pulsa infinitamente

#### ProjectsCarousel
- **Slide transition** - Exit left, enter right con blur
- **Image hover** - Scale 1.02 + overlay fade
- **Icon hover** - Scale 1.1 + rotate 5°/-5°
- **Dots morph** - Width animation en dot activo
- **Navigation pulse** - Botones con shadow pulsante

#### Contact
- **Form reveal** - Stagger de inputs desde izquierda
- **Social icons** - Rotate 360° en hover
- **Input focus** - Glow effect en border
- **Button shimmer** - Efecto de brillo al enviar

#### Footer
- **Logo rotate** - Rotación 360° en hover
- **Links underline** - Línea que crece desde izquierda
- **Gradient flow** - Gradiente que se mueve

### Ejemplos de código

```tsx
// Badge con shimmer effect
<motion.div
  whileHover={{
    scale: 1.15,
    rotate: [0, -10, 10, -10, 0],
    boxShadow: "0 10px 40px rgba(16, 185, 129, 0.5)"
  }}
>
  <Badge>React</Badge>
</motion.div>

// Partículas conectadas
particles.forEach((p1, i) => {
  particles.slice(i + 1).forEach((p2) => {
    const distance = calculateDistance(p1, p2);
    if (distance < 150) {
      drawConnection(p1, p2, distance);
    }
  });
});
```

## 📱 Responsive Breakpoints

```
sm: 640px   - Móvil grande
md: 768px   - Tablet
lg: 1024px  - Desktop
xl: 1280px  - Desktop grande
```

## ✅ Checklist QA

- [ ] **Responsive**: Probado en sm/md/lg/xl
- [ ] **Animaciones**: Respeta `prefers-reduced-motion`
- [ ] **Lighthouse Scores**:
  - Performance: > 75
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 90
- [ ] **Imágenes**: Lazy loading implementado
- [ ] **Formulario**: Labels y ARIA correctos
- [ ] **Navegación**: Teclado funcional
- [ ] **Contraste**: AA compliance

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conecta tu repositorio en [vercel.com](https://vercel.com) para deploy automático.

### Netlify

```bash
# Build
npm run build

# Deploy la carpeta dist/
netlify deploy --prod --dir=dist
```

## 🔍 SEO & Performance

### Optimizaciones incluidas
- Lazy loading de imágenes
- Animaciones optimizadas con `will-change` solo durante animación
- Scroll observers con debounce
- Code splitting automático
- CSS minificado

### Mejoras recomendadas
- [ ] Agregar meta tags (OG, Twitter Card)
- [ ] Implementar sitemap.xml
- [ ] Agregar robots.txt
- [ ] Optimizar imágenes con WebP
- [ ] Implementar service worker para PWA

## 🧪 Testing

### Lighthouse
```bash
# Generar reporte
npm run build
npx serve dist
# Abrir Chrome DevTools > Lighthouse
```

### Accesibilidad
- Usa [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- Prueba navegación completa con teclado (Tab, Enter, Esc)
- Verifica con lector de pantalla

## 🤝 Decisiones Técnicas

### ¿Por qué Tailwind CSS?
- Desarrollo rápido con utilidades
- Sistema de tokens consistente
- PurgeCSS automático = bundle pequeño
- Fácil mantenimiento

### ¿Por qué Motion (Framer Motion)?
- API declarativa y simple
- Animaciones fluidas 60fps
- Respeta `prefers-reduced-motion` automáticamente
- Excelente para animaciones complejas

### ¿Por qué TypeScript?
- Type safety previene errores
- Mejor DX con autocompletado
- Refactoring más seguro
- Documentación implícita

## 📝 Notas

### Assets faltantes
Este proyecto usa:
- **Iconos**: Lucide React (no requiere assets)
- **Imágenes**: Placeholders SVG generados por código
- Para reemplazar con imágenes reales: Agrega imágenes a `/public/images/` y actualiza las rutas

### Formulario de contacto
Actualmente el formulario muestra un toast de éxito. Para implementar envío real:

1. **EmailJS**: Servicio gratuito para emails
2. **Formspree**: API para formularios
3. **Backend propio**: Node.js + Nodemailer

Ejemplo con EmailJS:
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY');
    toast.success('¡Mensaje enviado!');
  } catch (error) {
    toast.error('Error al enviar mensaje');
  }
};
```

## 📄 Licencia

MIT License - Libre para uso personal y comercial

## 👨‍💻 Autor

Desarrollado como portfolio profesional para demostrar habilidades fullstack en:
- React/Next.js
- TypeScript
- Node.js
- .NET
- MongoDB/SQL
- Y más...

---

**¿Preguntas?** Abre un issue o contacta directamente.

**¿Te gustó el proyecto?** Dale una ⭐ en GitHub
