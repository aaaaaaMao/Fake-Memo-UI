const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    maxWidth: 800,
    height: 600,
    maxHeight: 600,
    resizable: false,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
  // win.webContents.openDevTools();
  ipcMain.on('window-min', () => {
    win.minimize();
  });
  ipcMain.on('window-close', () => {
    win.close();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
