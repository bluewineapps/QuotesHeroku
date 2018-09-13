const { Pool, Client } = require('pg')


const client = new Client({
  user: 'amfiaqpgvgyrnh',
  host: 'ec2-54-217-250-0.eu-west-1.compute.amazonaws.com',
  database: 'd519vh5q5ubcsv',
  password: '674eb5c146796db94de684310fbefdd7a914cb1d68d92eae390bf06f143eb209',
  port: 5432,
  ssl:true
})

exports.clinet = client;



