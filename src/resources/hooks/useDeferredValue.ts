import { IResource } from "../types";
export interface IuseDeferredValue extends IResource {
  name: "useDeferredValue";
}

export const useDeferredValue: IuseDeferredValue = {
  name: "useDeferredValue",
  description:
    "useDeferredValue is a React Hook that lets you defer updating a part of the UI.",
  example: {
    code: "const deferredValue = useDeferredValue(value)",
  },
  usage: [
    {
      title: "Showing stale content while fresh content is loading ",
      href: "https://react.dev/reference/react/useDeferredValue#showing-stale-content-while-fresh-content-is-loading",
    },
    {
      title: "Indicating that the content is stale ",
      href: "https://react.dev/reference/react/useDeferredValue#indicating-that-the-content-is-stale",
    },
    {
      title: "Deferring re-rendering for a part of the UI ",
      href: "https://react.dev/reference/react/useDeferredValue#deferring-re-rendering-for-a-part-of-the-ui",
    },
  ],
  link: "https://react.dev/reference/react/useDeferredValue",
};
