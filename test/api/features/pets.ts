import { request } from "@playwright/test";
import { Pet, PetStatus } from "../types/pets";
import { IdName } from "../types/util";

export class PetsClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getPetsByStatus(status: PetStatus) {
    const context = await request.newContext();
    const response = await context.get(
      `${this.baseUrl}/pet/findByStatus?status=${status}`
    );
    return response.json();
  }

  transformPets(pets: Pet[]): IdName[] {
    return pets.map((pet) => ({ id: pet.id, name: pet.name }));
  }
}
