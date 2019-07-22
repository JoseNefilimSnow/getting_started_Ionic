# Como crear un proyecto en Ionic desde cero:
### Guia de apoyo


## Prerrequisitos:

    - NodeJs (version 6 o superior) 
    https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi
    - Editor de Texto (Visual Studio Code, Atom, Sublime, etc.)



## Creación del esqueleto de la aplicación
<br>
Como primer paso instalaremos ionic usando "npm install -g ionic@3" y posteriormente iniciaremos con "ionic start --no-git"(para no crear un directorio de Github en el propio proyecto). 
Una vez hecho esto selecionaremos el nombre del proyecto y el tipo de proyecto que queremos, para este tutorial el nombre será "prueba" y el tipo "blank". (La integración con cordova sera necesaria y no usaremos ionic pro)

<br>

![Paso 1](https://i.imgur.com/m1sfOjb.png)

## Partes que componen un proyecto en Ionic
<br>
Un proyecto de Ionic sigue la siguiente estructura:

![Paso 2](https://i.imgur.com/lHZDrzO.png)

<br>
La parte principal donde codificaremos es en src:

![Paso 3](https://i.imgur.com/TOHDOl0.png)

<br>
En pages estarán las partes "visibles" del codigo en html, al principio solo tendrás "home" pero puedes generar mas usando 'ionic generate' y posteriormente pedira que deseas generar. En ese caso una page, y el nombre, "banana" en nuestro ejemplo:

![Paso 4](https://i.imgur.com/be6h9qc.png)

<br>
Todos los elementos nuevos, como las páginas, deberan ser posteriormente especificadas en app.modules.ts dentro de la carpeta app, este proceso puede ser automático en el caso de generar "providers":

![Paso 5](https://i.imgur.com/hCHZXV1.png)

## Codificando en Ionic

<br>
En ionic usaremos HTML, Angular y Typescript para codificar:

![Paso 6](https://i.imgur.com/be6h9qc.png)

En este git se encuentra el ejemplo usado en las imagenes completo + un servidor. Tras navegar a la página banana usando el botón "Hola mundo" podremos conectar y recibir una respuesta del mismo visible en la consola (F12) tras apretar el botón "Ver Estado". 

## Iniciando el servidor para la prueba de la aplicación

Para iniciar el servidor solo sera necesario navegar a la carpeta usando el simbolo de sistema y usando el comando "npm i" para instalar los modulos presentes en el mismo. 
Una vez terminado ejecutamos el comando "node .".

## En la siguiente actualización hablaremos del typescript, la personalización del proyecto y por último la construcción en distintas plataformas usando cordova y capacitor.(23/07/2019)

