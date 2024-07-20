# 49. Introduccion a la seccion

# 50. Temas puntuales de la seccion

![](imagenes/8.PNG)

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

# 51. Introduccion a las pruebas unitarias y de integracion

¿Qué son las pruebas?

Las pruebas en el desarrollo de software son actividades esenciales para verificar que el código funciona correctamente y cumple con los requisitos especificados. Las pruebas ayudan a identificar y corregir errores antes de que el software se despliegue en producción, asegurando así su calidad y confiabilidad. Existen diferentes tipos de pruebas, cada una con un propósito específico.

¿Qué son las pruebas unitarias?
Las pruebas unitarias son un tipo de prueba que se centra en verificar el funcionamiento de componentes individuales del código, como funciones, métodos o clases, de manera aislada. El objetivo principal de las pruebas unitarias es asegurarse de que cada unidad de código funcione correctamente por sí sola. Características clave de las pruebas unitarias:

- Aislamiento: Las unidades se prueban de manera aislada del resto del sistema. Se utilizan técnicas como el mockeo (simulación de objetos) para aislar el código bajo prueba.
- Automatización: Generalmente, las pruebas unitarias se automatizan para permitir su ejecución frecuente y rápida.
- Cobertura: Ayudan a lograr una alta cobertura de código, asegurando que la mayoría de las líneas de código se prueben.

¿Qué son las pruebas de integración?
Las pruebas de integración se centran en verificar la interacción entre diferentes módulos o componentes del sistema. A diferencia de las pruebas unitarias, las pruebas de integración aseguran que las unidades de código trabajen juntas correctamente. Estas pruebas ayudan a identificar problemas en la forma en que los componentes interactúan y se comunican entre sí.

Características clave de las pruebas de integración:

Interacción: Evalúan la interacción entre múltiples componentes del sistema.
Detección de problemas: Ayudan a identificar problemas como errores de interfaz, dependencias incorrectas y problemas de comunicación entre componentes.
Complejidad: Generalmente, son más complejas que las pruebas unitarias debido a la necesidad de configurar y manejar múltiples componentes.

El patrón AAA (Arrange, Act, Assert) es una estructura comúnmente utilizada para escribir pruebas de software. Este patrón organiza el código de prueba en tres secciones claras y bien definidas, lo que ayuda a mejorar la legibilidad y el mantenimiento de las pruebas. A continuación se explica cada uno de estos pasos:

1. Arrange (Preparar)
En esta etapa, se configuran todas las condiciones necesarias para ejecutar la prueba. Esto puede incluir la creación de objetos, la inicialización de variables y la configuración de cualquier estado previo que el sistema necesite antes de realizar la acción que se va a probar.

2. Act (Actuar)
En este paso, se realiza la acción que se quiere probar. Esto generalmente implica llamar a una función o método del código bajo prueba con los datos de entrada necesarios.

3. Assert (Afirmar)
Finalmente, se verifica que el resultado de la acción es el esperado. Esto se hace mediante afirmaciones que comparan el resultado obtenido con el resultado esperado.

Ejemplo de Prueba Unitaria en JavaScript
Supongamos que tenemos una función sumar que queremos probar:

function sumar(a, b) {
  return a + b;
}

test('sumar debería retornar la suma de dos números', () => {
  // Arrange
  const num1 = 3;
  const num2 = 5;
  const resultadoEsperado = 8;

  // Act
  const resultado = sumar(num1, num2);

  // Assert
  expect(resultado).toBe(resultadoEsperado);
});

Mitos sobre las Pruebas de Software
1. Hacen que mi aplicación no tenga errores
Mito: Las pruebas aseguran que una aplicación esté completamente libre de errores.

Realidad: Las pruebas de software están diseñadas para encontrar errores, pero no pueden garantizar que todos los errores serán encontrados y corregidos. Incluso con un conjunto completo de pruebas unitarias, de integración y de extremo a extremo, siempre existe la posibilidad de que algunos errores pasen desapercibidos, especialmente en situaciones complejas o inesperadas. Las pruebas son una herramienta para mejorar la calidad y confiabilidad del software, pero no pueden garantizar la perfección.

