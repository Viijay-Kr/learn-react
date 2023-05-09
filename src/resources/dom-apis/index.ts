import { createPortal } from "./createPortal";
import { findDOMNode } from "./findDOMNode";
import { flushSync } from "./flushSync";
import { hydrate } from "./hydrate";
import { render } from "./render";
import { unmountComponentAtNode } from "./unmountComponentAtNode";

export default [
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
];
