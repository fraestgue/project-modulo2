# GAMEHYPE

## [Prueba la App!](https://game-hype.netlify.app/)

![App Logo](/src/assets/logo1.png)

## Description

GAMEHYPE es un proyecto de módulo 2 en nuestra sexta semana de Bootcamp llevado a cabo por Pablo Sánchez y Francisco
Estepa, estudiantes de webdevelopment en Ironhack. Es una App de
videojuegos en la que podemos encontrar información de las
principales plataformas, de las principales plataformas retro, y un
apartado de venta de juegos. Para obtener la información que
arrojamos en pantalla hemos usado una
<a href="https://rawg.io/apidocs">API</a> externa y JSON_server
local. Toda la App ha sido desarrollada con herramientas de React,
JavaScript, CSS y las bibliotecas de estilos
<a href="https://nostalgic-css.github.io/NES.css/#">Ness</a>,
<a href="https://react-bootstrap.netlify.app/">Bootstrap</a> y
<a href="https://www.davidhu.io/react-spinners/">
REACT SPINNERS by David Hu

#### [Client Repo here](https://github.com/fraestgue/project-modulo2)

#### [Server Repo here](https://github.com/fraestgue/modulo2server/blob/main/server.js)

## Technologies, Libraries & APIs used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, React, axios, Bootstrap, etc.
- HTML
- JavaScript
- CSS
- React
- axios

- Librerias:
    - #### [NES.css] (https://nostalgic-css.github.io/NES.css/#)
    - #### [Bootstrap] (https://react-bootstrap.netlify.app/)
    - #### [REACT SPINNERS by David Hu] (https://www.davidhu.io/react-spinners/)

## Backlog Functionalities

- Posibilidad de añadir un boton de compra en el que se resten las cantidades disponibles y se añada a una cesta.
- Añadir cartas específicas en los juegos que tengan ventas disponibles.
- Añadir usuario y log in para hacer la compra/venta.

# Client Structure

## User Stories

**NOTE -** List here all the actions a user can do in the app. Example:

- **404** - Cuando el usuario va a una página que no existe ve que no puede seguir navegando y se le da la opción de volver atrás
- **500** - Cuando algo falla debido a problemas internos igualmente se le informa que puede volver a intentarlo en un corto período de tiempo
- **homepage** - En la página principal el usuario puede ver las opciones disponibles en la web. Desde buscar todos lo juegos disponibles por nombre, entrar a cada plataforma, plataforma retro o la sección de juegos en venta. También se aprecia un carousel donde de forma aleatoria te muestra cinco juegos, y podemos ir a sus detalles.
- **events list** - 
    - Searchbar: Podemos buscar entre todos los juegos disponibles en la web, haciendo un filtrado por nombre. Mientras busca y nos da los rsultados nos muestra un spinner
    - Navbar: Tenemos un dropdown donde de forma rápida podemos acceder a las tres secciones principales de la web
    - Salesform: Podemos poner un juego a la venta, dandole su estado, precio, nombre de vendedor, entre los juegos que hay disponibles en la web.
    - EditarVenta: Dentro de cada juego en venta, podremos editar sus valores, a la vez que eliminarlo.
    - GameDetailsPage: Dentro de los detalles del juego, tenemos la opción de abrir el collapse para ver la descripción del juego. Al final podremos ver si hay ventas disponibles de ese juego, o si por el contrario no las hubiera.

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)

| Path                | Page          | Components        | Behavior                                                      |
| ------------------- | ------------- | ----------------- | ------------------------------------------------------------- |
| `/`                 | Home          |                   | Home page                                                     |
| `/signup`           | Signup        |                   | Signup form, link to login, navigate to homepage after signup |
| `/login`            | Login         |                   | Login form, link to signup, navigate to homepage after login  |
| `/profile`          | Profile       | EditProfile       | Navigate to homepage after logout, expire session             |
| `/games/list`       | GameList      | AddGame, GameCard | Shows all films on backlog                                    |
| `/games/edit`       | GamesEdit     |                   | Shows all games on backlog                                    |
| `/games/favourites` | FavouriteList | GameCard          | Shows all games on backlog                                    |

## Other Components

- Navbar
- Footer

## Links

### Collaborators
- Fran Estepa
[Github](https://github.com/fraestgue)
[Linkedin](https://www.linkedin.com/in/francisco-estepa-guerra-400417163/)

-Pablo Sanchez
[Github](https://github.com/PabloSanchezCamara)
[Linkedin](https://www.linkedin.com/in/pablo-sanchez-camara-b143892b4/)

### Project

[Repository Link Client](https://github.com/fraestgue/project-modulo2)

[Repository Link Server](https://github.com/fraestgue/modulo2server/blob/main/server.js)

[Deploy Link](https://game-hype.netlify.app/)

### Excalidraw

[Link](https://excalidraw.com/#json=DUK8iYyh_iC9USCW0xwNu,F2yriPEAfDA5N5nRXMxIqg)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1YvOv6LuQWPMx6dTJjLq3FJRZkD_5auRBuORS2cd7pPc/edit#slide=id.g2be6dd33bb5_0_29)
