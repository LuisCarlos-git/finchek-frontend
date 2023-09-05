export class ContextProviderExeption extends Error {
  constructor({
    hookName,
    providerName
  }: {
    hookName: string;
    providerName: string;
  }) {
    super();
    this.name = 'ContextProviderExeption';
    this.message = `${hookName} must be used within ${providerName}`;
  }
}
