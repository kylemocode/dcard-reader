This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and TypeScript template.

# Dcard Reader
A webapp that imitate Dcard app. 
Using Virtualized List and lazy data-loading to enhance app performance.
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fdcard-reader.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fdcard-reader?ref=badge_shield)

![image](./assets/dcard-reader.gif)

## Installation

```shell
$ git clone https://github.com/kylemocode/dcard-reader.git
$ cd dcard-reader
$ npm install && npm start (or using yarn instead)
```

## Features:
  - [X] Virtualized List
  - [X] Infinite Scroll
  - [X] Lazy Load
  - [X] Performance
  - [X] Proxy Server
  
### Virtualized List
Use `react-window` to achieve virtualized list which is a react components for efficiently rendering large lists and tabular data.As the Chrome Performance Monitor, It took less than **4.2MB JS heap size, 350 DOM** nodes on initial renderer, and of course, it's responsive. 

### Infinite Scroll && Lazy Load
Use `IntersectionObserver` API to achieve infinite scroll and only load more data while scrolling to current bottom boundary.

### Performance
In addition to lazy-loading data, dcard-reader also use react core functions to enhance app performance, such as `React.memo`、`useCallback`、`useMemo`...etc.

### Proxy server
To solve **CORS** problem in dcard 3rd-party-API, I choose to build my own backend proxy server which powered by `express`. 

## Source Code File Structure
```
src
├── api
│   └── proxy.ts
├── constant
│   └── api.ts
├── hook
│   └── useFetchPost.tsx
├── utils
│   └── media.ts
├── components
│   └── LoadingPlaceHolder
│   └── PostItem
│   └── PostModal
│   └── PostContainer
│   └── ResponseInfo
│   └── TopicLabel
└── App.tsx
└── index.css
└── index.tsx
└── serviceWorker.ts
```

## Roadmap
  - [ ] UI/UX (More Features)
  - [ ] Increase Unit Test Coverage
  - [ ] CICD Pipeline

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fdcard-reader.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fdcard-reader?ref=badge_large)