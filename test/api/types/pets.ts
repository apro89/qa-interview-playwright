export type PetStatus = "available" | "pending" | "sold";

export interface Pet {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: [
    {
      id: 0;
      name: string;
    }
  ];
  status: PetStatus;
}
