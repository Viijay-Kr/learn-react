import { IResource } from "../types";
export interface IStrictMode extends IResource {
  name: "StrictMode";
}

export const StrictMode: IStrictMode = {
  name: "StrictMode",
  description:
    "<StrictMode> lets you find common bugs in your components early during development.",
  example: {
    code: "<StrictMode>  <App /></StrictMode>",
  },
  usage: [
    {
      title: "Enabling Strict Mode for entire app ",
      href: "https://react.dev/reference/react/StrictMode#enabling-strict-mode-for-entire-app",
    },
    {
      title: "Enabling strict mode for a part of the app ",
      href: "https://react.dev/reference/react/StrictMode#enabling-strict-mode-for-a-part-of-the-app",
    },
    {
      title: "Fixing bugs found by double rendering in development ",
      href: "https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development",
    },
    {
      title: "Fixing bugs found by re-running Effects in development ",
      href: "https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development",
    },
    {
      title: "Fixing deprecation warnings enabled by Strict Mode ",
      href: "https://react.dev/reference/react/StrictMode#fixing-deprecation-warnings-enabled-by-strict-mode",
    },
  ],
  link: "https://react.dev/reference/react/StrictMode",
};
