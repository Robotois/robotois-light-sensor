var _light = require('../index'),
  light = new _light(3);

setInterval(()=>{ // Proceso en estado ocioso
  console.log("BasicValue: " + light.getBasicValue());
  console.log("BasicScaledValue: " + light.getBasicScaledValue());
},1000);

setInterval(()=>{ // Proceso en estado ocioso
  true;
},10000);

process.on('SIGTERM', function () {
  process.exit();
});

process.on('SIGINT', function () {
  process.exit();
});
