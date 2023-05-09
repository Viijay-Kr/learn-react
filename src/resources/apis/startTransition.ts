import { IResource } from "../types";
export interface IstartTransition extends IResource {
  name: "startTransition";
}

export const startTransition: IstartTransition = {
  name: "startTransition",
  description:
    "startTransition lets you update the state without blocking the UI.",
  example: {
    code: "startTransition(scope)",
  },
  usage: [
    {
      title: "Marking a state update as a non-blocking transition ",
      href: "https://react.dev/reference/react/startTransition#marking-a-state-update-as-a-non-blocking-transition",
    },
  ],
  link: "https://react.dev/reference/react/startTransition",
};
