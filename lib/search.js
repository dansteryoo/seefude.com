// var fs = require('fs');
// var fpath = require('path');
// var util = require('util');
// var outputFile = [];

// function readPath(path, extensions) {
//     var name = fpath.basename(path);
//     var stats;
//     var selection = { path, name };

//     try { stats = fs.statSync(path); }
//     catch (e) { return null; }

//     if (stats.isFile()) {
//         var ext = fpath.extname(path).toLowerCase();
//         if (extensions && extensions.length && extensions.indexOf(ext) === -1) return null; // excluding files without specified extension
//         name = name.substring(0, name.length - 3);
//         name = name.replace(/-/g, ' ');





//         var content = fs.readFileSync(path).toString();

//         // Extracting title from the md files to display as search results
//         var indexOfTitle = content.indexOf("title");
//         var indexOfSpace = content.indexOf("\n---")
//         var title = content.substring(indexOfTitle + 7, indexOfSpace);

//         // stripping out all the unneeded characters from the content to improve search performance
//         content = content.replace(/sidebar|title|https|#|-|!|{|}|(<(?:.|\n)*?>|\*|\r?\n|\r|\(([^)]+)\))|/g, '');
//         if (title != '') {
//             outputFile.push({ 'url': path, 'value': title, 'label': content });
//         }
//         else {
//             outputFile.push({ 'url': path, 'value': name, 'label': content });
//         }

//     }
//     else {
//         selection.folder = fs.readdirSync(path)
//             .map(child => readPath(fpath.join(path, child), extensions)) // to read files
//             .filter(e => !!e);
//         if (!selection.folder.length) return null;
//     }

//     fs.writeFile('site-index.js', 'var siteIndex=' + JSON.stringify(outputFile) + ';');
//     return selection;
// }

// readPath('posts', '.md');


// var siteIndex = [{ "url": "<path of the post>", "value": "<title of the post>", "label": ":<content of the post>},
// { "url": "<path of the post>", "value": "<title of the post>", "label": ":<content of the post>}]


//  var searchResults = {

//         searchQuery: '',

//         init: function () {
//             searchResults.searchQuery = window.location.search.replace("?query=", "");
//             searchResults.searchQuery = searchResults.searchQuery.toLowerCase().replace(/\+/g, ' ');
//             searchResults.buildSearchResults();

//         },

//         buildSearchResults: function () {
//             var searchResultsMarkup = '';
//             var url = '';
//             var baseurl = $('.site-base-url').text();
//             $.each(siteIndex, function (index, object) {
//                 if (object.label.toLowerCase().indexOf(unescape(searchResults.searchQuery)) != -1) {
//                     url = window.location.origin + baseurl + '/' + object.url.replace('.md', '.html');
//                     index = object.label.toLowerCase().indexOf(unescape(searchResults.searchQuery));
//                     var content = unescape(object.label).replace(/sidebar|title|https|#|-|!|{|}|_|:|(<(?:.|\n)*?>|\*|\r?\n|\r|\(([^)]+)\))|/g, '');

//                     searchResultsMarkup += '<li> <a href="' + url + '" id="search">' + object.value + '</a> <p class="url">(' + url + ')</p> <p>' + '...' + content.substring(index - 50, index + 300) + '...' + '</p></li>';

//                 }
//             });
//             $(".search-results-page").append(searchResultsMarkup);
//         }
//     };

//     $(document).ready(function () {
//         if ($(".search-results-page").length) {
//             searchResults.init();
//         }
//     });