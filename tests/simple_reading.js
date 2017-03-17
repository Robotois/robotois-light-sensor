const LightSensor = require('../index');

const light = new LightSensor(3);
setInterval(() => { // Proceso en estado ocioso
  /* eslint-disable no-console */
  console.log(`BasicValue: ${light.getBasicValue()}`);
  /* eslint-disable no-console */
  console.log(`BasicScaledValue: ${light.getBasicScaledValue()}`);
}, 1000);

setInterval(() => {}, 10000);

process.on('SIGTERM', () => {
  process.exit();
});

process.on('SIGINT', () => {
  process.exit();
});
