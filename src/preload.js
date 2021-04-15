/* global __static */
import path from "path";
import { contextBridge, ipcRenderer } from "electron";
import { exec, execFile } from "child_process";

contextBridge.exposeInMainWorld("electron", {
  openURL(url) {
    if (process.platform === "win32") exec("explorer " + url);
    else exec("open " + url);
  },
  openDialog() {
    return new Promise((resolve) => {
      ipcRenderer.once("path", (_, arg) => {
        resolve(arg);
      });
      ipcRenderer.send("path");
    });
  },
  exit() {
    ipcRenderer.send("exit");
  },
});

if (process.env.NODE_ENV === "production")
  execFile(
    path.join(
      __static,
      process.platform === "win32" ? "crawler.exe" : "crawler"
    ),
    () => console.log("Started")
  );
