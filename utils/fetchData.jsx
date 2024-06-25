import { cache } from "react";
import axios from 'axios';

const fetchData = cache(async (url) => {
    const response = await axios.get(url);
    return response.data;
});

export default fetchData;

