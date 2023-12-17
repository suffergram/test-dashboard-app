import { Sort } from "../../types/sort";
import { Test } from "../../types/test";
import { Button } from "../button/button";
import { ListHeader } from "../list-header/list-header";
import { ListItem } from "../list-item/list-item";
import "./style.css";

type ResultListProps = {
  data?: Test[];
  amount: number;
  sort: Sort;
  onReset: () => void;
  onSort: React.Dispatch<React.SetStateAction<Sort>>;
};

export function ResultList({
  data,
  amount,
  sort,
  onReset,
  onSort,
}: ResultListProps) {
  return (
    <section className="search-result">
      {amount > 0 ? (
        <div className="search-result-container">
          <ListHeader sort={sort} onSort={onSort} />
          <ul className="searh-result-list">
            {data?.map((item: Test) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="search-result-not-found">
          <p className="search-result-not-found-message">
            Your search did not match any results.
          </p>
          <Button type="reset" onClick={onReset} value="Reset" />
        </div>
      )}
    </section>
  );
}
