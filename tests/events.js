const LightSensor = require('../index');

const light = new LightSensor(3);
light.enableEvents();

LightSensor.on('medicion', (value) => {
  /* eslint-disable no-console */
  console.log(`Luz medida: ${value}`);
});

setInterval(() => {}, 10000);

process.on('SIGTERM', () => {
  process.exit();
});

process.on('SIGINT', () => {
  process.exit();
});
