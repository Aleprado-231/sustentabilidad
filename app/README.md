# CoopMorteros - Apartado de Sustentabilidad

## Descripción

Este proyecto contiene el desarrollo del apartado de Sustentabilidad para CoopMorteros.coop, manteniendo la línea de diseño con hexágonos característicos del logo de la cooperativa.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.tsx          # Barra de navegación fija
│   └── hexagon/
│       ├── Hexagon.tsx         # Componente de hexágono reutilizable
│       └── HexagonPattern.tsx  # Patrón decorativo de hexágonos
├── sections/
│   ├── Hero.tsx                # Sección principal con banner
│   ├── Compromiso.tsx          # Introducción a la sustentabilidad
│   ├── ODS.tsx                 # Objetivos de Desarrollo Sostenible
│   ├── Logros.tsx              # Línea de tiempo de logros
│   ├── Iniciativas.tsx         # Iniciativas solidarias
│   ├── MedioAmbiente.tsx       # Compromiso ambiental
│   ├── Programas.tsx           # Programas comunitarios
│   ├── Noticias.tsx            # Noticias de sustentabilidad
│   └── Footer.tsx              # Pie de página
├── index.css                   # Estilos globales y hexágonos
└── App.tsx                     # Componente principal
```

## Secciones Incluidas

1. **Hero**: Banner principal con estadísticas destacadas
2. **Compromiso**: Introducción al reporte de sustentabilidad
3. **ODS**: Grid de Objetivos de Desarrollo Sostenible con diseño hexagonal
4. **Logros**: Línea de temporal (2022-2026) con hitos importantes
5. **Iniciativas**: Programas solidarios con estadísticas
6. **Medio Ambiente**: Compromiso ambiental y huella de carbono
7. **Programas**: Detalle de programas comunitarios con descargas
8. **Noticias**: Cards de noticias relacionadas
9. **Footer**: Pie de página con enlaces y contacto

## Colores Utilizados (CoopMorteros)

- Amarillo: `#FFD700` (color principal)
- Verde: `#10B981`
- Azul: `#0066CC`
- Rojo: `#EF4444`
- Violeta: `#8B5CF6`
- Naranja: `#F97316`
- Cyan: `#06B6D4`

## Imágenes

Las imágenes se encuentran en `/public/images/`:

- `hero-sustentabilidad.jpg` - Banner principal (parque solar)
- `compromiso-main.jpg` - Imagen de la sección compromiso
- `medioambiente-main.jpg` - Imagen de compromiso ambiental
- `noticia-parque-solar.jpg` - Noticia del parque solar
- `noticia-huella-carbono.jpg` - Noticia de huella de carbono
- `noticia-copa-leche.jpg` - Noticia del programa copa de leche

**Nota**: Estas imágenes son placeholders generadas con IA. Deben ser reemplazadas por imágenes reales de CoopMorteros.

## Integración en el Sitio Principal

### Opción 1: Página Independiente

1. Copiar el contenido de `dist/` al servidor
2. Configurar la ruta `/sustentabilidad` en el servidor web
3. Agregar enlace en el menú principal del sitio

### Opción 2: Integración como Sección

Para integrar como una sección dentro de la página existente:

1. Copiar los archivos CSS de `src/index.css` al CSS principal
2. Importar los componentes de `src/sections/` en la aplicación principal
3. Agregar la ruta en el router existente

### Archivos Necesarios para Producción

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── images/
    ├── hero-sustentabilidad.jpg
    ├── compromiso-main.jpg
    ├── medioambiente-main.jpg
    ├── noticia-parque-solar.jpg
    ├── noticia-huella-carbono.jpg
    └── noticia-copa-leche.jpg
```

### Documentos para Descargar (opcional)

Para que funcionen los botones de descarga, crear carpeta `/public/documents/` con:
- `certificado-huella-carbono.pdf`
- `bases-clubes.pdf`
- `bases-comercios.pdf`
- `bases-merenderos.pdf`

## Personalización

### Cambiar Imágenes

Reemplazar los archivos en `/public/images/` con las imágenes reales de CoopMorteros, manteniendo los mismos nombres de archivo.

### Modificar Contenido

Editar los archivos en `src/sections/` para actualizar:
- Textos
- Estadísticas
- Años de la línea temporal
- Programas e iniciativas

### Agregar Nuevos ODS

Editar `src/sections/ODS.tsx` y agregar nuevos objetivos al array `odsList`.

## Dependencias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (iconos)

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## Notas para el Equipo de IT de CoopMorteros

1. El diseño mantiene la identidad visual de CoopMorteros con los hexágonos del logo
2. La navegación es fija y aparece al hacer scroll
3. Todas las secciones tienen anclas para navegación directa
4. El sitio es completamente responsive
5. Las imágenes actuales son placeholders - reemplazar antes de publicar
6. Los enlaces a documentos (bases y condiciones) están preparados para conectar con el sistema de archivos existente

## Contacto

Para consultas sobre el desarrollo, contactar a IT & Development - COOPMORTEROS.
