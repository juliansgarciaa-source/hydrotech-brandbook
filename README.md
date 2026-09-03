# HydroTech — Guía de Marca e Identidad Visual

Página web que documenta el manual de marca de HydroTech: logotipo, construcción,
área de protección, usos incorrectos, color, tipografía y aplicaciones.

## Estructura del proyecto

```
├── index.html          → toda la página (10 secciones)
├── css/
│   └── style.css        → sistema de diseño (colores, tipografía, componentes)
├── js/
│   └── script.js         → comportamiento del menú móvil
├── assets/
│   ├── logo-full.png     → logotipo completo (isotipo + nombre)
│   └── logo-icon.png      → solo el isotipo (favicon, navbar, mockups)
└── README.md
```

## Cómo publicarla en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `hydrotech-brandbook`).
2. Sube estos archivos manteniendo la misma estructura de carpetas.
3. Ve a **Settings → Pages**.
4. En "Source" elige la rama `main` y la carpeta `/root`, luego guarda.
5. Espera 1-2 minutos y GitHub te dará el link público (algo como
   `https://tuusuario.github.io/hydrotech-brandbook/`).

## Librerías usadas (vía CDN, no hace falta instalar nada)

- Bootstrap 5.3 (grid system + componentes)
- Bootstrap Icons
- Google Fonts: Montserrat y Roboto