2. Las pruebas no pueden fallar
Mito: Una vez que las pruebas están escritas, deberían pasar siempre y nunca fallar.

Realidad: Las pruebas pueden fallar por diversas razones. Los errores en el código, cambios en los requisitos, dependencias externas que cambian o se rompen, y errores en las propias pruebas pueden causar fallos. De hecho, la detección de fallos en las pruebas es una parte importante del proceso de desarrollo, ya que indica que algo en el sistema necesita atención. El objetivo de las pruebas es identificar y resolver estos problemas, no evitar que ocurran.

3. Hacen más lenta mi aplicación
Mito: La ejecución de pruebas hace que la aplicación se ejecute más lentamente.

Realidad: Las pruebas en sí no afectan el rendimiento de la aplicación en producción. Las pruebas se ejecutan en entornos de desarrollo o pruebas, y aunque la ejecución de un conjunto completo de pruebas puede llevar tiempo, esto no impacta directamente el rendimiento del software que se despliega a los usuarios finales. Sin embargo, el proceso de prueba puede ser optimizado para minimizar el tiempo que toma, utilizando técnicas como pruebas paralelas, pruebas basadas en riesgos y selección de pruebas.

4. Es una pérdida de tiempo
Mito: Escribir y mantener pruebas es una actividad que consume tiempo y no aporta suficiente valor.

Realidad: Las pruebas bien diseñadas y mantenidas pueden ahorrar tiempo a largo plazo al identificar errores temprano en el ciclo de desarrollo, lo que reduce el costo y el esfuerzo de corregir problemas más adelante. Además, las pruebas automatizadas permiten verificar rápidamente si los cambios en el código han introducido nuevos errores, facilitando el desarrollo continuo y la integración continua (CI). Si bien la escritura de pruebas requiere tiempo y esfuerzo inicial, el retorno de inversión en términos de calidad, confiabilidad y capacidad de mantenimiento del software es significativo.

5. Hay que probar todo
Mito: Es necesario probar cada línea de código y cada posible combinación de inputs y estados.

Realidad: Si bien tener una alta cobertura de pruebas es deseable, es impracticable y costoso intentar probar absolutamente todo. En lugar de eso, se deben priorizar las pruebas basadas en los riesgos, la importancia del código y las áreas críticas del sistema. Las pruebas unitarias, de integración y de extremo a extremo deben enfocarse en las partes más importantes y propensas a errores del software. La estrategia de prueba debe ser equilibrada, enfocándose en maximizar la cobertura y el valor de las pruebas sin incurrir en un costo desproporcionado.

# 52. Inicio de la seccion - Pruebas sobre lo aprendido anteriormente

# 53. Mi primera prueba y configuraciones iniciales


¿Qué es Jest?
Jest es un framework de pruebas en JavaScript, desarrollado y mantenido por Facebook, que se utiliza principalmente para probar aplicaciones desarrolladas con React. Sin embargo, es lo suficientemente versátil para ser utilizado con cualquier proyecto JavaScript.

https://jestjs.io/

https://jestjs.io/docs/getting-started

Paso 1: yarn add --dev jest: El comando yarn add --dev jest se utiliza para instalar Jest como una dependencia de desarrollo en tu proyecto.

Paso 2: Colocamos el script en package.json: "test": "jest"

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },

Paso 3: Poner en terminal yarn test

```js
test('Esta prueba no debe fallar', () => { 
    if (0 === 0) {
        throw new Error('No puede dividir entre cero');
    }
 })
```

El script "test": "jest --watchAll" en el archivo package.json se utiliza para ejecutar Jest en modo de observación. El modo de observación de Jest hace que el proceso de prueba se ejecute continuamente, observando los archivos en el proyecto. Siempre que se detecten cambios en los archivos, Jest vuelve a ejecutar las pruebas automáticamente. 

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest --watchAll"
  },

# 54. Jest - Expect - toBe

Ponemos en la terminal: yarn add -D @types/jest

