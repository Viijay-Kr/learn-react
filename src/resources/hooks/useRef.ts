import { IResource } from "../types";
export interface IuseRef extends IResource {
  name: "useRef";
}

export const useRef: IuseRef = {
  name: "useRef",
  description:
    "useRef is a React Hook that lets you reference a value that’s not needed for rendering.",
  example: {
    code: "const ref = useRef(initialValue)",
  },
  usage: [
    {
      title: "Referencing a value with a ref ",
      href: "https://react.dev/reference/react/useRef#referencing-a-value-with-a-ref",
    },
    {
      title: "Manipulating the DOM with a ref ",
      href: "https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref",
    },
    {
      title: "Avoiding recreating the ref contents ",
      href: "https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents",
    },
  ],
  link: "https://react.dev/reference/react/useRef",
};
