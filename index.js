var lSensor = require('bindings')('LightSensor')
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

function LightSensor(_port, _add = 0){
  EventEmitter.call(this);
  var _self = this;
  this.light = new lSensor(_port,_add);

 process.on('SIGINT', function () {
    _self.release();
  });

 process.on('SIGTERM', function () {
    _self.release();
  });
}

/**
  Devuelve el valor de la señal medida por el sensor, este valor va de 0-5, y tiene puntos decimales.
  La resolución es de 11 bits.
**/
LightSensor.prototype.getValue = function(){
  return this.light.getValue();
}

LightSensor.prototype.getBasicValue = function(){ // Rounded
  var value = Math.round(this.light.getValue() * 100)/100
  return value;
}

LightSensor.prototype.getScaledValue = function(){
  return this.light.getScaledValue();
}

LightSensor.prototype.getBasicScaledValue = function(){
  return this.light.getBasicScaledValue();
}

LightSensor.prototype.enableEvents = function (){
  var _self = this;
  var scaledValue;
  if(!this.eventInterval){
    this.eventInterval = setInterval(()=>{
       scaledValue = this.light.getBasicScaledValue();
       _self.emit('medicion',scaledValue);
     }, 500); // Tomar mediciones cada 500ms
  }
}

LightSensor.prototype.when = function(value, callback) {
  if (!this.interval) {
    this.interval = setInterval(()=>{
      console.log('Luz:' + this.light.getBasicScaledValue());
      if (this.light.getBasicScaledValue() == value) {
        callback();
      }
    }, 500); // Tomar mediciones cada 500ms
  }
}

LightSensor.prototype.release = function() {
  if (this.interval)
    clearInterval(this.interval);
  if (this.interval)
    clearInterval(this.eventInterval);

  this.light.release();
}

inherits(LightSensor,EventEmitter);

module.exports = LightSensor;
