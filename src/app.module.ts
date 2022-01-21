import { Module } from '@nestjs/common';

import { CharactersController } from './characters/characters.controller';
import { RickNMortyService } from './services/rick-n-morty/rick-n-morty.service';

@Module({
  imports: [],
  controllers: [CharactersController],
  providers: [RickNMortyService],
})
export class AppModule {}
