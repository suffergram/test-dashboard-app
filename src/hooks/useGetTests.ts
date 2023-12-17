import { useEffect, useState } from "react";
import { getTests } from "../components/services/getTests";
import { Test } from "../types/test";

export function useGetTests() {
  const [tests, setTests] = useState<Array<Test>>();

  useEffect(() => {
    getTests().then(setTests);
  }, []);

  return tests;
}
