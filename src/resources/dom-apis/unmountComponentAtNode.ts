import { IResource } from "../types";
export interface IunmountComponentAtNode extends IResource {
  name: "unmountComponentAtNode";
}

export const unmountComponentAtNode: IunmountComponentAtNode = {
  name: "unmountComponentAtNode",
  description:
    "unmountComponentAtNode removes a mounted React component from the DOM.",
  example: {
    code: "unmountComponentAtNode(domNode)",
  },
  usage: [
    {
      title: "Removing a React app from a DOM element ",
      href: "https://react.dev/reference/react-dom/unmountComponentAtNode#removing-a-react-app-from-a-dom-element",
    },
  ],
  link: "https://react.dev/reference/react-dom/unmountComponentAtNode",
};
