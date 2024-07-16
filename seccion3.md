# 11. INTRODUCCION A LA SECCION

# 12. TEMAS PUNTUALES DE LA SECCION

![](imagenes/2.png)

# 13. INICIO DE PROYECTO - BASES DE JAVASCRIPT

Crear proyecto en React
https://create-react-app.dev/

Se usa el siguiente comando:
npx create-react-app my-app

Para correrlo usamos: npm start

# 14. VARIABLES Y CONSTANTES

```js
const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var NO se debe de usar
if (true) {
    const nombre = 'Peter';
    console.log(nombre);
}
console.log(valorDado);
```

# 15. TEMPLATE STRING

```js


const nombre = 'Walter';
const apellido = 'Suel';

const nombreCompleto = `
${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)
```

# 16. OBJETOS LITERALES

```js
const persona = {
    nombre: 'Toni',
    apellido: 'Stack',
    edad: 45,
    direccion: {
        ciudad : 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};
//console.log({persona}); //con esto se obtiene el nombre del objeto
//console.log(persona) // Se obtiene las propiedades del objeto, pero no se puede conocer el nombre del objeto
//console.table(persona); //muestra los datos en una tabla


/*
Con los 3 puntos se expande las propiedades de un objeto a otro objeto. En este caso copiamos o clonamos las propiedades de persona 1 en persona 2.
Una forma incorrecta de clonacion es esta:
const persona2 = persona1

El operador ... se llama operador de propagacion (spread operator)
*/
const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );
```

![](imagenes/3.PNG)


# 17. ARREGLOS

```js
// const arreglo = new Array( 100 );

/*const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);*/

const arreglo = [1, 2, 3, 4];

/*No es recomendable usar push para insertar un elemento a un arreglo, sino es recomendable usar el operador spread*/

let arreglo2 = [...arreglo, 5];

/*
map es un método en JavaScript que se utiliza para iterar sobre los elementos de un array y crear un nuevo array con los resultados de aplicar una función a cada uno de esos elementos. Es especialmente útil para transformar datos sin modificar el array original.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8]

*/

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
```

![](imagenes/4.PNG)


# 18. FUNCIONES

```js
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar);

//Funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Vegeta'));

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Carlos'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
console.log(getUser());

const getUser2 = () => ({
    uid: '12345',
    username: 'Jorgito_123'
});
console.log(getUser2());


//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo = (nombre) => ({
    uid: 'WER366',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
```


# 19. DESESTRUCTURACION DE OBJETOS

```js
//Desestructuracion
//Asignacion Desestructurante
// La desestructuracion permite extraer datos de arrays y objetos de una manera mas concisa y legible
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
const {edad, clave, nombre} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    console.log(usuario);
}
retornaPersona(persona);

const retornaPersona2 = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango);
}
retornaPersona2(persona);

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
```

# 20. DESESTRUCTURACION DE ARREGLOS

```js
 const personajes = ['Goku', 'Vegeta', 'Trunks'];
//  console.log(personajes[0]);
//  console.log(personajes[1]);
//  console.log(personajes[2]);
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}
const arr2 = useState('Goku');
console.log(arr2);


//Tarea
//1. El primer valor del arr se llamara nombre
//2. El segundo se llamara setNombre
const useState2 = (valor) => {
    return [valor, () => {console.log('Hola Peru')}]
}
const [nombre, setNombre] = useState2('Juan');
console.log(nombre);
setNombre();
```

# 21. IMPORT, EXPORT Y FUNCIONES COMUNES DE ARREGLOS

```js
import { heroes } from './data/heroes';
console.log(heroes);

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }
// console.log(getHeroeById(2));


const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(3));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('DC'));
```

# 22. MULTIPLES EXPORTACIONES Y EXPORTACIONES POR DEFECTO

```js
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC', 'Marvel'];
export default heroes;

// export {
//     heroes as default,
//     owners
// }

```

```js
import heroes, {owners} from './data/heroes';
console.log(heroes);
console.log(owners);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(3));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('DC'));
```

# 23. PROMESAS

```js
import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despues')
//         // resolve();
//         const p1 = getHeroeById(2);
//         // console.log(p1);
//         resolve(p1);
//         //reject('No se pudo encontrar el heroe');

