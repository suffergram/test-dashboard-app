import { host } from "../../lib/host";

export async function getSites() {
  try {
    const response = await fetch(`${host}/sites`);

    return await response.json();
  } catch (error) {}
}
