#include <cstdio>
#include <bcm2835.h>
#include <thread>
#include <chrono>

#include "./LightSensor.h"

void i2c_init();
void i2c_end();

int main(int argc, char const *argv[]) {
  i2c_init();
  LightSensor light;
  while (true) {
    light.selectPort(3);
    printf("getValue: %f, getScaledValue: %d\n",
      light.getValue(),
      light.getScaledValue());
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
  }
  i2c_end();
  return 0;
}

void i2c_init() {
  uint16_t clkDiv = BCM2835_I2C_CLOCK_DIVIDER_626;

  if(!bcm2835_init()){
    printf("BCM2835 Error!!!\n");
  }

  bcm2835_i2c_begin();

  bcm2835_i2c_setClockDivider(clkDiv);
}

void i2c_end() {
  bcm2835_i2c_end();
  bcm2835_close();
}