//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
            
        }, 2000)
    });
}
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)
```

# 24. Fetch API

Fetch API en JavaScript es una interfaz moderna para realizar peticiones HTTP asíncronas. Es más potente y flexible que las alternativas más antiguas como XMLHttpRequest (XHR). Fetch permite realizar solicitudes de red de forma sencilla y ofrece una sintaxis más limpia y fácil de usar basada en Promesas.

Algunas características clave de Fetch API incluyen:

- Solicitud y Respuesta: Permite enviar solicitudes a recursos web y recibir respuestas. Puedes especificar el método HTTP (GET, POST, PUT, DELETE, etc.), encabezados personalizados, y el cuerpo de la solicitud (para POST y PUT).

- Promises: Fetch utiliza Promesas, lo que facilita trabajar con código asíncrono y manejar respuestas de manera eficiente.

- Manejo de JSON: Fetch facilita el manejo de datos en formato JSON, permitiendo serializar y deserializar automáticamente objetos JSON en el cuerpo de las solicitudes y respuestas.

- Soporte para Streams: Fetch API admite el uso de Streams para manejar grandes cantidades de datos o transmisiones continuas de datos.

- Interfaz Moderna: Es la recomendación actual para realizar solicitudes HTTP en JavaScript moderno, proporcionando una alternativa más flexible y poderosa a las técnicas tradicionales como XHR.

```js
const apiKey = 'ojN0FfV6LQmsImQjrTI6xWUSIUUXA9Sp';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
```

# 25. Async - Await

async y await son características de JavaScript que se utilizan para trabajar con funciones asíncronas de una manera más clara y sincrónica, especialmente cuando se manejan operaciones que devuelven promesas, como las solicitudes a APIs o las operaciones de E/S (entrada/salida).

async
async se utiliza para declarar que una función será asíncrona. Esto significa que la función devolverá siempre una promesa. Dentro de una función async, se pueden utilizar las palabras clave await para esperar que una promesa se resuelva o se rechace antes de proceder con la ejecución.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

En este ejemplo:

- fetchData es una función asíncrona declarada con async.
- await fetch('https://api.example.com/data') espera a que la solicitud fetch se complete y devuelve la respuesta.
- await response.json() espera a que se convierta la respuesta a formato JSON.
- Finalmente, la función devuelve los datos obtenidos de la API.

await
await solo se puede utilizar dentro de una función declarada como async. Esta palabra clave pausa la ejecución de la función asíncrona hasta que la promesa proporcionada se haya resuelto o rechazado. Cuando la promesa se resuelve, await devuelve el valor resuelto de la promesa.

Ventajas de async y await:

- Simplifica el código: Evita el anidamiento excesivo de promesas y hace que el código sea más legible, similar al estilo de programación síncrono.
- Manejo de errores: Facilita el manejo de errores con estructuras de try...catch, haciendo que el código sea más robusto y fácil de depurar.
- Mejora el flujo de control: Permite escribir código asíncrono de una manera que sigue el flujo de ejecución natural, en lugar de depender de callbacks anidados o encadenamiento de promesas.

```js
// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://asasdadasdasd.com');
//     })
//     return promesa;
// }
// getImagenPromesa().then(console.log);

// const getImagen = async () => {
//     return 'https://asasdadasdasd.com';
// }
// getImagen().then(console.log);

const getImagen = async () => {
    try {
        const apiKey = 'ojN0FfV6LQmsImQjrTI6xWUSIUUXA9Sp';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    } catch (error) {   //manejo del error
        console.error(error);
    }
}

getImagen();
```
# 26. Operador condicional ternario

```js
// const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo'
// }

// console.log(mensaje);

const activo = true;

//const mensaje = (activo) ? 'Activo' : 'Inactivo'
//const mensaje = (activo) ? 'Activo' : null;
const mensaje = activo && 'Activo'    //Esto usamos cuando solo queremos procesar el true

console.log(mensaje);
```
# 27. Nota sobre JavaScript

Terminamos la sección de reforzamiento de JavaScript
Pero recuerden que esto es para entrar en calor y que lo temas principales de JavaScript que necesito que conozcan estén cubiertos, pero les recomiendo que cualquier duda adicional sobre el lenguaje, sobre métodos y demás, la consulten aquí

https://developer.mozilla.org/es/

Como ya les había mencionado, considero esa página la mejor en cuanto a documentación sobre JavaScript.

También si sienten que necesitan más sobre JavaScript en video, mi curso de JavaScript Moderno es el indicado para eso.

En fin!, es momento de empezar con React!

# 28. Codigo fuente de la seccion

Código de la sección
Aquí les dejo el repositorio de Github y el código fuente descargable para que lo tengan a la mano por si lo llegan a necesitar, pero recuerden, es mejor que ustedes escriba el código y experimenten todo de primera mano.

No se olviden de hacer los ejercicios por mas fáciles o difíciles que lo sientan, es lo que nos ayudará a mejorar y a tener experiencia real con el código.

Es momento de empezar con React!

https://github.com/Klerith/react-intro-javascript