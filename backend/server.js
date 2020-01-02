const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
mongoose.createConnection("mongodb+srv://u1:u1@cluster0-u3zl8.mongodb.net/test", { userNewParser: true, useCreateIndex: true,  useUnifiedTopology: true}
    );
    
const connection = mongoose.connection;
connection.once('once', () => {
    console.log(`MongoDB databse connection established successfully`);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});