import { host } from "../../lib/host";

export async function getTests() {
  try {
    const response = await fetch(`${host}/tests`);

    return await response.json();
  } catch (error) {}
}
