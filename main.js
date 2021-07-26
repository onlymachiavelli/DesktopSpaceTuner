const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    resizable: false,
    hasShadow: true,
    icon: "img/icon.png",
  });
  win.loadFile("src/org/GUI/index.html");
});
