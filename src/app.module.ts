import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CharactersController } from './characters/characters.controller';
import { RickNMortyService } from './services/rick-n-morty/rick-n-morty.service';

@Module({
  imports: [],
  controllers: [AppController, CharactersController],
  providers: [RickNMortyService],
})
export class AppModule {}
