const LSensor = require('bindings')('LightSensor');
const EventEmitter = require('events').EventEmitter;
const inherits = require('util').inherits;
/**
 * Creates an instance of LightSensor.
 * @param {int} port The port number where this component us connected.
 * @param {int} add The second argument.
 * @returns {LightSensor} LightSensor object.
 */
function LightSensor(port, add = 0) {
  const self = this;
  EventEmitter.call(this);
  this.light = new LSensor(port, add);
  this.prevValue = -1;

  process.on('SIGINT', () => {
    self.light.release();
  });

  process.on('SIGTERM', () => {
    self.light.release();
  });
}

 /* Devuelve el valor de la señal medida por el sensor, este valor va de 0-5,
  y tiene puntos decimales. La resolución es de 11 bits.
 * @returns {int} returns a float between 0-5.
 */
LightSensor.prototype.getValue = function getValue() {
  return this.light.getValue();
};

LightSensor.prototype.getBasicValue = function getBasicValue() { // Rounded
  return this.light.getBasicValue();
};

LightSensor.prototype.getScaledValue = function getScaledValue() {
  return this.light.getScaledValue();
};

LightSensor.prototype.publishNow = function publishNow() {
  this.mqttClient.publish(this.myTopic, this.light.getScaledValue().toString());
};

LightSensor.prototype.enableEvents = function enableEvents(mqttConfig) {
  if (mqttConfig) {
    this.mqttClient = mqttConfig.mqttClient;
    this.myTopic = `sensors/light${mqttConfig.instance}`;
    this.mqttClient.publish('registerTopic', this.myTopic);
  }
  if (!this.eventInterval) {
    this.eventInterval = setInterval(() => {
      const currentValue = this.light.getScaledValue();
      this.emit('medicion', currentValue);
      if (this.prevValue !== currentValue && this.mqttClient) {
        this.mqttClient.publish(this.myTopic, currentValue.toString());
        this.prevValue = currentValue;
      }
    }, 250);
  }
};

LightSensor.prototype.release = function release() {
  clearInterval(this.eventInterval);
  this.light.release();
};

inherits(LightSensor, EventEmitter);

module.exports = LightSensor;
