# 🐾 Pup Paw Shop - Ecommerce Website

**Pup Paw Shop** es un sitio web de comercio electrónico de productos varios para perros y perras.

Está diseñado como parte de las asignaciones calificativas del curso de **Programing the Internet** del **Master en Software Engineering** de la **Broward International University**.

Este proyecto evolucionará cada semana, incorporando nuevas funciones y mejoras según las asignaciones del curso.

## ⚙️ Instalación y configuración
Para ejecutar este proyecto localmente:

```bash
# Clonar el repositorio
git clone git@github.com:your-username/puppawshop-frontend.git

#Instalar dependencias
npm i

# Ejecutar en local
npm run dev
```

---

# Semana 2
- **Asignación:** Diseño del sitio web
- **Objetivo:** Implementar un diseño de comercio electrónico responsivo

## 🛠️ Tecnologías
- **HTML5**: Marcado semántico
- **Tailwind CSS**: Estilo adaptable que prioriza la utilidad

## 📌 Funciones implementadas
- [x] Estilo en CSS con Tailwind 
- [x] Diseño responsivo según breakpoint de Tailwind CSS
- [x] Página principal con todas las secciones

## 🖥️ Diseño General

![PaginaCompleta](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/FullPage-1920x1080.png?raw=true)

### Barras de navegación & Banner

![Navbars y banner](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/navbars-banner.png?raw=true)

La primera barra de navegación contiene:
- A la izquierda: El logo y nombre de la plataforma *Pup Paw Shop*
- Al centro un buscador de productos
- A la derecha: los botones de 'Mi cuenta', con opciones de 'Registrate' e 'Inicia sesión', y 'Mi carrito', que despliega una sección a la derecha que proximamente tendria el detalle de productos que el usuario haya colocado en el carrito.  

![navbar1](https://github.com/user-attachments/assets/f5bf475e-a01d-4935-b436-5cd3750d4489)

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

![navbar2](https://github.com/user-attachments/assets/1094fb35-d3aa-41aa-9138-a4e1b293e58f)

**Categorías**

![menu-categorias](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem2/screenshots/categorias-hover-dorpdownmenu.png?raw=true)

**Banner**

Esta es una sección dedicada a banners de ofertas y anuncions relevantes. Teniendo un diseño de mensaje de mercado de la tienda y un botón que a futuro redireccionará a la página de todos los productos.  

![banner](https://github.com/user-attachments/assets/08514fc4-82cb-48a6-885f-2c7d303b9f62)

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

![micarrito-md](https://github.com/user-attachments/assets/e51b9d85-8a51-45eb-b53e-1df7623ea11e)

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

# Semana 3

Esta semana se introducen mejoras significativas, incluyendo la migración de una configuración simple de HTML y Tailwind CSS a una aplicación robusta de Next.js con integración de TypeScript. Esta transición aprovecha frameworks y bibliotecas modernas para mejorar la eficiencia del desarrollo y la escalabilidad de las aplicaciones.

Se mantiene el diseño responsivo de la página web, tal cómo se presentó en el apartao de la Semana 2.

- **Asignación:** Desarrollo de un validador de formularios dinámico del lado del cliente. Caso: Registro de nuevo Usuario del Sistema.
- **Objetivo:** Aplicar los conocimientos avanzados en JavaScript, TypeScript y el uso de un framework para construir una aplicación web que realice validaciones de formularios de manera eficiente y dinámica.

## 🛠️ Tecnologías
- **Next.js:** Framework basado en React que permite la renderización del lado del servidor y la generación de sitios web estáticos, mejorando el rendimiento y el SEO.
- **TypeScript:** Proporciona tipado estático, lo que ayuda a detectar errores durante el desarrollo y mejora la calidad del código.
- **Tailwind CSS:** Framework CSS orientado a la utilidad que permite un desarrollo rápido de UI con un estilo consistente.
- **ShadCN UI:** Colección de componentes de UI accesibles y personalizables, creados con Radix UI y Tailwind CSS, que facilita la creación de interfaces de usuario consistentes y visualmente atractivas.
- **React Hook Form:** Libreria para gestionar el estado y la validación de formularios en aplicaciones React, conocida por su rendimiento y facilidad de uso.
- **Zod:** Libreria de declaración y validación de esquemas basada en TypeScript que garantiza una validación fiable de los datos de los formularios.

## 📌 Implementación de la validación de formularios
Esta semana, se ha creado un formulario de registro y se ha mejorado utilizando los componentes de interfaz de usuario ShadCN en combinación con React Hook Form y Zod para una validación robusta del lado del cliente.

**Formulario de registro de nuevo usuario**
El formulario de registro recopila información del nuevo usuario. La validación se implementa para garantizar la integridad de los datos y proporcionar retroalimentación inmediata a los usuarios.

**Reglas clave de validación**
- **Nombres:** Campo requerido de tipo string, acepta caractéres especiales, con una longitud máxima de 60 caractéres.
- **Apellidos:** Campo requerido de tipo string, acepta caractéres especiales, con una longitud máxima de 60 caractéres.
- **Email:** Campo requerido de tipo email. Se valida que el formato sea el esperado par aun correo electrónico, e.g. xxxx@yy.zz
- **Teléfono:** Campo númerico requerido . Sólo acepta números y tiene una longitud máxima de 10.
- **Contraseña:** Campo requerido tipo string. Se valida que la contraseña tenga al menos 8 caractéres de longitud, un número, un caractér especial, una mayúscula y una minúscula.
- **Confirmar contraseña:** Campo requerido de tipo string. Se valida que coincida con la contraseña ingresada en el campo anterior.
- **Check de aceptar términos y condiciones:** Campo requerido. Se valida que el usuario lo marque.
- **Check para suscribirse al newsletter:** Campo opcional, marcado por defecto. El usuario puedo desmarcarlo y marcarlo, no impide el registro.

Cada campo y regla de validación le presenta al usuario de manera dinámimica su mensaje de error correspondiente.

**Formulario de Registro**

![formsignup](https://github.com/meibolramirez/puppawshop-frontend/blob/features-sem3/public/images/screenshots/forms/signup-page-full.png?raw=true)

**Demo de validaciones**

https://github.com/user-attachments/assets/27549c5a-14fd-404f-a580-5681780519b3

---

## 👩‍💻 Autoría
Mabel Ramírez \
Contacto: ramirezarias.mabel@gmail.com

## Licencia
Este proyecto es sólo para fines educativos.
