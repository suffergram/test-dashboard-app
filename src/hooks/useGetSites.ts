import { useEffect, useState } from "react";
import { getSites } from "../components/services/getSites";
import { Site } from "../types/site";

export function useGetSites() {
  const [sites, setSites] = useState<Array<Site>>();

  useEffect(() => {
    getSites().then(setSites);
  }, []);

  return sites;
}