El comando yarn add -D @types/jest es crucial cuando trabajas con TypeScript y Jest, ya que proporciona las definiciones de tipos necesarias para aprovechar al máximo las capacidades de TypeScript, como el autocompletado, la verificación de tipos y la documentación en el editor. Esto no solo mejora la experiencia de desarrollo, sino que también ayuda a prevenir errores comunes de tipado en tus pruebas.

En Jest, expect y toBe son parte del API de aserciones, utilizadas para comprobar si los valores de tu código coinciden con los valores esperados en tus pruebas. A continuación, te explico en detalle cómo se usan y qué significan.

- expect: La función expect se utiliza para envolver un valor que deseas probar. Este valor puede ser el resultado de una función, una variable, o cualquier valor que quieras verificar en tu prueba.

- toBe: El método toBe se utiliza para comparar el valor envuelto por expect con un valor esperado utilizando el operador de estricta igualdad (===). Esto significa que toBe verifica si ambos valores son exactamente iguales en tipo y contenido.

Ejemplo Basico:

// archivo suma.js
function suma(a, b) {
  return a + b;
}
module.exports = suma;


// archivo suma.test.js
const suma = require('./suma');

test('suma 1 + 2 para dar 3', () => {
  expect(suma(1, 2)).toBe(3);
});


```js
describe('Pruebas en <DemoComponent>', () => {
    test('Esta prueba no debe fallar', () => { 

        // 1. Inicializacion
        const message1 = 'Hola Mundo';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2)
    
    })
});
```

# 55. Nota de Actualizacion - Extension de archivos

En la siguiente clase se hace la configuración para las pruebas de nuestros distintos archivos, en caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously."


Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs


Para ver mas detalles al respecto pueden ir a 
https://nodejs.org/docs/latest/api/modules.html#enabling.

# 56. Pruebas en el archivo 02 - template-string.js

El comando yarn add --dev babel-jest @babel/core @babel/preset-env se utiliza para configurar Babel junto con Jest en un proyecto JavaScript. Aquí te explico el propósito de cada paquete y el porqué de su uso:

- babel-jest: Integra Babel con Jest para transpilar el código de pruebas.
- @babel/core: Núcleo de Babel, necesario para la compilación de JavaScript moderno.
- @babel/preset-env: Configuración de Babel para usar las últimas características de JavaScript.

Estas herramientas en conjunto permiten a los desarrolladores escribir y probar código moderno de JavaScript de manera eficiente y efectiva.

Luego si creamos el proyecto con vite debemos crear un archivo babel.config.js:

```js
module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
```

```js
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
```

```js
import { getSaludo } from "../../src/base-pruebas/02-template-string";
describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Fernando"', () => {
        const name = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
})
```

# 57. toEqual

```js
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user)
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Fernando';

        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
})
```

# 58. Pruebas en el archivo 07-deses-arr.js

```js
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        // primera forma
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        // segunda forma
        expect(letters).toEqual(expect.any(String))
    })
})
```

# 59. Pruebas en 08-imp-exp.js-Arreglos

```js
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe de retornar undefined si no existe ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    //Tarea
    //1. 
    //Debe de retornar un arreglo con los heros de DC
    //Length===3
    //toEqual al arreglo filtrado

    //2.
    //debe de retornar un arreglo con los heroes de Marvel
    //length===2

    test('getHeroesByOwner debe de retornar un arreglo con los heros de DC', () => {
        const own = 'DC'
        const hero = getHeroesByOwner(own)
        expect(hero.length).toEqual(3)
    });

    test('getHeroesByOwner debe de retornar un arreglo con los heros de Marvel', () => {
        const own = 'Marvel'
        const hero = getHeroesByOwner(own)
        expect(hero.length).toBe(2)
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === own ));
    })
})
```

# 60. Pruebas con tareas asincronas

# 61. Pruebas con async-await

# 62. Evaluar el Catch en el async-await

# 63. Pruebas sobre componentes de React

# 64. Pruebas en FirstApp - Componentes de React

# 65. Probar FirstApp

# 66. getByTestId y otras props

# 67. Screen - Testing Library

# 68. Pruebas básicas del CounterApp

# 69. Simular eventos - Click

# 70. Codigo fuente de la seccion
