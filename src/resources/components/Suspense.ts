import { IResource } from "../types";
export interface ISuspense extends IResource {
  name: "Suspense";
}

export const Suspense: ISuspense = {
  name: "Suspense",
  description:
    "<Suspense> lets you display a fallback until its children have finished loading.",
  example: {
    code: "<Suspense fallback={<Loading />}>  <SomeComponent /></Suspense>",
  },
  usage: [
    {
      title: "Displaying a fallback while content is loading ",
      href: "https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading",
    },
    {
      title: "Revealing content together at once ",
      href: "https://react.dev/reference/react/Suspense#revealing-content-together-at-once",
    },
    {
      title: "Revealing nested content as it loads ",
      href: "https://react.dev/reference/react/Suspense#revealing-nested-content-as-it-loads",
    },
    {
      title: "Showing stale content while fresh content is loading ",
      href: "https://react.dev/reference/react/Suspense#showing-stale-content-while-fresh-content-is-loading",
    },
    {
      title: "Preventing already revealed content from hiding ",
      href: "https://react.dev/reference/react/Suspense#preventing-already-revealed-content-from-hiding",
    },
    {
      title: "Indicating that a transition is happening ",
      href: "https://react.dev/reference/react/Suspense#indicating-that-a-transition-is-happening",
    },
    {
      title: "Resetting Suspense boundaries on navigation ",
      href: "https://react.dev/reference/react/Suspense#resetting-suspense-boundaries-on-navigation",
    },
    {
      title: "Providing a fallback for server errors and server-only content ",
      href: "https://react.dev/reference/react/Suspense#providing-a-fallback-for-server-errors-and-server-only-content",
    },
  ],
  link: "https://react.dev/reference/react/Suspense",
};
