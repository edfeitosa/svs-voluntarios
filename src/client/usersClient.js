import SVSClient from './_configClient';

const ROUTE = `users/`;
const httpClient = SVSClient._httpClient();

class UserClient {

    async read() {
        const response = await httpClient.get(`/${ROUTE}read.php`);
        return response.data;
    }

    async create(usu_name, usu_cel, usu_email, usu_level) {
        const response = await httpClient.post(
            `/${ROUTE}create.php`,
            {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            },
            {
                data: {
                    usu_name: usu_name,
                    usu_email: usu_email,
                    usu_cel: usu_cel,
                    usu_level: usu_level
                }
            }
        );
        return response.data;
    }
    
}

export default new UserClient();