{
  "targets": [
    {
      "target_name": "LightSensor",
      "sources": [
        "src/wrapper/LightSensor.cpp",
        "src/wrapper/LightWrapper.cpp",
        "src/LightSensor.cpp",
        "src/libraries/robotois-ADS1015/ADS1015.cpp",
      ],
      "libraries": ["-l bcm2835","-l rt"]
    }
  ]
}
