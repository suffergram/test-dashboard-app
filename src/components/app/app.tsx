import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard } from "../../pages/dashboard";
import { Finalize } from "../../pages/finalize";
import { Results } from "../../pages/results";
import { Layout } from "../layout/layout";
import { TestPage, testLoader } from "../../pages/test-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="finalize" element={<Finalize />} />
      <Route path="results" element={<Results />} />
      <Route
        path="results/:testId"
        element={<TestPage />}
        loader={testLoader}
      />
      <Route
        path="finalize/:testId"
        element={<TestPage />}
        loader={testLoader}
      />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
