import { IResource } from "../types";
export interface IProfiler extends IResource {
  name: "Profiler";
}

export const Profiler: IProfiler = {
  name: "Profiler",
  description:
    "<Profiler> lets you measure rendering performance of a React tree programmatically.",
  example: {
    code: "<Profiler id='App' onRender={onRender}>  <App /></Profiler>",
  },
  usage: [
    {
      title: "Measuring rendering performance programmatically ",
      href: "https://react.dev/reference/react/Profiler#measuring-rendering-performance-programmatically",
    },
    {
      title: "Measuring different parts of the application ",
      href: "https://react.dev/reference/react/Profiler#measuring-different-parts-of-the-application",
    },
  ],
  link: "https://react.dev/reference/react/Profiler",
};
