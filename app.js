const express = require("express");
const bodyParser = require("body-parser");
const apiRoute = require("./routes/apiRoute");
require('dotenv').config()
const PORT = process.env.PORT || 3500;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", apiRoute);
app.use("/leaderboard", apiRoute);

(async () => {

   app.listen(PORT, async function() {
       console.log(`Listening on Port ${PORT}`);
      
   });
})();