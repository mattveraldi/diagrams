import { CreateUserSVG, DatabaseSVG } from "./svgs";

interface Item {
  action: string;
  svg: React.ReactElement;
  label: string;
}

export const paletteItems: Item[] = [
  {
    action: "user",
    svg: CreateUserSVG,
    label: "create an user element",
  },
  {
    action: "database",
    svg: DatabaseSVG,
    label: "create a database element",
  },
];
