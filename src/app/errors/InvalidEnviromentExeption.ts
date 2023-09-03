export class InvalidEnviromentExeption extends Error {
  constructor() {
    super();
    this.name = 'InvalidEnviromentExeption';
    this.message = 'Invalid enviroment variables';
  }
}
