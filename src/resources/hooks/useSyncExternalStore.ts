import { IResource } from "../types";
export interface IuseSyncExternalStore extends IResource {
  name: "useSyncExternalStore";
}

export const useSyncExternalStore: IuseSyncExternalStore = {
  name: "useSyncExternalStore",
  description:
    "useSyncExternalStore is a React Hook that lets you subscribe to an external store.",
  example: {
    code: "const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)",
  },
  usage: [
    {
      title: "Subscribing to an external store ",
      href: "https://react.dev/reference/react/useSyncExternalStore#subscribing-to-an-external-store",
    },
    {
      title: "Subscribing to a browser API ",
      href: "https://react.dev/reference/react/useSyncExternalStore#subscribing-to-a-browser-api",
    },
    {
      title: "Extracting the logic to a custom Hook ",
      href: "https://react.dev/reference/react/useSyncExternalStore#extracting-the-logic-to-a-custom-hook",
    },
    {
      title: "Adding support for server rendering ",
      href: "https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering",
    },
  ],
  link: "https://react.dev/reference/react/useSyncExternalStore",
};
