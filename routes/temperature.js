'use strict'

var express = require('express');
var router = express.Router();
var Influx = require('@influxdata/influxdb-client')
require('dotenv').config()

/* GET users listing. */
router.post('/', function(req, res, next) {
  const url = process.env.INFLUX_URL
  const token = process.env.INFLUX_TOKEN
  const org = process.env.INFLUX_ORG
  const bucket = process.env.INFLUX_BUCKET
  const influxDB = new Influx.InfluxDB({ url, token })
  const writeApi = influxDB.getWriteApi(org, bucket)
  
  var byte_temp = req.body.data;
  let temp_exa = byte_temp.substring(2);
  var temp_decrypt = parseInt(temp_exa, 16)/10;

  writeApi.useDefaultTags({ region: 'west' })
  const point1 = new Influx.Point('sensorUID007')
    .floatField('temperature', temp_decrypt)
  console.log(` ${point1}`)
  
  writeApi.writePoint(point1)

  writeApi.close().then(() => {
    console.log('WRITE FINISHED')
  })
});

module.exports = router;
