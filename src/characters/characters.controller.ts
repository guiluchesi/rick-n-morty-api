import { Controller, Get, Query, Param } from '@nestjs/common';

import { RickNMortyService } from '../services/rick-n-morty/rick-n-morty.service';
import {
  listCharactersSerializer,
  characterDetailsSerializer,
} from './characters.serializer';
import { CharacterDto } from './character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly rickNMortyService: RickNMortyService) {}

  @Get()
  async listCharacters(@Query('page') page: number): Promise<CharacterDto[]> {
    const apiCharacters = await this.rickNMortyService.listCharacters(page);
    const characters = listCharactersSerializer(apiCharacters);
    return characters;
  }

  @Get(':id')
  async getCharacterDetails(@Param('id') id: number): Promise<any> {
    const apiCharacterDetails =
      await this.rickNMortyService.getCharacterDetails(id);

    const episodesDetailsPromises = apiCharacterDetails.episode.map(
      this.rickNMortyService.getEpisodeDetailsByUrl,
    );
    const episodeDetails = await Promise.all(episodesDetailsPromises);

    const characterDetails = characterDetailsSerializer(
      apiCharacterDetails,
      episodeDetails,
    );

    return characterDetails;
  }
}
