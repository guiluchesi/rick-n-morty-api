import { CharactersController } from './characters.controller';
import { RickNMortyService } from '../services/rick-n-morty/rick-n-morty.service';
import { entities } from '../../__test__';

describe('CharactersController', () => {
  let controller: CharactersController;
  let rickNMortyService: RickNMortyService;

  beforeAll(async () => {
    rickNMortyService = new RickNMortyService();
    controller = new CharactersController(rickNMortyService);
  });

  beforeEach(jest.clearAllMocks);

  describe('listCharacters', () => {
    it('should call the listCharacter service method with page number', async () => {
      // Arrange
      const page = 1;
      const listCharactersSpy = jest.spyOn(rickNMortyService, 'listCharacters');
      listCharactersSpy.mockResolvedValue([]);

      // Act
      await controller.listCharacters(page);

      // Assert
      expect(listCharactersSpy).toHaveBeenCalledTimes(1);
      expect(listCharactersSpy).toHaveBeenCalledWith(page);
    }, 1000);

    it('should throws an error if the service fails', async () => {
      // Arrange
      const page = 1;
      const serviceError = new Error('Service error');
      const listCharactersSpy = jest.spyOn(rickNMortyService, 'listCharacters');
      listCharactersSpy.mockRejectedValue(serviceError);

      // Act
      const thrownExecution = () => controller.listCharacters(page);

      // Assert
      await expect(thrownExecution).rejects.toThrow(serviceError);
    });

    it('should serialize the result from api and return it', async () => {
      // Arrange
      const page = 1;
      const charecterList = [entities.character];

      const listCharactersSpy = jest.spyOn(rickNMortyService, 'listCharacters');
      listCharactersSpy.mockResolvedValue(charecterList);

      // Act
      const charecters = await controller.listCharacters(page);

      // Assert
      expect(charecters).toEqual([entities.serializedCharacter]);
    });
  });

  // TO-DO: test for countCharacters
  // describe('countCharacters', () => {});

  // TO-DO: test for getCharacterDetails
  // describe('getCharacterDetails', () => {});
});
