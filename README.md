<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://storydots.app/">
    <img src="https://storydots.app/static/media/storydots-logo.9bbcdeaa.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">StoryDots Challenge</h3>

  <p align="center">
    Frontend de mi solución para el Coding Challenge Full Stack Developer de StoryDots!
    <br />
    <a href="https://github.com/gastonpedraza08/backend-challenge-storydots"><strong>Ir al backend »</strong></a>
    <br />
    <br />
    <a href="https://flamboyant-hoover-a11ae3.netlify.app/">Live Demo</a>
    <!-- ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/gastonpedraza08/frontend-challenge-storydots/blob/master/screen.jpg)

Este proyecto es parte del Coding Challenge Full Fullstack Developer de StoryDots!
La consigna se trataba de crear un simple ecommerce que permitiera visualizar los productos y además administrarlos desde un panel de administración.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Estas son las tecnologías con las cuales decidi construir el frontend.

* [React.js](https://reactjs.org/)
* [@mui/material](https://mui.com/)
* [axios](https://github.com/axios/axios)
* [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
* [redux](https://es.redux.js.org/)
* [sweetalert2](https://sweetalert2.github.io/)
* [ckeditor](https://ckeditor.com/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Para correr este proyecto es necesario crear un archivo .env en el directorio raíz y pegar el contenido que esta dentro de .env.example.

NOTA: cambiar el valor de la variable NODE_ENV por production (NODE_ENV=production) para poder probar la api desplegada en heroku. Si lo que quieres es probar la aplicación completa de manera local (frontend y backend) tienes que correr primero el backend que se encuentra en este [repositorio](https://github.com/gastonpedraza08/backend-challenge-storydots).

### Installation

Estos son los pasos que debes seguir para correr la aplicación local.

1. Clona el repositorio
   ```sh
   git clone https://github.com/gastonpedraza08/frontend-challenge-storydots.git
   ```
2. Mover a la carpeta
   ```sh
   cd frontend-challenge-storydots
   ```
3. Instala las dependencias
   ```sh
   yarn
   ```
4. Crea un archivo `.env` en el directorio principal y añade el siguiente contenido.
   ```js
    REACT_APP_API_URL_DEV=http://localhost:5000/api
	REACT_APP_API_URL=https://gastonpedraza-ecommerce.herokuapp.com/api
	NODE_ENV=production
   ```
5. Corre la aplicación
   ```sh
   yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Listado de productos con scroll infinito
- [x] Vista de un producto
- [x] Panel de administración
    - [x] Valdiar usuario logeado
    - [x] Listar productos
    - [x] Crear producto
    - [x] Eliminar producto
    - [ ] Editar producto
    - [ ] Validar formulario creación de producto
    - [ ] Animación al cargar una imagen
- [ ] Multiple imágenes estilo carousel cuando se ven los detalles de un producto

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Gastón Pedraza - [Linkedin](https://www.linkedin.com/in/gaston-pedraza) - gastonpedraza.developer@gmail.com

Project Link: [https://github.com/gastonpedraza08/frontend-challenge-storydots](https://github.com/gastonpedraza08/frontend-challenge-storydots)

<p align="right">(<a href="#top">back to top</a>)</p>
