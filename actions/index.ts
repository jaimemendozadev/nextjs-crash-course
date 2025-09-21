'use server';
import { generateFakeData } from "@/utils/_mockData";

export const getTodos = async () => {
  const todos = await new Promise((resolve) => {
    setTimeout(() => {
      const fakeData = generateFakeData();
      resolve(fakeData);
    }, 3000);
  });

  return todos;
};