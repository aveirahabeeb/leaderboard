const express = require("express");
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});


router.get("/", function(req, res) {
    res.status(200).json( { message :"Welcome to Aveira Leaderboard api "});
  });
  
router.post('/leaderboard', upload.single('file'), function (req, res) {
    
      if(!req.file){
          console.log("File upload failed")
          return res.status(406).json( { error :true ,  message :"file upload failed"});
        }
       
        fs.readFile(req.file.originalname, 'utf8', (err, json_data) => {
          if (err) {
              console.log("failed to read file", err)
              res.status(406).json( { error :true ,  message :"failed to read file"});
              return
          }
         
          let json =  JSON.parse(json_data);
          let output = json.sort((itemA, itemB) => Number(itemB.point) - Number(itemA.point));
          res.send({ status: true, message: output });
                 
      });
         
     
    

    });

    
module.exports = router;