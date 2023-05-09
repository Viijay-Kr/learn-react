import { IResource } from "../types";
export interface IcreateContext extends IResource {
  name: "createContext";
}

export const createContext: IcreateContext = {
  name: "createContext",
  description:
    "createContext lets you create a context that components can provide or read.",
  example: {
    code: "const SomeContext = createContext(defaultValue)",
  },
  usage: [
    {
      title: "Creating context ",
      href: "https://react.dev/reference/react/createContext#creating-context",
    },
    {
      title: "Importing and exporting context from a file ",
      href: "https://react.dev/reference/react/createContext#importing-and-exporting-context-from-a-file",
    },
  ],
  link: "https://react.dev/reference/react/createContext",
};
