import { IResource } from "../types";
export interface IuseDebugValue extends IResource {
  name: "useDebugValue";
}

export const useDebugValue: IuseDebugValue = {
  name: "useDebugValue",
  description:
    "useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.",
  example: {
    code: "useDebugValue(value, format?)",
  },
  usage: [
    {
      title: "Adding a label to a custom Hook ",
      href: "https://react.dev/reference/react/useDebugValue#adding-a-label-to-a-custom-hook",
    },
    {
      title: "Deferring formatting of a debug value ",
      href: "https://react.dev/reference/react/useDebugValue#deferring-formatting-of-a-debug-value",
    },
  ],
  link: "https://react.dev/reference/react/useDebugValue",
};
