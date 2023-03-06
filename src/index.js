// Firstly I created folders dist (and index.html in it - in this folder will be bundled code) and src (with index.js - here will be our source files). Next I've inictialized npm package.json (command npm init in terminal).
// Secondly I installed webpack and webpack-client in devDependencies(command npm install webpack webpack-cli --save-dev).
// Next step was to delate "main": index.js, in package.json and to add "private": true in this line. It helps us not to public our library by accident.
// Now I can install for example lodash in dependencies: npm install --save lodash
// Difference between dependencies and devDependencies are the first are publicated, without them project won't work. Second (devDependencies) are need just by developer, for example webpack (or code-testers, bundlers, iters etc.). Client don't need this.
//  To check if the lodash is working, I wrote basic function throttle on mouse move.
document.addEventListener(
  "mousemove",
  _.throttle((e) => {
    console.log(e.x, e.y);
  }, 250)
);
// To check if my bundler is working, I started webpack in terminal (command npx webpack). Now webpack bundled index.js from src folder and created main.js in dist folder. BUT it alert Warning: I need to choose option, if I want to development or production mode. First created code , production mode created code . I created file webpack.config.js and in it wrote basic configuration. watch: true is need to next line not to stop working script
// I don't want to write npx webpack every time I want to bundle, so in package.json I change scripts: add "build": "webpack". Now I can start my webpack once (by added script: npm run start) and it will be looking for changes and changing on live.
