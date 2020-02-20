import * as Secrets from '../secrets/secrets.js'

const baseUrl = Secrets.baseUrl;
const applicationId = Secrets.applicationId;
const apiKey = Secrets.apiKey;

const axios = require('axios');

const getFood = (foodString) => {
    const endpoint = baseUrl + "/natural/nutrients";
    const headers = {
        'x-app-id': applicationId,
        'x-app-key': apiKey,
        'Content-Type': 'application/json'
    }

    axios.post(endpoint, {
        query: foodString
    }, {
        headers: headers
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error)
        return error
    });
};

export default getFood;