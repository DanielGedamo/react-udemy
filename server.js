const express = require('express');
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use("/api/users", require("./ROUTS/api/users"))
app.use("/api/profile", require("./ROUTS/api/profile"))
app.use("/api/posts", require("./ROUTS/api/posts"))
app.use("/api/auth", require("./ROUTS/api/auth"))


app.get('/',(req,res) => res.send("API Runninig"));

const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));
