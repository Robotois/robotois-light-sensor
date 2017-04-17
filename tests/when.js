const LightSensor = require('../index');

const light = new LightSensor(3);

light.when(3, () => {
  /* eslint-disable no-console */
  console.log('Wow, la intensidad de luz es 3!!');
});

process.on('SIGTERM', () => {
  process.exit();
});

process.on('SIGINT', () => {
  process.exit();
});
