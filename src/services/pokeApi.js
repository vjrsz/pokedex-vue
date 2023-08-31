import axios from 'axios';

class PokeApiService{

    apiClient = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon',
        timeout: 10000
    });

    async all(){
        let response = await this.apiClient.get('/', {
            params: {
                offset: 20,
                limit: 20
            }
        })

        response.data.results = await Promise.all(response.data.results.map(async pokemon => {
            pokemon.status = await this.find(pokemon.url);
            return pokemon;
        }))

        return response.data
    }

    async find(url){
        let result = await this.apiClient.get(url)

        return result.data
    }
}

export default new PokeApiService();