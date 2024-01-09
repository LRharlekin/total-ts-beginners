import { expect, it } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/* Abstracted into types instead of inline function typeing */
// type CreateUser = () => Promise<string>;
// type GetUser = (userId: string) => Promise<User>;

const createThenGetUser = async (
  createUser: () => Promise<string>,
  // createUser: CreateUser,
  getUser: (id: string) => Promise<User>
  // getUser: GetUser
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Matt",
      lastName: "Pocock",
    })
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Matt",
    lastName: "Pocock",
  });
});
