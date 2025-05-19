import axios from 'axios';


const livrosAPI= axios.create({baseURL: 'https://alurabooks-server.onrender.com/livros'});

async function getLivros(){
    const response = await livrosAPI.get('/');

    return response.data
}

export {
    getLivros
}
