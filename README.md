
![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@soymeraki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Javier Allegue Barros</a> on <a href="https://unsplash.com/s/photos/decision?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Título

Tarea: Condiciones

## Propósito

Ejercicio para practicar la forma en la se se controla el flujo de los programas utilizando condicionales

## Requerimientos funcionales

1. (1 Punto) Programar una función que reciba como parámetro un número y regrese `true`si el número es par o `false` si el número es impar o cero:
   - `esPar(numero);`

2. (1 Punto) Programar una función que reciba como parámetros dos números y determine si el primer número es múltiplo del segundo. Si es múltiplo deberá regresar `true`, de lo contrario regresará `false`. Por ejemplo: sí numero1 = 10 y numero2 = 5, la función regresará `true` pues el 10 es múltiplo de 5. Si numero1 = 9 y numero2  = 4, la función regresará `false` pues el número 9 no es múltiplo de 4.
     - `esMultiplo(numero1, numero2);`

3. (1 Punto) Programar una función que calcule el salario de un trabajador. La función deberá solicitar el tipo de trabajador, y las horas trabajadas. Los trabajadores de tipo 1 reciben un pago de 20 pesos la hora. Los trabajadores de tipo 2 reciben un salario de 22 pesos la hora y los trabajadores tipo 3 reciben un salario de 25 pesos por hora. En caso de que se ingrese in tipo de trabajador no válido la función regresará -1.
     - `calcularSalario(tipoTrabajador, horasTrabajadas);`

4. (1 Punto) Programar una función que reciba como parámetro una calificación numérica y la convierta a una escala de letras de acuerdo a lo siguiente. Para las calificaciones no incluidas en la lista, por ejemplo valores menores que cero o mayores que 10, el valor de regreso será ERROR.
     - Las calificaciones 0 a 5 corresponden a C
     - las calificaciones 6 y 7 corresponden a B
     - las calificaciones 8 y 9 corresponden a A
     - la calificación 10 corresponde a A+
     - `obtenerCalificacion(calificacionNumerica);`

5. (1 Punto) Programar una función que reciba como parámetro tres números y regrese como parámetro el más cercano a él. Por ejemplo, si numero1=98, numero2=50, numero3=105, el resultado es 98. Si numero1=90, numero2=70 y numero3=103, el resultado es 103.
     - `obtenerCercano100(numero1, numero2, numero3);`

6. (1 Punto) escribir una función que reciba como parámetro dos números y un operador, dependiendo del operador que se reciba se realizará la operación que corresponde y regresará el resultado. En caso de que el operador no sea permitido, la función deberá regresar -1. Los operadores permitidos son:
     - Operador: + realiza una suma
     - Operador: - realiza una resta
     - Operador: * realiza una multiplicagit stción
     - Operador: / realiza una división
     - Operador: % obtiene el residuo
     - `calcular(numero1, numero2, operador);`

7. (1 Punto) escribir una función que reciba como parámetros el número de películas a rentar y el día de la semana en que se realiza la renta. La función deberá calcular el costo total de la renta de las películas. Para el parámetro del día de la semana se utilizará el número 1 para el lunes, 2 para el martes, 3 para el miércoles, 4 para el jueves, 5 para el viernes, 6 para el sábado y 7 para el domingo.
- El costo de renta de cada película es de 25 pesos. Sin embargo los días martes y jueves se aplica una promoción del 2x1, los miércoles todas las películas tienen un 15% de descuento, los lunes y viernes 3 películas por 60 pesos. El resto de los días no hay promoción. Si se ingresa un número de día no válido, la función regresará -1.
    - `costoRenta(peliculas, dia);`

8. (1 Punto) escribir una función que permita calcular el costo total de una compra de boletos para ingresar al teatro. La función recibirá como parámetros, el número de boletos y la zona del teatro a la que corresponden esos boletos. Si el costo de los boletos supera los 2,000 pesos se hará un descuento del 7%. Si se ingresa un número de zona no válido la función regresará -1. Las zonas y costo de los boletos son las siguientes:
   - Zona: 1 costo del boleto 300 pesos
   - Zona: 2 costo del boleto 450 pesos
   - Zona: 3 costo del boleto 700 pesos
   - `costoBoletos(boletos, zona);`

9. (2 Puntos) escribir una función que permita determinar si un número está dentro de un determinado rango sin considerar los límites. La función recibirá como parámetros el limite inicial del rango, el límite final del rango y el número que se va a evaluar. La función regresará `true` si el número evaluado está dentro  del rango, y `false` si el número evaluado está fuera del rango. Por ejemplo si limiteInicial = 10, limiteFinal = 20 y numero = 15, entonces la función regresará `true` pues el número 15 está dentro de ese rango. Para el mismo caso, si numero = 7, la función regresará `false`. También. si numero=10 la función regresará `false` pues está justamente en el límite.
     - `estaEnRango(limiteInicial, limiteFinal, numero);`

## Requerimientos no funcionales

- Las funciones deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el ejercicio sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método o función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
- Cada integrante del equipo deberá resolver por lo menos 1 problema
