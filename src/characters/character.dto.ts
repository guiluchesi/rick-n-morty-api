export class CharacterDto {
  id: number;
  name: string;
  status: string;
  species: string;
  location: string;
  image: string;
  firstSeen: string;
}

export class CharacterDetailsDto {
  id: number;
  name: string;
  status: string;
  species: string;
  location: string;
  image: string;
  episodes: {
    id: number;
    name: string;
    episode: string;
  }[];
}

export class CharactersCountDto {
  charactersCount: number;
}
