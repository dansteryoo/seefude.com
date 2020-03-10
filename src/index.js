import './styles/main.scss'

<script src='/lib/pie_chart.js' charset='utf-8'></script>
<script src='/lib/bar_chart.js' charset='utf-8'></script>

// import axios from "axios";

// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("app").innerText = "Hello World!";
//     axios
//         .get("./search?")
//         // .then(res => res.json())
//         .then(({ data: { docs } }) => {
//             docs.forEach((doc, idx) => {
//                 const newH3 = document.createElement("h3");
//                 newH3.innerText = doc.title_suggest;
//                 const newP = document.createElement("p");
//                 newP.innerText = doc.first_sentence;
//                 doc.first_sentence && document.body.append(newH3, newP);
//             });
//         });
// });



// $("document").ready(function () {
//     $("#search").autocomplete({
//         source: siteIndex,
//         minLength: 2,
//         select: function (event, ui) {
//             window.location.href = window.location.origin + '{{site.baseurl}}' + '/' + ui.item.url.replace('.md', '.html');
//         },
//         open: function (event, ui) {
//             $(".ui-autocomplete").css("z-index", 10000);
//             $(".ui-autocomplete").addClass("dropdown-menu search-results");
//         }

//     })
//         .autocomplete("instance")._renderItem = function (ul, item) {
//             return $("<li>")
//                 .append("<div>" + item.value + "</div>")
//                 .appendTo(ul);
//         };

// });

