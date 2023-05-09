import { IResource } from "../types";
export interface IfindDOMNode extends IResource {
  name: "findDOMNode";
}

export const findDOMNode: IfindDOMNode = {
  name: "findDOMNode",
  description:
    "findDOMNode finds the browser DOM node for a React class component instance.",
  example: {
    code: "const domNode = findDOMNode(componentInstance)",
  },
  usage: [
    {
      title: "Finding the root DOM node of a class component ",
      href: "https://react.dev/reference/react-dom/findDOMNode#finding-the-root-dom-node-of-a-class-component",
    },
  ],
  link: "https://react.dev/reference/react-dom/findDOMNode",
};
