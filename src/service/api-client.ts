import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b0fe6b8d293941ac9bc53720dba5af11'
    }
})