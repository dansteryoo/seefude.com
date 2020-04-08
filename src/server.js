// const express = require('express');
// const app = express();
// const path = require('path');
// const fetch = require("node-fetch");
// const port = process.env.PORT || 3000;
// require('dotenv').config();

// // API Endpoint: https://data.cityofnewyork.us/resource/yjxr-fw8i.json

// app.use(express.static("dist"));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "./dist/index.html"));
// });

// // DO I NEED THIS
// const JS_SCRIPTS = path.join(__dirname, '/src/scripts')
// app.use(express.static(JS_SCRIPTS))


// app.get("/NYODQ/:zip", (request, response) => {
//     const url = `https://data.cityofnewyork.us/resource/yjxr-fw8i.json?$query=SELECT bldgcl, fullval WHERE zip = ${request.params.zip} LIMIT 50000`
//     fetch(url, {
//         headers: {
//             'Accept': '*/*',
//             'X-Socrata-Host': 'data.cityofnewyork.us',
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => {
//             return response.text();
//         })
//         .then(body => {
//             let results = JSON.parse(body);
//             console.log(results);
//             response.send(results);
//         });
// });

// app.listen(port, () => console.log(`Server running on ${port}`));



// response.foods.food.food_id





// const express = require("express");
// const app = express();
// const config = require('./config/keys')
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const users = require("./routes/api/users");
// const students = require("./routes/api/students");
// const reminders = require("./routes/api/reminders");
// const passport = require('passport')

// //this is for heroku deploy: https://open.appacademy.io/learn/swe-in-person-nyc/mern-stack-curriculum/deploying-your-app

// const path = require('path');

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'));
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     })
// }


// mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to MongoDB successfully"))
//     .catch(err => console.log(err));

// // basic route to render info on our page
// app.get("/", (req, res) => res.send("SchoolForce is in session"));

// app.use(passport.initialize());
// require('./config/passport')(passport);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use("/api/users", users);
// app.use("/api/students", students);
// app.use("/api/reminders", reminders);


// //tell Express to start a socket and listen for connections on the path.
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));







