# Mediciones Avanzadas

En la sección anterior se muestran los métodos para obtener mediciones usando eventos y la función `when()`, los cuales representan un punto de inicio para interactuar con el sensor de Luz. Sin embargo, en algunas aplicaciones se requiere tener mediciones más precisas, para ello en esta librería se proporcionan las funciones adecuadas para realizar dicha tarea.

## La función `getValue()`

La función `getValue()` proporciona la capacidad de obtener mediciones con base en la señal analógica que proporciona el sensor de Luz (**TEMT6000**). Es decir que con esta función se obtienen valores numéricos en el rango de `0-5` (valores reales), ya que el voltaje de operación de los módulos es de `5V`. En el siguiente ejemplo se muestra un ejemplo de cómo usar esta función:

```javascript
const LightSensor = require('robotois-light-sensor');

const light = new LightSensor(1);
setInterval(() => { // Proceso en estado ocioso
  console.log(`Luz: ${light.getValue()}`);
}, 1000);

```
El resultado de este ejemplo es similar al siguiente:

```text
Luz: 0.8370000123977661
Luz: 1.7130000591278076
Luz: 3.495000123977661
Luz: 1.7280000448226929
Luz: 1.215000033378601
```

Como se puede observar, en este caso se tiene una cantidad considerable de dígitos después del punto decimal, por ello para ciertas aplicaciones convendría limitar la cantidad de dichos dígitos, por ejemplo:

```javascript
console.log(`Luz: ${light.getValue().toFixed(2)}`);
```

## La función `getBasicValue()`
Con esta función se obtienen mediciones cuyos valores numéricos están en el rango de `0-10` y son valores reales. Se ha incluido esta función en la librería ya que se considera que el rango de valores `0-10` es más intuitivo, ya que el valor `0` indica que se tiene poca o nada de luz y `10` es el valor máximo de luz que puede medir el sensor. Para usar esta función, considerando el ejemplo anterior, puede ser de la siguiente manera:

```javascript
console.log(`BasicValue: ${light.getBasicValue()}`);
```

El resultado de este ejemplo es similar al siguiente (se recomienda usar `toFixed`):

```text
BasicValue: 0.8352941274642944
BasicValue: 2.6235294342041016
BasicValue: 3.1764707565307617
BasicValue: 3.4000000953674316
BasicValue: 4.952941417694092
BasicValue: 6.094117641448975
```

## La función `getScaledValue()`
Esta función obtiene el valor de luz medido por el sensor en un rango de `0-10`, pero en este caso se obtienen valores enteros. De hecho, esta función es utilizada en los métodos para obtener mediciones usando eventos y la función `when()` mostrados en la sección anterior, por lo que cambiando la función para obtener el valor de la medición se obtendrá el mismo resultado.

```javascript
console.log(`ScaledValue: ${light.getScaledValue()}`);
```
