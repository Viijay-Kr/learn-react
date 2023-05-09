import { IResource } from "../types";
export interface IFragment extends IResource {
  name: "Fragment";
}

export const Fragment: IFragment = {
  name: "Fragment",
  description:
    "<Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.",
  example: {
    code: "<>  <OneChild />  <AnotherChild /></>",
  },
  usage: [
    {
      title: "Returning multiple elements ",
      href: "https://react.dev/reference/react/Fragment#returning-multiple-elements",
    },
    {
      title: "Assigning multiple elements to a variable ",
      href: "https://react.dev/reference/react/Fragment#assigning-multiple-elements-to-a-variable",
    },
    {
      title: "Grouping elements with text ",
      href: "https://react.dev/reference/react/Fragment#grouping-elements-with-text",
    },
    {
      title: "Rendering a list of Fragments ",
      href: "https://react.dev/reference/react/Fragment#rendering-a-list-of-fragments",
    },
  ],
  link: "https://react.dev/reference/react/Fragment",
};
