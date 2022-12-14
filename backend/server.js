const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const mongoose = require('mongoose')
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(require("./routes/letterRoute"));
const letter = require('./routes/letterRoute')
// get driver connection

app.use('/letters', letter)

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
          });
    })
    .catch((error) => {
        console.log(error)
    })