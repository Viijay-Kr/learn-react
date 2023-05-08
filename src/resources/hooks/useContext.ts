import { IResource } from "../types";
export interface IuseContext extends IResource {
  name: "useContext";
}

export const useContext: IuseContext = {
  name: "useContext",
  description:
    "useContext is a React Hook that lets you read and subscribe to context from your component.",
  example: {
    code: "const value = useContext(SomeContext)",
  },
  usage: [
    {
      title: "Passing data deeply into the tree ",
      href: "https://react.dev/reference/react/useContext#passing-data-deeply-into-the-tree",
    },
    {
      title: "Updating data passed via context ",
      href: "https://react.dev/reference/react/useContext#updating-data-passed-via-context",
    },
    {
      title: "Specifying a fallback default value ",
      href: "https://react.dev/reference/react/useContext#specifying-a-fallback-default-value",
    },
    {
      title: "Overriding context for a part of the tree ",
      href: "https://react.dev/reference/react/useContext#overriding-context-for-a-part-of-the-tree",
    },
    {
      title: "Optimizing re-renders when passing objects and functions ",
      href: "https://react.dev/reference/react/useContext#optimizing-re-renders-when-passing-objects-and-functions",
    },
  ],
  link: "https://react.dev/reference/react/useContext",
};
