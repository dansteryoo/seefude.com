// import axios from 'axios';
// const ACCESS_KEY = 'b9f4d796964048b293a62e8b2dfc280d';
// const APP_SECRET = 'f4af5240c191429386c18da8cfd382c5';
// const API_PATH = 'https://platform.fatsecret.com/rest/server.api';
// const OAUTH_VERSION = '1.0';
// const OAUTH_SIGNATURE_METHOD = 'HMAC-SHA1';


// // https://platform.fatsecret.com/rest/server.api?food_id=33691&method=food.get&oauth_consumer_key=9a1a6fd1fff5433f9dd77daa4587bf5d&oauth_nonce=1234&oauth_signature=sAyYTJiIxOGkvFpBcH8L%2BlFQRCQ%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1245126631&oauth_version=1.0

// function makeApiCall(methodParams: object, httpMethod = 'GET'): Promise<Response> {
//     const queryParams = {
//         ...getOauthParameters(),
//         ...methodParams,
//         format: 'json',
//     };
//     queryParams['oauth_signature'] = getSignature(queryParams, httpMethod);
//     return fetch(`${API_PATH}?${stringify(queryParams)}`, { method: httpMethod });
// }



// export const fatAPI = new require('fatsecret')(KEY, SECRET);

// fatAPI
//     .method('foods.search', {
//         search_expression: `${searchedFood}`,
//         max_results: 10
//     })
//     .then(function (results) {
//         console.log(results.foods.food);
//     })
//     .catch(err => console.error(err));

// export const searchFood = (fudeSearch) => {
//     return axios.get(`/NYODQ/${zip}`)
//         .then(response => {
//         console.log(response.data)
//         return response.data
//     })
// };

// export const fetchFood = () => {
//     return axios.get("../../NY_zip_lat_long.json")
//         .then(res => {
//         let newObj = {};

//         res.data.forEach(element => {
//             newObj[element.fields.zip] = [element.fields.latitude, element.fields.longitude];
//         });
//         debugger
//         return newObj;
//     })
// };


// import hmacsha1 from 'hmacsha1';
// import { stringify } from 'query-string';

// export enum FatsecretFoodType {
//     Brand = 'Brand',
//     Generic = 'Generic',
// }

// export interface FatsecretFood {
//     food_id: string;
//     food_name: string;
//     food_type: FatsecretFoodType;
//     food_url: string;
//     brand_name?: string;
//     food_description?: string;
// }

// export interface FatsecretResponse {
//     foods?: {
//         food: FatsecretFood[];
//         max_results: number;
//         total_results: number;
//         page_number: number;
//     };
//     food?: FatsecretFood;
// }

// const API_PATH = 'https://platform.fatsecret.com/rest/server.api';
// const ACCESS_KEY = 'YOUR_ACCESS_KEY';
// const APP_SECRET = 'YOUR_APP_SECRET';
// const OAUTH_VERSION = '1.0';
// const OAUTH_SIGNATURE_METHOD = 'HMAC-SHA1';

// function getOauthParameters(): object {
//     const timestamp = Math.round(new Date().getTime() / 1000);
//     return {
//         oauth_consumer_key: ACCESS_KEY,
//         oauth_nonce: `${timestamp}${Math.floor(Math.random() * 1000)}`,
//         oauth_signature_method: OAUTH_SIGNATURE_METHOD,
//         oauth_timestamp: timestamp,
//         oauth_version: OAUTH_VERSION,
//     };
// }

// function getSignature(queryParams: object, httpMethod = 'GET') {
//     const signatureBaseString = [
//         httpMethod,
//         encodeURIComponent(API_PATH),
//         encodeURIComponent(stringify(queryParams)),
//     ].join('&');
//     const signatureKey = `${APP_SECRET}&`;
//     return hmacsha1(signatureKey, signatureBaseString);
// }

// function makeApiCall(methodParams: object, httpMethod = 'GET'): Promise<Response> {
//     const queryParams = {
//         ...getOauthParameters(),
//         ...methodParams,
//         format: 'json',
//     };
//     queryParams['oauth_signature'] = getSignature(queryParams, httpMethod);
//     return fetch(`${API_PATH}?${stringify(queryParams)}`, { method: httpMethod });
// }

// export async function searchFood(query: string, maxResults = 8): Promise<FatsecretResponse> {
//     const methodParams = {
//         method: 'foods.search',
//         max_results: maxResults,
//         search_expression: query,
//     };
//     const response = await makeApiCall(methodParams);
//     return response.json();
// }

// export async function getFood(foodId: string): Promise<FatsecretResponse> {
//     const methodParams = {
//         method: 'food.get',
//         food_id: foodId,
//     };
//     const response = await makeApiCall(methodParams);
//     return response.json();
// }