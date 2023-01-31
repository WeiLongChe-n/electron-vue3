



##  创建vue+vite+ts 项目
```js
   yarn create vite 项目名
   npm init vite@last 项目名
```

## 下载electron 相关依赖
```js
   cnpm i electron electron-builder cross-env wait-on @types/electron concurrently -D

   electron-builder //electron 打包工具
   wait-on  // 监听
   cross-env // node环境变量
   concurrently //
   @types/electron //
```

## 


  "devDependencies": {
    "@types/electron": "^1.6.10",
    "@vitejs/plugin-vue": "^4.0.0",
    "concurrently": "^7.6.0",
    "cross-env": "^7.0.3",
    "electron": "^22.1.0",
    "electron-builder": "^23.6.0",
    "typescript": "^4.9.3",
    "vite": "^4.0.0",
    "vue-tsc": "^1.0.11",
    "wait-on": "^7.0.1"
  }