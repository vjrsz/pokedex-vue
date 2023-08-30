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
                limit: 100
            }
        })
            
        let results = await response.data.results.map(async pokemon => {
            pokemmon.status = await this.find(pokemon.url);
        })

        response.data.results = results
        
        return response.data
    }

    async find(url){
        let result = await this.apiClient.get(url)

        return result.data
    }
}

export default new PokeApiService();