import axios from "axios";
const BASE_URL = "http://localhost:3000";
export const fetchDataFromApi = async (url, params, method = 'GET') => {
    try {
        const {data} = await axios({
            url: BASE_URL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json', // set the content type to JSON
            },
            data: JSON.stringify(params)
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}