import { IResource } from "../types";
export interface IuseState extends IResource {
  name: "useState";
}

export const useState: IuseState = {
  name: "useState",
  description:
    "useState is a React Hook that lets you add a state variable to your component.",
  example: {
    code: "const [state, setState] = useState(initialState);",
  },
  usage: [
    {
      title: "Adding state to a component ",
      href: "https://react.dev/reference/react/useState#adding-state-to-a-component",
    },
    {
      title: "Updating state based on the previous state ",
      href: "https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state",
    },
    {
      title: "Updating objects and arrays in state ",
      href: "https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state",
    },
    {
      title: "Avoiding recreating the initial state ",
      href: "https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state",
    },
    {
      title: "Resetting state with a key ",
      href: "https://react.dev/reference/react/useState#resetting-state-with-a-key",
    },
    {
      title: "Storing information from previous renders ",
      href: "https://react.dev/reference/react/useState#storing-information-from-previous-renders",
    },
  ],
  link: "https://react.dev/reference/react/useState",
};
