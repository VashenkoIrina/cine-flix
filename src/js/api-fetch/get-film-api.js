import {API_KEY, BASE_URL, MEDIA_TYPE} from '../utils/constants';

const axios = require('axios').default;
export { getData };

const  options = {
    responseType: 'stream',
    api_key: API_KEY,
}

async function getData(id) {
    try {
        const response = await axios.get(`${BASE_URL}/${MEDIA_TYPE}/${id}`, {
            params: options
        });
        const muvie = response.data;
        return muvie;
    } catch (error) {
        console.log(error);
    }
}