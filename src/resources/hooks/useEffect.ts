import { IResource } from "../types";
export interface IuseEffect extends IResource {
  name: "useEffect";
}

export const useEffect: IuseEffect = {
  name: "useEffect",
  description:
    "useEffect is a React Hook that lets you synchronize a component with an external system.",
  example: {
    code: "useEffect(setup, dependencies?)",
  },
  usage: [
    {
      title: "Connecting to an external system ",
      href: "https://react.dev/reference/react/useEffect#connecting-to-an-external-system",
    },
    {
      title: "Wrapping Effects in custom Hooks ",
      href: "https://react.dev/reference/react/useEffect#wrapping-effects-in-custom-hooks",
    },
    {
      title: "Controlling a non-React widget ",
      href: "https://react.dev/reference/react/useEffect#controlling-a-non-react-widget",
    },
    {
      title: "Fetching data with Effects ",
      href: "https://react.dev/reference/react/useEffect#fetching-data-with-effects",
    },
    {
      title: "Specifying reactive dependencies ",
      href: "https://react.dev/reference/react/useEffect#specifying-reactive-dependencies",
    },
    {
      title: "Updating state based on previous state from an Effect ",
      href: "https://react.dev/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect",
    },
    {
      title: "Removing unnecessary object dependencies ",
      href: "https://react.dev/reference/react/useEffect#removing-unnecessary-object-dependencies",
    },
    {
      title: "Removing unnecessary function dependencies ",
      href: "https://react.dev/reference/react/useEffect#removing-unnecessary-function-dependencies",
    },
    {
      title: "Reading the latest props and state from an Effect ",
      href: "https://react.dev/reference/react/useEffect#reading-the-latest-props-and-state-from-an-effect",
    },
    {
      title: "Displaying different content on the server and the client ",
      href: "https://react.dev/reference/react/useEffect#displaying-different-content-on-the-server-and-the-client",
    },
  ],
  link: "https://react.dev/reference/react/useEffect",
};
