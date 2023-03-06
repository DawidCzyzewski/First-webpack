// Firstly I created folders dist (and index.html in it - in this folder will be bundled code) and src (with index.js - here will be our source files). Next I've inictialized npm package.json (command npm init in terminal).
// Secondly I installed webpack and webpack-client in devDependencies(command npm install webpack webpack-cli --save-dev).
// Next step was to delate "main": index.js, in package.json and to add "private": true in this line. It helps us not to public our library by accident.
// Now I can install for example lodash in dependencies: npm install --save lodash
// Difference between dependencies and devDependencies are the first are publicated, without them project won't work. Second (devDependencies) are need just by developer, for example webpack (or code-testers, bundlers, iters etc.). Client don't need this.
//  To check if the lodash is working, I wrote basic function throttle on mouse move.
import _ from "lodash";
import { displayMouseCoords } from "./coordsDisplay";

// document.addEventListener(
//   "mousemove",
//   _.throttle((e) => {
//     console.log(e.x, e.y);
//   }, 250)
// );
// To check if my bundler is working, I started webpack in terminal (command npx webpack). Now webpack bundled index.js from src folder and created main.js in dist folder.
// I created file webpack.config.js and in it wrote basic configuration. watch: true is need to next line not to stop working script
// I don't want to write npx webpack every time I want to bundle, so in package.json I change scripts: add "build": "webpack". Now I can start my webpack once (by added script: npm run build) and it will be looking for changes and changing on live.
// BUT it alert Warning: I need to choose option, if I want to development or production mode. I changed it in scripts to build each one by command npm run build-dev or build-prod. Development mode created file much bigger than in production. It's becouse tree shaking: in dev bundler include whole (for exapmle as I used) lodash and in production it will be just only throttle from lodash, becouse I didn't use any other part of library - it delated whole lodash methods without throttle. I will use dev one everyday and prod just when it will go to production.
// To check if my app is working I found webpack-dev-server and installed this library in dev dependencies (client won't need this ;) ) (command: npm install webpack-dev-server --save-dev). Now I can start site by command npx webpack serve. But it's now not working (cannot get), becouse I need to change options in webpack.config.js
// It is all working, but now we need to have runned npm run build-dev (or npm run build-prod) in background and in second card npx webpack serve
// So I created new script (dev) in package.json and now we can use just npm run dev and our server is working live in developer mode.
// WEBPACK IS WORKING
// Now I created coordsDisplay.js to get modules in my code. In this I added function to display mouse coords in div wrapper.
// After I added function in throttle, import was added itself.

document.addEventListener(
  "mousemove",
  _.throttle((e) => {
    displayMouseCoords({
      x: e.x,
      y: e.y,
    });
  }, 250)
);

// Now if I want to use CSS to style it, I need to install libraries: npm install --save-dev css-loader to interprets @import and url() like import/require() and to resolve them and style-loader to inject CSS into the DOM: npm install --save-dev style-loader and added module in webpack.config.js
