import { request } from "@playwright/test";
import { User } from "../types/user";

export class UserClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async createUser(user: User) {
    const context = await request.newContext();
    const response = await context.post(`${this.baseUrl}/user`, {
      data: user,
    });
    return response.json();
  }

  async getUser(username: string) {
    const context = await request.newContext();
    const response = await context.get(`${this.baseUrl}/user/${username}`);
    return response.json();
  }
}
