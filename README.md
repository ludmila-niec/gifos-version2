# :sparkles: :dizzy: Gifos 2.0 :dizzy: :sparkles: [Live Demo](https://gifos-version2.vercel.app/)
Inspirándome en el segundo proyecto realizado en la carrera Desarrollo Full Stack en Acamica, donde desarrollé una plataforma integrada con la API de Giphy para buscar gifs, me propuse el desafío de hacer una nueva versión con las nuevas tecnologías aprendidas. En esta ocasión la aplicación esta realizada con React.js y styled-components.

## SCREENSHOTS
Light Theme
![demo-light](/assets/screenshot/demo-light.png)

Dark Theme
![demo-dark](/assets/screenshot/demo-dark.png)

## DEMO
_Demo Cambio de Theme_
\
![change-theme-example](/assets/screenshot/change-theme.gif)
\
\
\
_Demo Busqueda_
\
![search-example](/assets/screenshot/search-demo.gif)
\
\
\
_Demo Agregar Gif a Favoritos_
\
![add-fav-example](/assets/screenshot/add-fav.gif)


## FUNCIONALIDADES
- 2 themes intercambiables: Light theme y dark theme.
- Barra de búsqueda de gifs.
- Autocompletado en base a la búsqueda.
- Seccion con los gifs que son tendencia.
- Sección Favoritos.

## NUEVO EN ESTA VERSION
- Aplicación realizada con React.js.
- Styling con styled-components.
- UI completamente rediseñada.
- Diseño responsive.
- Animaciones con gsap.
- Nueva Sección de Favoritos. Los gif favoritos se guardan en LocalStorage.
- Diseño de interacciones al agregar un gif a favoritos y al eliminarlo.
- Cargar más gif en la sección de tendencias y más resultados en las búsquedas.
- Navegación con el teclado.
- Accesibilidad.

---

## INSTRUCCIONES
**Para clonar y correr la aplicación vas a necesitar Node.js y Git.**
```bash

git clone https://github.com/ludmila-niec/gifos-version2.git

```
**Abrir el repositorio**
```bash

cd /gifos-react

```

**Instalar las dependencias**
```bash

npm install

```
\
**Vas a necesitar una API Key para realizar las peticiones a Giphy.**
Podes registrarte y generar una, dirigiendote primero a este [Link](https://giphy.com/join)

Una vez registrade te dirigis a este [Link](https://developers.giphy.com/) que te lleva la sección developers y haces click en "Get started".

Por último vas a hacer click en "Create an app" y seguis los pasos para completar el proceso.
\
\
\
**Crear un archivo .env en el directorio principal.**

Con la API Key obtenida vas a crear una variable de entorno

`REACT_APP_API_KEY = "<tu api key>"`

**Correr la aplicación**
```bash

npm start

```
Abrir [http://localhost:3000](http://localhost:3000) para ver en el browser.

--- 

## TECNOLOGIAS UTILIZADAS
:sparkles: React.js
\
:sparkles: Styled-components
\
:sparkles: GSAP
