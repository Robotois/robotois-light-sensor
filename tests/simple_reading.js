const LightSensor = require('../index');

const light = new LightSensor(3);
setInterval(() => { // Proceso en estado ocioso
  console.log(`Luz: ${light.getValue()}`);
  // console.log(`Luz: ${light.getValue().toFixed(2)}`);
  console.log(`BasicValue: ${light.getBasicValue()}`);
  // console.log(`BasicValue: ${light.getBasicValue().toFixed(2)}`);
  console.log(`ScaledValue: ${light.getScaledValue()}\n`);
}, 1000);

process.on('SIGTERM', () => {
  process.exit();
});

process.on('SIGINT', () => {
  process.exit();
});
