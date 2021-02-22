const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    }
  })

  win.loadFile('public/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('start-fortify', function (e, data) {
  let win = new BrowserWindow({ width: 835, height: 600, webPreferences: {webSecurity: false} })
  win.on('close', function () { win = null })
  win.loadURL(`file://${__dirname}/fortify.html`)
})