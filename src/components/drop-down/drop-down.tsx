import { Sort } from "../../types/sort";

type DropDownProps = {
  sort: Sort;
};

export function DropDown({ sort }: DropDownProps) {
  switch (sort.order) {
    case "ASC":
      return (
        <svg
          width="8"
          height="8"
          viewBox="0 0 7 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.7637e-07 3.50001L3.13529 0.364715L3.5 7.09765e-06L3.86471 0.364715L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L-1.7637e-07 3.50001Z"
            fill="#999999"
          />
        </svg>
      );
    case "DESC":
      return (
        <svg
          width="8"
          height="8"
          viewBox="0 0 7 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.7637e-07 0.364708L3.13529 3.5L3.5 3.86471L3.86471 3.5L7 0.364708L6.63529 0L3.5 3.13529L0.364708 0L-1.7637e-07 0.364708Z"
            fill="#999999"
          />
        </svg>
      );
    default:
      return <></>;
  }
}
