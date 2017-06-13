/**
 * Created by saki on 2017/6/8.
 */
require('./mk.sass')

(()=>{
    console.log("HELLO");
})();

setTimeout(()=>{
    require.ensure([], function (require) {
        let a = require("./a.js");
        console.log(a.m);
    })
}, 2000);