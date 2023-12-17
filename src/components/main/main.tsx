import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ResultList } from "../result-list/result-list";
import { Search } from "../search/search";
import { Sort } from "../../types/sort";
import { ListOption } from "../../types/list-option";
import { testStatus } from "../../lib/test-status";
import { Test } from "../../types/test";
import { Site } from "../../types/site";
import "./style.css";

type MainProps = {
  tests: Test[] | undefined;
  sites: Site[] | undefined;
};

export function Main({ tests, sites }: MainProps) {
  const [data, setData] = useState(tests);
  const amount = data?.length ?? 0;

  const [searchValue, setSearchValue] = useState<string>("");

  const [sort, setSort] = useState<Sort>({
    sortBy: undefined,
    order: undefined,
  });

  useEffect(() => {
    tests?.forEach((test) => {
      if (!test.site) {
        test.site = sites
          ?.filter((site) => site.id === test.siteId)[0]
          .url.replace(/(https?:\/\/|www\.)/gi, "");
      }
    });

    const newData = tests?.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (sort.sortBy)
      newData?.sort(
        (a: { [index: string]: any }, b: { [index: string]: any }) => {
          if (!sort.sortBy) return 0;
          const left = a[sort.sortBy.toLowerCase()].charCodeAt(0);
          const right = b[sort.sortBy.toLowerCase()].charCodeAt(0);
          switch (sort.order) {
            case "ASC":
              return sort.sortBy === ListOption.Status
                ? testStatus[a.status].weight - testStatus[b.status].weight
                : left - right;

            default:
              return sort.sortBy === ListOption.Status
                ? testStatus[b.status].weight - testStatus[a.status].weight
                : right - left;
          }
        }
      );

    setData(newData);
  }, [searchValue, tests, sites, sort]);

  const handleChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setData(tests);
    setSearchValue("");
  };

  return (
    <>
      <form className="main-form" onSubmit={handleSubmit}>
        <Search
          amount={amount}
          onChange={handleChangeData}
          searchValue={searchValue}
        />
        <ResultList
          amount={amount}
          data={data}
          sort={sort}
          onReset={handleReset}
          onSort={setSort}
        />
      </form>
    </>
  );
}
