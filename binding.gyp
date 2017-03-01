{
  "targets": [
    {
      "target_name": "LightSensor",
      "sources": [ "LightSensor.cpp","LightWrapper.cpp",
      "src/Modules/AnalogModules/LightSensor.cpp",
      "src/Libraries/ADS1015/ADS1015.cpp",
      "src/Libraries/Timer/AccurateTiming.cpp"
      ],
      "libraries": ["-l bcm2835","-l rt"]
    }
  ]
}
