import { test, expect } from "@playwright/test";
import { User } from "../types/user";
import { UserClient } from "../features/user";
import { BASE_URL } from "../utils";

test("Create user test", async () => {
  const userClient = new UserClient(BASE_URL);
  const user: User = {
    id: 1,
    username: "testuser",
    firstName: "John",
    lastName: "Doe",
    email: "test@example.com",
    password: "password",
    phone: "3333333",
    userStatus: 0,
  };
  await userClient.createUser(user);
  const fetchedUser = await userClient.getUser(user.username);
  expect(fetchedUser.username).toBe(user.username);
});
