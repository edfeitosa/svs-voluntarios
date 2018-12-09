import SVSClient from './_configClient';

const ROUTE = `departments/`;
const httpClient = SVSClient._httpClient();

class DepartmentsClient {

    async read() {
        const response = await httpClient.get(`/${ROUTE}read.php`);
        return response.data;
    }

    async create(dep_name) {
        const response = await httpClient.post(
            `/${ROUTE}create.php`,
            {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            },
            {
                data: {
                    dep_name: dep_name
                }
            }
        );
        return response.data;
    }
    
}

export default new DepartmentsClient();