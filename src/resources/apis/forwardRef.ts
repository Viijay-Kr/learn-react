import { IResource } from "../types";
export interface IforwardRef extends IResource {
  name: "forwardRef";
}

export const forwardRef: IforwardRef = {
  name: "forwardRef",
  description:
    "forwardRef lets your component expose a DOM node to parent component with a ref.",
  example: {
    code: "const SomeComponent = forwardRef(render)",
  },
  usage: [
    {
      title: "Exposing a DOM node to the parent component ",
      href: "https://react.dev/reference/react/forwardRef#exposing-a-dom-node-to-the-parent-component",
    },
    {
      title: "Forwarding a ref through multiple components ",
      href: "https://react.dev/reference/react/forwardRef#forwarding-a-ref-through-multiple-components",
    },
    {
      title: "Exposing an imperative handle instead of a DOM node ",
      href: "https://react.dev/reference/react/forwardRef#exposing-an-imperative-handle-instead-of-a-dom-node",
    },
  ],
  link: "https://react.dev/reference/react/forwardRef",
};
