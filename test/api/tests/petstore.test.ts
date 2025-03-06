import { test } from "@playwright/test";

import { BASE_URL } from "../utils";
import { PetsClient } from "../features/pets";
import { PetNameCounter } from "../features/petNameCounter";

let petsClient;
let soldPets;

test.beforeAll(async () => {
  petsClient = new PetsClient(BASE_URL);
  soldPets = await petsClient.getPetsByStatus("sold");
});

test("Get sold pets and return id and name", async () => {
  const transformedPets = petsClient.transformPets(soldPets);
  console.log("Sold Pets:", transformedPets);
});

test("Get repeated names of the pets with amount", async () => {
  const petCounter = new PetNameCounter(soldPets);
  const petNameCounts = petCounter.countPetNames();
  console.log("Pet Name Counts:", petNameCounts);
});
