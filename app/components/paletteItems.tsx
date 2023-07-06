import {
  BackendSVG,
  CloudSVG,
  CreateUserSVG,
  DatabaseSVG,
  DesktopSVG,
  EventSVG,
  MobileSVG,
} from "./svgs";

interface Item {
  name: string;
  description: string;
  svg: string;
}

export const paletteItems: Item[] = [
  {
    name: "user",
    svg: CreateUserSVG,
    description: "create an user element",
  },
  {
    name: "database",
    svg: DatabaseSVG,
    description: "create a database element",
  },
  {
    name: "mobile",
    svg: MobileSVG,
    description: "create a mobile element",
  },
  {
    name: "desktop",
    svg: DesktopSVG,
    description: "create a pc element",
  },
  {
    name: "backend",
    svg: BackendSVG,
    description: "create a backend element",
  },
  {
    name: "cloud",
    svg: CloudSVG,
    description: "create a cloud element",
  },
  {
    name: "event",
    svg: EventSVG,
    description: "create an event element",
  },
];
