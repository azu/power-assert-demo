/**
 * Created by azu on 2014/09/20.
 * LICENSE : MIT
 */
"use strict";
var Ractive = require("ractive");
var fs = require("fs");
var ractive = new Ractive({
    el: '#js-main',
    data: {
        userScript: fs.readFileSync(__dirname + "/example.js", "utf-8")
    },
    template: fs.readFileSync(__filename + ".hbs", "utf-8"),
    components: {
        "jsEditor": require("./component/editor/js-editor-component"),
        "mocha-runner": require("./component/runner/mocha-runner-component")
    }
});
document.getElementById("js-convert-button").addEventListener("click", function () {
    // message to component
    var jsEditor = ractive.findComponent("jsEditor");
    jsEditor.fire("convert-js");
});