import { contextBridge, ipcRenderer } from "electron";
import { exec } from "child_process";
import { Server } from "./server";

const ctx = { server: null };
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
  listen(port, opts) {
    ctx.server = new Server(opts);
    ctx.server.listen(port);
  },
  send(data) {
    ctx.server.send(data);
  },
  execute() {
    ctx.server.execute();
  },
  stop() {
    ctx.server.save();
  },
});
