const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { writeFile, writeFileSync } = require("fs");
const path = require("path");
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

async function main() {
  await Promise.all(
    hooks.map(async (hook) => {
      try {
        const response = await fetch(
          `https://react.dev/reference/react/${hook}`
        );
        const body = await response.text();
        const dom = new JSDOM(body);

        const article = dom.window.document.querySelector("article");
        const code = article.querySelector("code");
        const cmlines = article.querySelector(".cm-line");
        const imports = `import { IResource } from "../types";`;
        const interface = `export interface I${hook} extends IResource {
        name: "${hook}",
        };`;

        const name = hook;
        const description = code?.parentElement.textContent;
        let exampleCode = cmlines?.textContent;
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
            `https://react.dev/reference/react/${hook}` +
            el.getAttribute("href").replace("about:blank"),
        }));
        const link = `https://react.dev/reference/react/${hook}`;
        const finalExport = `
                export const ${hook}: I${hook} = {
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
          path.resolve(__dirname, `../resources/hooks/${hook}.ts`),
          `
            ${imports}
            ${interface}
            ${finalExport}
          `
        );
      } catch (e) {
        console.log(`${hook} failed with`, e);
      }
    })
  );
}

main();
