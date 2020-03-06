// const express = require("express");
// const app = express();
// const path = require("path");
// const fetch = require("node-fetch");
// const config = require('./config/keys')

// app.use(express.static("dist"));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "./dist/index.html"))
// });

// create route to get single book by its isbn


// <!-------------------- Required Params For Food.Get

// Your API key when you registered as a developer
// oauth_consumer_key = String;

// The method used to generate the signature(only HMAC - SHA1 is supported)
// oauth_signature_method = String;

// The date and time, expressed in the number of seconds since January 1, 1970 00: 00: 00 GMT.The timestamp value must be a positive integer and must be equal or greater than the timestamp used in previous requests
// oauth_timestamp = Int;

// 	A randomly generated string for a request that can be combined with the timestamp to produce a unique value
// oauth_nonce = String;

// oauth_version = '1.0';

// The signature, a consistent reproducible concatenation of the request elements into a single string.The string is used as an input in hashing or signing algorithms.
// oauth_signature = String;

// method = String;

// A signed 64-bit integer. Usually used for IDs.
// food_id = 


// <!-------------------- Example Return JSON 

// { 
//     "food": { 
//         "food_id": "4384", 
//         "food_name": "Plain French Toast", 
//         "food_type": "Generic", 
//         "food_url": "http:\/\/www.fatsecret.com\/calories-nutrition\/generic\/french-toast-plain", 
//         "servings": { 
//             "serving": { 
//                 "calcium": "8", 
//                 "calories": "159", 
//                 "carbohydrate": "20.02", 
//                 "cholesterol": "90", 
//                 "fat": "6.13", 
//                 "fiber": "0.8", 
//                 "iron": "9", 
//                 "measurement_description": "regular slice", 
//                 "metric_serving_amount": "65.000", 
//                 "metric_serving_unit": "g", 
//                 "monounsaturated_fat": "2.298", 
//                 "number_of_units": "1.000", 
//                 "polyunsaturated_fat": "1.578", 
//                 "potassium": "80", 
//                 "protein": "5.58", 
//                 "saturated_fat": "1.585", 
//                 "serving_description": "regular slice", 
//                 "serving_id": "16758",
//                 "serving_url": "http:\/\/www.fatsecret.com\/calories-nutrition\/generic\/french-toast-plain?portionid=16758&portionamount=1.000", 
//                 "sodium": "320", 
//                 "sugar": "4.87", 
//                 "trans_fat": "0", 
//                 "vitamin_a": "0", 
//                 "vitamin_c": "0" 
//             } 
//         } 
//     } 
// }

// // API specific settings.
// const API_URL = config.fsAPI
// const API_CLID = config.fsClientId20
// const API_CLSECRET = config.fsClientSecret20
// const API_CUID = config.fsCustomerId10
// const API_CUSECRET = config.fsCustomerSecret10

// const FOOD_SEARCH = `${API_URL}?&method=foods.search&oauth_consumer_key=${API_CLID}`;


// https://platform.fatsecret.com/rest/server.api?&method=foods.search&oauth_consumer_key=b9f4d796964048b293a62e8b2dfc280d&oauth_nonce=1234&oauth_signature=sAyYTJiIxOGkvFpBcH8L%2BlFQRCQ%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1245126631&oauth_version=1.0


// app.get("/", (req, res) => {
//     fetch(API_URL, { method: 'foods.search', headers: headers, body: data })()
//         .then(res => res.text())
//         .then(body => {
//             let results = JSON.parse(body);
//             console.log(results); // logs to server
//             res.send(results); // sends to frontend
//         });
// });

// // <!-------------------- Required Params For Foods.Search

// // Your API key when you registered as a developer
// // oauth_consumer_key = String;

// // The method used to generate the signature(only HMAC - SHA1 is supported)
// // oauth_signature_method = String;

// // The date and time, expressed in the number of seconds since January 1, 1970 00: 00: 00 GMT.The timestamp value must be a positive integer and must be equal or greater than the timestamp used in previous reqs
// // oauth_timestamp = Int;

// // 	A randomly generated string for a request that can be combined with the timestamp to produce a unique value
// // oauth_nonce = String;

// // oauth_version = '1.0';

// // The signature, a consistent reproducible concatenation of the request elements into a single string.The string is used as an input in hashing or signing algorithms.
// // oauth_signature = String;
// // 
// // method = String;

// // <!-------------------- Example Return JSON 
// // { 
// //     "foods": { 
// //         "food": { 
// //             "food_description": "Per 342g - Calories: 835kcal | Fat: 32.28g | Carbs: 105.43g | Protein: 29.41g", 
// //             "food_id": "4384", 
// //             "food_name": "Plain French Toast", 
// //             "food_type": "Generic", 
// //             "food_url": "http:\/\/www.fatsecret.com\/calories-nutrition\/generic\/french-toast-plain" 
// //         }, 
// //         "max_results": "20", 
// //         "page_number": "0", 
// //         "total_results": "228" 
// //     } 
// // }


// // create a search route
// app.get("/search", (request, response) => {
//     fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//         .then(response => {
//             return response.text();
//         })
//         .then(body => {
//             let results = JSON.parse(body);
//             console.log(results);
//             response.send(results);
//         });
// });


// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => { console.log(__dirname), console.log(`listening on ${PORT}`) });
