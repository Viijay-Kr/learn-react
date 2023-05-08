import { IResource } from "../types";
export interface IuseReducer extends IResource {
  name: "useReducer";
}

export const useReducer: IuseReducer = {
  name: "useReducer",
  description:
    "useReducer is a React Hook that lets you add a reducer to your component.",
  example: {
    code: "const [state, dispatch] = useReducer(reducer, initialArg, init?)",
  },
  usage: [
    {
      title: "Adding a reducer to a component ",
      href: "https://react.dev/reference/react/useReducer#adding-a-reducer-to-a-component",
    },
    {
      title: "Writing the reducer function ",
      href: "https://react.dev/reference/react/useReducer#writing-the-reducer-function",
    },
    {
      title: "Avoiding recreating the initial state ",
      href: "https://react.dev/reference/react/useReducer#avoiding-recreating-the-initial-state",
    },
  ],
  link: "https://react.dev/reference/react/useReducer",
};
