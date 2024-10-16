import { auth } from "@clerk/nextjs";

const adminIds = ["user_2m6wLOGPsuNg7CuO7KHp5Ou9fte"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
