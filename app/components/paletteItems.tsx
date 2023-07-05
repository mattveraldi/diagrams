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
  {
    action: "mobile",
    svg: MobileSVG,
    label: "create a mobile element",
  },
  {
    action: "desktop",
    svg: DesktopSVG,
    label: "create a pc element",
  },
  {
    action: "backend",
    svg: BackendSVG,
    label: "create a backend element",
  },
  {
    action: "cloud",
    svg: CloudSVG,
    label: "create a cloud element",
  },
  {
    action: "event",
    svg: EventSVG,
    label: "create an event element",
  },
];
