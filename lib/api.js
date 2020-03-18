// //--------------- fetch regular 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(json => console.log(json))

// //--------------- fetch javascript

//     getFood()
//         .then(res => {
//             console.log('fude data success')
//         })
//         .catch(err => {
//             console.log('fude data error');
//             console.error(err);
//         });

//     async function getFood() {    
//         const response = await fetch('');
//         const fude = await response.fude();
//         document.getElementById('foodData').src = URL.createObjectURL(fude)
//     }


// //--------------- fetch javascript with data

// <script src="https://d3js.org/d3-dsv.v1.min.js"></script>
//     <script src="https://d3js.org/d3-fetch.v1.min.js"></script>
//     <script>

//         d3.csv("/path/to/file.csv").then(function(data) {
//             console.log(data); // [{"Hello": "world"}, …]
// });
 
//       d3.csv(",", "test.csv", function(d) {
//   return {
//         year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
//     make: d.Make,
//     model: d.Model,
//     length: +d.Length // convert "Length" column to number
//   };
// }).then(function(data) {
//         console.log(data);
//   });
// </script>


// import axios from 'axios';

// const API_PATH = 'https://platform.fatsecret.com/rest/server.api';
// const ACCESS_KEY = 'b9f4d796964048b293a62e8b2dfc280d';
// const APP_SECRET = 'f4af5240c191429386c18da8cfd382c5';
// const OAUTH_VERSION = '1.0';
// const OAUTH_SIGNATURE_METHOD = 'HMAC-SHA1';


// function getOauthParameters() {
//     const timestamp = Math.round(new Date().getTime() / 1000);
//     return {
//         oauth_consumer_key: ACCESS_KEY,
//         oauth_nonce: `${timestamp}${Math.floor(Math.random() * 1000)}`,
//         oauth_signature_method: OAUTH_SIGNATURE_METHOD,
//         oauth_timestamp: timestamp,
//         oauth_version: OAUTH_VERSION,
//     };
// }

// function getSignature(queryParams, httpMethod = 'GET') {
//     const signatureBaseString = [
//         httpMethod,
//         encodeURIComponent(API_PATH),
//         encodeURIComponent(stringify(queryParams)),
//     ].join('&');
//     const signatureKey = `${APP_SECRET}&`;
//     return hmacsha1(signatureKey, signatureBaseString);
// }
