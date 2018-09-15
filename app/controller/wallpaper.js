
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
    rep.json('[ {"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/2s..jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/2m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/2l.jpg"},"id": 2},{"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/1s.jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/1m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/1l.jpg"},"id": 1},{"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/3s.jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/3m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/3l.jpg"},"id": 3},{"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/4s.jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/4m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/4l.jpg"},"id": 4},{"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/5s.jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/5m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/5l.jpg"},"id": 5},{"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/6s.jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/6m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/6l.jpg"},"id": 6},{"wallpaper": {"small": "https://bluewineapps.github.io/wallpapers/small/7s.jpg","medium": "https://bluewineapps.github.io/wallpapers/medium/7m.jpg","large": "https://bluewineapps.github.io/wallpapers/large/7l.jpg"},"id": 7}]');
    // client.query('SELECT * from wallpapers', (err, res) => {
    //     console.log('--- step 2 inside list ----');
      
    //     rep.json(res.rows);
    //   });
};

exports.wallpaperViewUpdate=(req,rep)=>{
    let wallpaperId=req.params.id
    client.query('SELECT * from wallpapers where id = 1', (err, res) => {
      
        client.query('Update wallpapers set view ='+(parseInt(res.rows[0].view) +1) +' where id =1',(req1,res1)=>{
          
        });  
        rep.json(res.rows);
    });
};