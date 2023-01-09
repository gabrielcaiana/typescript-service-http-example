import { HttpClient } from '../http';

export class RickAndMortyApi extends HttpClient {
  constructor() {
    super('https://rickandmortyapi.com/api/character');
  }

  async getAllCharacters(): Promise<void> {
    let response = await this.get('/');
    return response.data.results;
  }
}
