import apis from "./apis";
import components from "./components";
import domApis from "./dom-apis";
import hooks from "./hooks";

export interface IResource {
  name: string;
  description: string;
  example: {
    code: string;
  };
  usage: Array<{
    title: string;
    href: string;
  }>;
  link: string;
}

export type Hooks = (typeof hooks)[number];
export type Components = (typeof components)[number];
export type Apis = (typeof apis)[number];
export type DomApis = (typeof domApis)[number];

export type Resources = Hooks | Components | Apis | DomApis;
