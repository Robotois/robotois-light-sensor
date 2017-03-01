var _light = require('../index'),
  light = new _light(3);

light.when(3,()=>{
  console.log("Wow, la intensidad de luz es 3!!");
});

// setInterval(()=>{ // Proceso en estado ocioso
//   console.log("Temp: " + temp.getValue().toFixed(3));
//   console.log("Int: " + temp.getIntValue());
// },1000);

setInterval(()=>{ // Proceso en estado ocioso
  true;
},10000);

process.on('SIGTERM', function () {
  process.exit();
});

process.on('SIGINT', function () {
  process.exit();
});
