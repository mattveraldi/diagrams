import { CreateUserSVG } from "./svgs";

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
];
