import { IResource } from "../types";
export interface IflushSync extends IResource {
  name: "flushSync";
}

export const flushSync: IflushSync = {
  name: "flushSync",
  description:
    "flushSync lets you force React to flush any updates inside the provided callback synchronously. This ensures that the DOM is updated immediately.",
  example: {
    code: "flushSync(callback)",
  },
  usage: [
    {
      title: "Flushing updates for third-party integrations ",
      href: "https://react.dev/reference/react-dom/flushSync#flushing-updates-for-third-party-integrations",
    },
  ],
  link: "https://react.dev/reference/react-dom/flushSync",
};
