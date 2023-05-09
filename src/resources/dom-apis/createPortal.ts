import { IResource } from "../types";
export interface IcreatePortal extends IResource {
  name: "createPortal";
}

export const createPortal: IcreatePortal = {
  name: "createPortal",
  description:
    "createPortal lets you render some children into a different part of the DOM.",
  example: {
    code: "<div>  <SomeComponent />  {createPortal(children, domNode, key?)}</div>",
  },
  usage: [
    {
      title: "Rendering to a different part of the DOM ",
      href: "https://react.dev/reference/react-dom/createPortal#rendering-to-a-different-part-of-the-dom",
    },
    {
      title: "Rendering a modal dialog with a portal ",
      href: "https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal",
    },
    {
      title: "Rendering React components into non-React server markup ",
      href: "https://react.dev/reference/react-dom/createPortal#rendering-react-components-into-non-react-server-markup",
    },
    {
      title: "Rendering React components into non-React DOM nodes ",
      href: "https://react.dev/reference/react-dom/createPortal#rendering-react-components-into-non-react-dom-nodes",
    },
  ],
  link: "https://react.dev/reference/react-dom/createPortal",
};
