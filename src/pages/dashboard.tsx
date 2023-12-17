import { Main } from "../components/main/main";
import { useGetSites } from "../hooks/useGetSites";
import { useGetTests } from "../hooks/useGetTests";

export function Dashboard() {
  const tests = useGetTests();
  const sites = useGetSites();

  return (
    <>
      <h1 className="main-title">{"Dashboard"}</h1>
      <Main tests={tests} sites={sites} />
    </>
  );
}
