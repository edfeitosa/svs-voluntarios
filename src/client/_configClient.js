import axios from 'axios';

const MAX_CONTENT_LENGTH = 50 * 1024 * 1024;

class SVSClient {

    _httpClient() {
        const svsHttpClient = axios.create({
            baseURL: 'http://localhost:85/svs/api/'
        });
        const token = '';
        svsHttpClient.defaults.headers.common.Authorization = `svs ${token}`;
        svsHttpClient.defaults.timeout = 30000;
        svsHttpClient.defaults.maxContentLength = MAX_CONTENT_LENGTH;
        svsHttpClient.defaults.responseType = 'json';
        return svsHttpClient;
    }
}

export default new SVSClient();