# Vue-tw-zip-code-selector

以 Vue 3.0 和 TypeScript 為基底的台灣地址二階選單
A Taiwan-Zip-Code-Selector via Vue 3.0 & TypeScript

## Table of Contents
  * [Getting Started](#getting-started)
  * [Demo Page](#demo-page)
  * [Built With](#built-with)
  * [Author](#author)
  * [License](#license)

## Getting Started
### Prerequisites 安裝環境建置

* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Vue 3.0](https://v3.vuejs.org/) - The Progressive JavaScript Framework

### How to use 如何使用

1. Install via npm 使用 npm 來進行安裝
```javascript
    cd /"your-vue-project-root-folder"/
    npm install vue-tw-zip-code-selector
```
2. Usage in Vue 3 在 Vue 3 環境下使用
```javascript
    /*  main.ts or main.js */
    const app = createApp(App)
    import 'vue-tw-zip-code-selector/dist/vue-tw-zip-code-selector.css'
    import VueTwZipCodeSelector from 'vue-tw-zip-code-selector'
    app.use(VueTwZipCodeSelector)
```
3. Use the component in *.vue 在 *.vue 中使用套件 
```html
<template>
    <VueTwZipCodeSelector @getSelectedZone="someMethod in father.vue" />
</template>
```

### Event 觸發事件
| Name | Param [Type] | Describe |
| ---- | --------- | -------- |
| getSelectedZone | ZoneObject [Object] | get user-selected zone |

```json
{
    "name": "demo zone",
    "zipCode": 100,
    "county": "A",
    "countyName": "countyName"
}
```
## Demo Page
[Demo Page](https://nodejs.org/en/)

## Built With
* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Vue 3.0](https://v3.vuejs.org/) - The Progressive JavaScript Framework
* [Vue-Sfc-Rollup](https://www.npmjs.com/package/vue-sfc-rollup) - vue-sfc-rollup is a CLI templating utility that scaffolds a minimal setup for compiling a Vue Single File Component (SFC) - or library of multiple SFCs
* [TypeScript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types.

## Author
- [Andy Lien](https://github.com/andy922200)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) for details.
