var path = require('path')
var electron = require('electron')

electron.app.on('ready', createWindow)

function createWindow() {
    var wnd = new electron.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            allowEval: false,
        }
    })
    wnd.loadFile(path.join(__dirname, 'index.html'))
    wnd.on('close', quit)
}

function quit() {
    electron.app.quit()
}