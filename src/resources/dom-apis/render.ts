import { IResource } from "../types";
export interface Irender extends IResource {
  name: "render";
}

export const render: Irender = {
  name: "render",
  description:
    "render renders a piece of JSX (“React node”) into a browser DOM node.",
  example: {
    code: "render(reactNode, domNode, callback?)",
  },
  usage: [
    {
      title: "Rendering the root component ",
      href: "https://react.dev/reference/react-dom/render#rendering-the-root-component",
    },
    {
      title: "Rendering multiple roots ",
      href: "https://react.dev/reference/react-dom/render#rendering-multiple-roots",
    },
    {
      title: "Updating the rendered tree ",
      href: "https://react.dev/reference/react-dom/render#updating-the-rendered-tree",
    },
  ],
  link: "https://react.dev/reference/react-dom/render",
};
