import * as vscode from "vscode";
export function registerWebView() {
  return vscode.commands.registerCommand(
    "react-docs.view-resource",
    (...args) => {
      // Create and show a new webview
      const editor = vscode.window.activeTextEditor;
      const activePosition = editor?.selection.active;
      if (activePosition) {
        const range = editor.document.getWordRangeAtPosition(activePosition);
      }
      const panel = vscode.window.createWebviewPanel(
        "learnReact", // Identifies the type of the webview. Used internally
        `${args[0].name}`, // Title of the panel displayed to the user
        { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true }, // Editor column to show the new webview panel in.
        { enableScripts: true } // Webview options. More on these later.
      );

      panel.webview.html = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${args[0].name}</title>
          <style>
            iframe {
              height:100vh;
              width:100vw;
            }
            body {
              padding:0;
            }
          </style>
      </head>
      <body>
          <iframe src="${args[0].link}" />
      </body>
      </html>`;
    }
  );
}
