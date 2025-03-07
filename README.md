# 🐾 Pup Paw Shop - Ecommerce Website

**Pup Paw Shop** es un sitio web de comercio electrónico diseñado como parte del curso **Programing the Internet**. Este proyecto evolucionará cada semana, incorporando nuevas funciones y mejoras según las tareas del curso.

## ⚙️ Instalación y configuración
Para ejecutar este proyecto localmente:

```bash
# Clonar el repositorio
git clone git@github.com:your-username/puppawshop-frontend.git

# Navegar a la carpeta del proyecto
cd ./src

# Abrir index.html en el navegador
```


---

# Semana 2
- **Asignación:** Diseño del sitio web
- **Objetivo:** Implementar un diseño de comercio electrónico responsivo

## 🛠️ Creado con
- **HTML5**: Marcado semántico
- **Tailwind CSS**: Estilo adaptable que prioriza la utilidad

## 📌 Funciones implementadas
- [x] Estilo en CSS con Tailwind 
- [x] Diseño responsivo según breakpoint de Tailwind CSS
- [x] Página principal con todas las secciones

## 🖥️ Diseño General

![PaginaCompleta](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/FullPage-1920x1080.png?raw=true)

### Barras de navegación & Banner

La primera barra de navegación contiene:
- A la izquierda: El logo y nombre de la plataforma *Pup Paw Shop*
- Al centro un buscador de productos
- A la derecha: los botones de 'Mi cuenta', con opciones de 'Registrate' e 'Inicia sesión', y 'Mi carrito', que despliega una sección a la derecha que proximamente tendria el detalle de productos que el usuario haya colocado en el carrito.  

![Navbars y banner](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/navbars-banner.png?raw=true)

**Mi Cuenta**

![MiCuenta](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/micuenta-click.png?raw=true)

| Registrate  | Inicia Sesión |
|---          |---            | 
| ![MiCuenta-Registrate](https://github.com/user-attachments/assets/a8c07fcf-73e1-4a65-b1c0-2b5fa7f9fb84) | ![MiCuenta-InicaSesion](https://github.com/user-attachments/assets/0a343903-9f99-4dd2-952e-37d81e88a4f0) |

**Mi Carrito**

![Micarrito-click](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/micarrito-click.png?raw=true)

**Navbar secundario**

Esta segunda barra de navegación cuenta con:
- A la izquierda con el menú de las categorías de productos, que se activa al pasar el mouse sobre ésta.
- A la derecha, con los accesos a las páginas de todos los 'Productos' y de todas las 'Ofertas' disponibles.

**Categorías**

![menu-categorias](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/categorias-hover-dorpdownmenu.png?raw=true)

**Banner**

Esta es una sección dedicada a banners de ofertas y anuncions relevantes. Teniendo un diseño de mensaje de mercado de la tienda y un botón que a futuro redireccionará a la página de todos los productos.  

![banner]()

### Grid productos principales por categoría

Este apartado de la aplicación web contiene tres secciones pertenecientes a las categorías principales de productos, con cuadrículas de los principales productos con sus colores y tamaños disponibles, además de los botones de agregar al carrito y ver más detalles del produto. 

**Categoría: Accesorios**

![seccion-accesorios](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/seccion-accesorios.png?raw=true)

**Categoría: Moda**

![seccion-moda](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/seccion-modas.png?raw=true)

**Categoría: Higiene**

![seccion-higine](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/seccion-higiene.png?raw=true)

### Banner de suscripción

Esta sección contiene otro banner, ésta vez de suscripción, con texto alentativo a que el cliente se suscriba al newsletter de la tienda, pudiendo colocar su email en un campo  de texto y con un botón para completar la acción de suscribirse.  

![banner-suscripcion](https://github.com/user-attachments/assets/7617183f-6b8a-4637-a456-4ac6c49e4d62)


### Footer

El footer contiene:
- A la izquiera, el logo y nombre de la tienda, con los iconos de las redes sociales para que al cliente dar click los redirija al perfil de la tienda en la red social seleccionada.
- Al centro, enlaces a las páginas de interés sobre la tienda, de su historia, sus términos de privacidad y condiciones.
- A la derecha, información relevante de contacto de la tienda, dirección física, horarios y número de teléfono.

![footer](https://github.com/user-attachments/assets/d9a6a194-406f-4d52-89b5-2895273a3df4)

### Paleta de colores

La página se diseñó siguiendo la siguiente paleta de colores:

![pallete](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/ColorPallete.png?raw=true)

## 💻 Diseño Responsivo

**Dispositivos pequeños**

| Breakpoint  | Ancho mínimo |
|---          |---            | 
| 'sm' (small) | 40rem (640px) |

El diseño responde al tamaño de la pantalla:
- En este punto se esconden los textos del nombre de tienda, dejando solo el logo, y los textos de 'Mi cuenta' y de 'Mi Carrito', dejando solos los íconos.
- Además, se cambia la cantidad de las cuadrículas de los productos a mostrar, dejando solo una por línea.
- Adicional a esto, las cuadrículasd de información en el footer se centran.
- El banner es solo texto y el botón, sin la imagen del perrito.
- La sección a la derecha de 'Mi Carrito' no se despliega en este tamaño, sino que redirecciona al usuario a otra página con el detalle de producto agregados al carrito.

![small-devices](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/FullPage-SmallDevices.png?raw=true)

**Dispositivos medianos**

| Breakpoint  | Ancho mínimo |
|---          |---            | 
| 'md' (medianos) | 48rem (768px) |

El diseño responde al tamaño de la pantalla:
- En este punto aún se esconden los textos del nombre de tienda, dejando solo el logo, y los textos de 'Mi cuenta' y de 'Mi Carrito', dejando solos los íconos.
- En este tamaño, la sección a la derecha de 'Mi Carrito' sí se despliega.
- Se cambia la cantidad de las cuadrículas de los productos a mostrar, dejando dos por línea.
- Las cuadrículasd de información en el footer se justifican.
- El banner es solo texto y el botón, sin la imagen del perrito.

![medium-devices](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/FullPage-MediumDevices.png?raw=true)

**Dispositivos grandes**

| Breakpoint  | Ancho mínimo |
|---          |---            | 
| 'lg' (large) | 64rem (1024px) |

El diseño responde al tamaño de la pantalla:
- En este punto ya se muestran los textos del nombre de tienda con  el logo, y los textos de 'Mi cuenta' y de 'Mi Carrito', y sus íconos.
- En este tamaño, la sección a la derecha de 'Mi Carrito' se sigue despliegando.
- Se mantiene la cantidad de las cuadrículas de los productos a mostrar, dos por línea.
- A partir de este punto, el banner muestra además uan imagen de un perrito.

![large-devices](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/FullPage-LargeDevices.png?raw=true)

**Dispositivos extra grandes**

| Breakpoint  | Ancho mínimo |
|---          |---            | 
| 'xl' (xtra large) | 80rem (1280px) |

El diseño responde al tamaño de la pantalla:

- Se cambia la cantidad de las cuadrículas de los productos a mostrar, siendo, en este punto, 4 por línea.

Este diseño se mantiene para pantallas más grandes.

![xlarge-devices](https://github.com/user-attachments/assets/0bcf4a6b-cd95-4d42-ac9b-fed822c2ef84)


---

## 👩‍💻 Autoría
Mabel Ramírez \
Contacto: ramirezarias.mabel@gmail.com

## Licencia
Este proyecto es sólo para fines educativos.
