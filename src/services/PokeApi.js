import axios from 'axios';

class PokeApiService{

    apiClient = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
        timeout: 10000
    });

    async allPokemons(){
        let response = await this.apiClient.get('/pokemon', {
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

    async getPokemonByName(name){
        try {
            let result = await this.apiClient.get(`/pokemon/${name}`);
            return result.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return null;
            } else {
                throw error;
            }
        }
    }

}

export default new PokeApiService();