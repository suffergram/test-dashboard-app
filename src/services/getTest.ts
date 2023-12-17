import { host } from "../lib/host";

export async function getTest(testId: number) {
  try {
    const response = await fetch(`${host}/tests/${testId}`);

    return await response.json();
  } catch (error) {}
}
