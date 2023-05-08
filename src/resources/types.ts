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

export type Components = unknown;

export type Apis = unknown;

export type Hooks = (typeof hooks)[number];

export type Resources = Hooks;
