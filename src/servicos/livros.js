import axios from 'axios';


const livrosAPI= axios.create({baseURL: import.meta.env.VITE_API_BASE_URL + '/livros'});

async function getLivros(){
    const response = await livrosAPI.get('/');

    return response.data
}

export {
    getLivros
}
