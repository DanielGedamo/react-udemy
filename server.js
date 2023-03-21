const express = require('express');
const connectDB = require('./DB/db')

const app = express()


connectDB();

app.get('/',(req,res) => res.send("API Runninig"));

app
const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));
