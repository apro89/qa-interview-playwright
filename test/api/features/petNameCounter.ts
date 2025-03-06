import { IdName } from "../types/util";

export class PetNameCounter {
  private pets: IdName[];

  constructor(pets: IdName[]) {
    this.pets = pets;
  }

  countPetNames(): Record<string, number> {
    return this.pets.reduce((acc, pet) => {
      acc[pet.name] = (acc[pet.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
}
