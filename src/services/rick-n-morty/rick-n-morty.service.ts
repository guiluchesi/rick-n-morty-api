import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { CharacterDto } from './character.dto';
import { EpisodeDto } from './episode.dto';

@Injectable()
export class RickNMortyService {
  async listCharacters(page = 1): Promise<CharacterDto[]> {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );

    const charecters = response.data.results;
    return charecters;
  }

  async getCharacterDetails(characterId: number): Promise<CharacterDto> {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`,
    );

    const characterDetails = response.data;
    return characterDetails;
  }

  async getEpisodeDetailsByUrl(episodeUrl: string): Promise<EpisodeDto> {
    const response = await axios.get(episodeUrl);
    const characterDetails = response.data;
    return characterDetails;
  }
}
