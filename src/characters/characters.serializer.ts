import { CharacterDto as ServiceCharacterDto } from '../services/rick-n-morty/character.dto';
import { EpisodeDto as ServiceEpisodeDto } from '../services/rick-n-morty/episode.dto';
import { CharacterDto, CharacterDetailsDto } from './character.dto';

export const listCharactersSerializer = (
  characters: ServiceCharacterDto[],
): CharacterDto[] => {
  return characters.map(
    (character: ServiceCharacterDto): CharacterDto => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.status,
      location: character.location.name,
      image: character.image,
      firstSeen: character.episode[0],
    }),
  );
};

export const characterDetailsSerializer = (
  character: ServiceCharacterDto,
  episodes: ServiceEpisodeDto[],
): CharacterDetailsDto => {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    location: character.location.name,
    image: character.image,
    episodes: episodes.map((episode: ServiceEpisodeDto) => ({
      id: episode.id,
      name: episode.name,
      episode: episode.episode,
    })),
  };
};
