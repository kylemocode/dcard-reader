This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and use TypeScript template.

# Dcard Reader
2020 Dcard Frontend Challenge

Basic Features:
- 實作文章列表
	- 串接 文章列表 API 回傳的資料
	- 列表內的項目至少需顯示文章的：標題 title、摘要 excerpt
	- 列表在滾到頁面底部時要自動載入更多文章（需避免重複發送 API 請求） 

Advanced Features:
- Virtualized List
- Modal 顯示單篇文章
- RWD

## 使用技術
- React.js with TypeScript (hooks)
- styled-components
- react-modal
- react-window
- axios

## 檔案結構
```
app
├── config
│   └── routes.js
├── screens
│   └── App
│       ├── screens
│       │   ├── Admin
│       │   │   ├── screens
│       │   │   │   ├── Reports
│       │   │   │   │   └── index.js
│       │   │   │   └── Users
│       │   │   │       └── index.js
│       │   │   └── index.js
│       │   └── Course
│       │       ├── screens
│       │       │   └── Assignments
│       │       │       └── index.js
│       │       └── index.js
│       └── index.js
└── index.js
```

## 啟動步驟

### `npm install`

從 package.json 安裝所需的 dependencies

### `npm start`

啟動 Dcard Reader on localhost:3000

![](https://i.imgur.com/5v2PPur.png)