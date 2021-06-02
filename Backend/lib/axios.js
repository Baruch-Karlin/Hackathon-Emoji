const axios = require('axios');

const dsUrl = 'http://0.0.0.0:3000/classify'

const classify = async (url) => {
    const response = await axios.post(
        `${dsUrl}`,
        { url }
    );
    return response.data;
}

exports.classify = classify;


