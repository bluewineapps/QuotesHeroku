
const { Pool, Client } = require('pg')


const client = new  Client({
    user: 'amfiaqpgvgyrnh',
    host: 'ec2-54-217-250-0.eu-west-1.compute.amazonaws.com',
    database: 'd519vh5q5ubcsv',
    password: '674eb5c146796db94de684310fbefdd7a914cb1d68d92eae390bf06f143eb209',
    port: 5432,
    ssl:true
  })

  
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
client.connect();


exports.wallpaperList=(req,rep)=>{

    console.log('--- step 1 inside list ----');
    client.query('SELECT * from wallpapers', (err, res) => {
        console.log('--- step 2 inside list ----');
      
        rep.json(res.rows);
      });
};

exports.wallpaperViewUpdate=(req,rep)=>{
    let wallpaperId=req.params.id
    client.query('SELECT * from wallpapers where id = 1', (err, res) => {
      
        client.query('Update wallpapers set view ='+(parseInt(res.rows[0].view) +1) +' where id =1',(req1,res1)=>{
          
        });  
        rep.json(res.rows);
    });
};