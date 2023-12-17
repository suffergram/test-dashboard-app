import { ListOption } from "./list-option";

export type Sort = {
  sortBy:
    | ListOption.Name
    | ListOption.Type
    | ListOption.Status
    | ListOption.Site
    | undefined;
  order: "ASC" | "DESC" | undefined;
};
