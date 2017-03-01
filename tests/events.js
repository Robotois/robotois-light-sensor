var _light = require('../index'),
  light = new _light(3);
light.enableEvents();

light.on('medicion',function(value){
  console.log("Luz medida: "+value);
});

setInterval(()=>{ // Proceso en estado ocioso
  true;
},10000);

process.on('SIGTERM', function () {
  process.exit();
});

process.on('SIGINT', function () {
  process.exit();
});
