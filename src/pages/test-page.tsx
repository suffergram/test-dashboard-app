import { Await, Params, defer, useLoaderData } from "react-router-dom";
import { Test } from "../types/test";
import { getTest } from "../services/getTest";
import { Suspense } from "react";
import { TestInfo } from "../components/test-info/test-info";

type LoaderData = {
  test: Test;
};

type MovieLoaderParams = {
  params: Params;
};

export function TestPage() {
  const { test } = useLoaderData() as LoaderData;

  return (
    <Suspense>
      <Await resolve={test}>
        <TestInfo />
      </Await>
    </Suspense>
  );
}

export const testLoader = async ({ params }: MovieLoaderParams) => {
  const test = getTest(Number(params.testId));

  return defer({ test });
};
