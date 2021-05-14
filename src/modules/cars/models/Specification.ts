import { v4 as uuidv4 } from 'uuid';

class Specification {
  public id?: string;
  public name: string;
  public description: string;
  public createdAt?: Date;

  constructor(name: string, description: string) {
    if(!this.id) {
      this.id = uuidv4();
    }

    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }
}

export { Specification };