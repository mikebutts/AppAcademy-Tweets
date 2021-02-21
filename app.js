const express = require('express')
const mongoose = require('mongoose') 
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Server is running on port ${port}`));