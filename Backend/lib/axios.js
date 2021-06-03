const axios = require('axios');

const dsUrl = 'http://172.16.1.70:3333/predict'

const classify = async (url) => {
    const response = await axios.get(
        `${dsUrl}`,
        {
            params: {
                url: url
            }
        }
    );
    return response.data;
}

exports.classify = classify;


