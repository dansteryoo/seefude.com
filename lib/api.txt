import axios from 'axios';

var rest = require('restler'),
    crypto = require('crypto'),
    apiKey = 'b9f4d796964048b293a62e8b2dfc280d',
    fatSecretRestUrl = 'http://platform.fatsecret.com/rest/server.api',
    sharedSecret = 'f4af5240c191429386c18da8cfd382c5',
    date = new Date;

// Note that the keys are in alphabetical order
var reqObj = {
    method: 'foods.search',
    oauth_consumer_key: apiKey,
    oauth_nonce: Math.random().toString(36).replace(/[^a-z]/, '').substr(2),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(date.getTime() / 1000),
    oauth_version: '1.0',
    search_expression: 'banana' // test query
};

// construct a param=value& string and uriEncode
var paramsStr = '';
for (var i in reqObj) {
    paramsStr += "&" + i + "=" + reqObj[i];
}

// yank off that first "&"
paramsStr = paramsStr.substr(1);

var sigBaseStr = "POST&"
    + encodeURIComponent(fatSecretRestUrl)
    + "&"
    + encodeURIComponent(paramsStr);

// no  Access Token token (there's no user .. we're just calling foods.search)
sharedSecret += "&";

var hashedBaseStr = crypto.createHmac('sha1', sharedSecret).update(sigBaseStr).digest('base64');

// Add oauth_signature to the request object
reqObj.oauth_signature = hashedBaseStr;

// Launch!
rest.post(fatSecretRestUrl, {
    data: reqObj,
}).on('complete', function (data, response) {
    console.log(response);
    console.log("DATA: " + data + "\n");
});
