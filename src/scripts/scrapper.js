const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { writeFile, writeFileSync } = require("fs");
const fsPath = require("path");
const { JSDOM } = jsdom;

const hooks = [
  "useCallback",
  "useContext",
  "useDebugValue",
  "useDeferredValue",
  "useEffect",
  "useId",
  "useImperativeHandle",
  "useInsertionEffect",
  "useLayoutEffect",
  "useMemo",
  "useReducer",
  "useRef",
  "useState",
  "useSyncExternalStore",
  "useTransition",
];

const components = ["Fragment", "Profiler", "StrictMode", "Suspense"];

const apis = ["createContext", "forwardRef", "lazy", "memo", "startTransition"];

const domApis = [
  "createPortal",
  "flushSync",
  "findDOMNode",
  "hydrate",
  "render",
  "unmountComponentAtNode",
];

async function main() {
  // await Promise.all(hooks.map(createResource("hooks")));
  // await Promise.all(
  //   components.map(
  //     createResource("components", (article) => {
  //       const cmlines = article.querySelector(".cm-line");
  //       return cmlines?.parentElement?.textContent;
  //     })
  //   )
  // );
  // // await Promise.all(apis.map(createResource("apis")));
  await Promise.all(
    domApis.map(
      createResource({
        dir: "dom-apis",
        path: "react-dom",
        getExampleCode: (article) => {
          const cmlines = article.querySelector(".cm-line");
          return cmlines?.parentElement?.textContent;
        },
      })
    )
  );
}

const createResource =
  ({
    dir,
    getExampleCode = (article) => {
      const cmlines = article.querySelector(".cm-line");
      let exampleCode = cmlines?.textContent;
      return exampleCode;
    },
    path,
  }) =>
  async (resource) => {
    try {
      const response = await fetch(
        `https://react.dev/reference/${path}/${resource}`
      );
      const body = await response.text();
      const dom = new JSDOM(body);

      const article = dom.window.document.querySelector("article");
      const code = article.querySelector("code");
      const imports = `import { IResource } from "../types";`;
      const interface = `export interface I${resource} extends IResource {
      name: "${resource}",
    };`;

      const name = resource;
      const description = code?.parentElement.textContent;
      const exampleCode = getExampleCode(article);
      // Array.from(cmlines?.children ?? []).forEach((el) => {
      //   exampleCode += el.textContent + " ";
      // });
      const usage = Array.from(
        article
          .querySelector("a[href='#usage']")
          .parentElement.querySelector("ul")
          .querySelectorAll("a")
      ).map((el) => ({
        title: el.textContent,
        href:
          `https://react.dev/reference/${path}/${resource}` +
          el.getAttribute("href").replace("about:blank"),
      }));
      const link = `https://react.dev/reference/${path}/${resource}`;
      const finalExport = `
            export const ${resource}: I${resource} = {
                "name": "${name}",
                "description": "${description}",
                "example":{ 
                    "code": "${exampleCode}"
                },
                usage: [
                    ${usage
                      .map(
                        (u) => `{
                        title:"${u.title}",
                        href:"${u.href}"
                    }`
                      )
                      .join(",")}
                ],
                link: "${link}",
            };
`;

      writeFileSync(
        fsPath.resolve(__dirname, `../resources/${dir}/${resource}.ts`),
        `
        ${imports}
        ${interface}
        ${finalExport}
      `
      );
    } catch (e) {
      console.log(`${resource} failed with`, e);
    }
  };
main();
