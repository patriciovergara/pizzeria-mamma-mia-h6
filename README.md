#📘 **Pizzería Mamma Mía (Hito 6)**

🍕 Descripción del proyecto

En este hito implementé el carrito de compras global utilizando React Context API, integré el enrutado mediante React Router, desarrollé la vista de detalle dinámica para cada pizza y optimicé la experiencia visual usando Bootstrap 5, logrando una interfaz más moderna, ordenada y fácil de usar.

El objetivo fue consolidar un flujo de compra completo, manteniendo la arquitectura modular y asegurando una experiencia coherente en todas las vistas.

🔗 Demo en GitHub Pages

👉 **[Ver demo aquí](https://patriciovergara.github.io/pizzeria-mamma-mia-h6/)**

🛠 Tecnologías utilizadas

React + Vite

React Context API

React Router DOM

Bootstrap 5

JavaScript ES6

CSS personalizado

📦 Funcionalidades implementadas
✔ 1. Estado global del carrito con React Context

Creé el archivo:

src/context/CartContext.jsx


Este contexto administra:

cart: lista de pizzas agregadas

addToCart(): suma unidades

removeFromCart(): resta unidades

total: suma total reactiva

useCart(): custom hook para acceder fácilmente al estado

✔ 2. Navbar con total dinámico

El Navbar muestra en tiempo real el total del carrito:

🛒 Total: $xx.xxx


Se actualiza automáticamente según las acciones del usuario.

✔ 3. Cards interactivas

Cada card permite:

Ver ingredientes

Acceder al detalle

Añadir pizzas al carrito

Utilizando el estado global de Context.

✔ 4. Vista de detalle dinámica (/pizza/:id)

Utilicé useParams() para capturar el ID desde la URL.
La vista muestra:

Imagen grande

Nombre

Ingredientes

Precio

Botón "Añadir al carrito"

✔ 5. Carrito completamente funcional

La página Cart.jsx incluye:

Imagen del producto

Cantidad actual

Botones para aumentar/disminuir

Subtotales

Total global

Vista especial cuando el carrito está vacío

✔ 6. Navegación completa con React Router

Configuro todas las rutas principales:

/
register
login
profile
cart
pizza/:id
*


Navbar y Footer se mantienen visibles en toda la aplicación.

✔ 7. Optimización visual con Bootstrap

Para mejorar la experiencia del usuario:

Importé Bootstrap globalmente

Utilicé grillas (container, row, col)

Mejoré el uso de cards, botones y espaciados

Apliqué estilos propios en index.css para pulir detalles

El resultado es una aplicación más limpia, moderna y visualmente agradable.

📁 Estructura del proyecto
src/
  assets/
    img/
  components/
    Navbar.jsx
    Header.jsx
    CardPizza.jsx
    Footer.jsx
  context/
    CartContext.jsx
  pages/
    Home.jsx
    RegisterPage.jsx
    LoginPage.jsx
    Profile.jsx
    Cart.jsx
    Pizza.jsx
    NotFound.jsx
  pizzas.js
  App.jsx
  main.jsx
  index.css

🚀 Cómo ejecutar el proyecto
npm install
npm run dev


Se abrirá en:

http://localhost:5173

📦 Cómo generar la versión para GitHub Pages
npm run build


La carpeta generada es:

/docs


GitHub Pages debe apuntar a esa carpeta desde Settings → Pages.

🎯 Conclusión

En este hito integré un carrito global completamente funcional, rutas dinámicas, manejo de estado centralizado con Context API y una optimización visual mediante Bootstrap.
El resultado es una aplicación más profesional, escalable y coherente en su flujo de navegación y uso.