#!/bin/bash
npm install
echo 'Launching API and Sensor Script';
npm run start &

cd SensorUID007_script;
node sensorUID007.js
wait