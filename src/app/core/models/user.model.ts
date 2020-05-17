export class User {
  constructor(
    private tfToken: string,
    private role: string
  ) {}

  get token() {
    return this.tfToken;
  }

}
