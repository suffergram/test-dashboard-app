import { ListOption } from "../../types/list-option";
import { Sort } from "../../types/sort";
import { sortRule } from "../../lib/sort-rule";
import { DropDown } from "../drop-down/drop-down";
import "./style.css";

type ListHeaderProps = {
  sort: Sort;
  onSort: React.Dispatch<React.SetStateAction<Sort>>;
};

export function ListHeader({ sort, onSort }: ListHeaderProps) {
  const items = [
    ListOption.Name,
    ListOption.Type,
    ListOption.Status,
    ListOption.Site,
  ];

  const handleClick = (item: ListOption) => {
    onSort(
      (sort) =>
        ({
          sortBy: item,
          order: sort.sortBy === item ? sortRule[`${sort.order}`] : "ASC",
        } as Sort)
    );
  };

  return (
    <header className="list-header">
      {items.map((item) => {
        return (
          <div key={item} className={`list-header-${item.toLowerCase()}`}>
            <div className="list-header-item" onClick={() => handleClick(item)}>
              <button className="list-header-button" value={item} type="button">
                {item}
              </button>
              {sort.sortBy === item ? <DropDown sort={sort} /> : ""}
            </div>
          </div>
        );
      })}
    </header>
  );
}
