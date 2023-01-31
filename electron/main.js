const { app, BrowserWindow, Tray, Menu, nativeImage} = require('electron')
const path = require('path')
// 接受环境变量
const NODE_ENV = process.env.NODE_ENV;


let win = null
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })
  // 加载index.html
  // win.loadFile(NODE_ENV === 'development' ? 'http://localhost:3000/':`file://${path.join(__dirname,"../dist/index.html")}`)
  win.loadURL('http://localhost:3000/')

  // 打开开发者工具
  win.webContents.openDevTools()


  // 配置系统托盘图标
  const icon = nativeImage.createFromPath('../package.png')
  tray = new Tray(icon)

  // 系统托盘图标 右键菜单
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出', click(menuItem, browserWindow, event){
      // console.log(menuItem, browserWindow, event)
      app.quit()
    } },
    { label: '最小化', click(menuItem, browserWindow, event){
      // console.log(menuItem, browserWindow, event)
      win.minimize();
    } },
    { label: '最大化', click(menuItem, browserWindow, event){
      // console.log(menuItem, browserWindow, event)
      win.maximize();
    }},
  ])
  tray.setContextMenu(contextMenu)
  tray.setToolTip('electron')
  tray.on('click', () => {
    win.show()
  })
}

app.whenReady().then(() => {

  
  createWindow()


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
