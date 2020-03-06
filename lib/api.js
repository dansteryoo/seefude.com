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