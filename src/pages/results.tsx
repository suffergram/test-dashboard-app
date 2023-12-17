import { Main } from "../components/main/main";
import { useGetSites } from "../hooks/useGetSites";
import { useGetTests } from "../hooks/useGetTests";

export function Results() {
  const tests = useGetTests();
  const sites = useGetSites();

  return (
    <>
      <h1 className="main-title">{"Results"}</h1>
      <Main
        tests={tests?.filter((test) => test.status !== "DRAFT")}
        sites={sites}
      />
    </>
  );
}
