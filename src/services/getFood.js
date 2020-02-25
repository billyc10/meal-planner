import * as Secrets from '../secrets/secrets.js'

const baseUrl = Secrets.baseUrl;
const applicationId = Secrets.applicationId;
const apiKey = Secrets.apiKey;

const axios = require('axios');

const getFood = async (foodString) => {
    const endpoint = baseUrl + "/natural/nutrients";
    const headers = {
        'x-app-id': applicationId,
        'x-app-key': apiKey,
        'Content-Type': 'application/json'
    }

    var res = await axios.post(
        endpoint, 
        { query: foodString },
        { headers: headers }
    )

    return res.data.foods;
};

export default getFood;