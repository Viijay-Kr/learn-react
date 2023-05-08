import { IResource } from "../types";
export interface IuseImperativeHandle extends IResource {
  name: "useImperativeHandle";
}

export const useImperativeHandle: IuseImperativeHandle = {
  name: "useImperativeHandle",
  description:
    "useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.",
  example: {
    code: "useImperativeHandle(ref, createHandle, dependencies?)",
  },
  usage: [
    {
      title: "Exposing a custom ref handle to the parent component ",
      href: "https://react.dev/reference/react/useImperativeHandle#exposing-a-custom-ref-handle-to-the-parent-component",
    },
    {
      title: "Exposing your own imperative methods ",
      href: "https://react.dev/reference/react/useImperativeHandle#exposing-your-own-imperative-methods",
    },
  ],
  link: "https://react.dev/reference/react/useImperativeHandle",
};
