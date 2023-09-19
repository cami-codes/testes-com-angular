import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    // Antes de iniciar cada service, reseta o service
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should return the number of generated IDs when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should generate id when called with prefix`, () => {
    // blablabla should blablabla when blablabla
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    // expect(true).toBeTrue(); // Tipo literal: exemplo = const x = true;
    // expect(true).toBe(true); // Compara se um valor é igual ao outro
    // expect(true).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set(); // o Set não aceita strings duplicadas
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '1'];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`) // Saber exatamente onde está falhando
      .toThrow(); // o método toThrow() necessita que o método a ser chamado seja embrulhado por uma função
    });
  });
});
