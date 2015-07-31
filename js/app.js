/* 
 * Code here has access to the filesystem and is executed in a CommonJS environment like a NodeJs script so you can call Node packages such as `fs` and `path` like so
 * 
 * var fs = require("fs")
 * var files = fs.readdirSync('./')
 *
 * You could also include d3 with `require('d3')` as long as its specified in your package.json as a dependency
 *
 * For this example, though, we'll just use normal JavaScript and load our dependencies from the `js/thirdparty` folder
 *
**/


// Add some text to the body
d3.select('body').append('div')
  .attr('id', 'main')
  .html('Hello, Aufbau!')