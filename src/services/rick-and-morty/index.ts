import { HttpClient } from '../http';

export class RickAndMortyApi extends HttpClient {
  constructor() {
    super('https://rickandmortyapi.com/api');
  }

  async getAllCharacters(): Promise<void> {
    let response = await this.get('/character');
    return response.data.results;
  }
}
