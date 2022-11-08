#!/bin/bash
npm install
echo 'Launching API and Sensor Script';
nodemon iot_project_api &

cd SensorUID007_script;
node sensorUID007.js
wait