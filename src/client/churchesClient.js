import SVSClient from './_configClient';

const ROUTE = `churches/`;
const httpClient = SVSClient._httpClient();

class ChurchesClient {

    async read() {
        const response = await httpClient.get(`/${ROUTE}read.php`);
        return response.data;
    }

    async create(chu_name, chu_address, chu_city, chu_state) {
        console.log('aqui é na função')
        const response = await httpClient.post(
            `/${ROUTE}create.php`,
            {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            },
            {
                data: {
                    chu_name: chu_name,
                    chu_address: chu_address,
                    chu_city: chu_city,
                    chu_state: chu_state
                }
            }
        );
        return response.data;
    }
    
}

export default new ChurchesClient();