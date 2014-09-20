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
function execScript() {
    // message to component
    var runner = ractive.findComponent("mocha-runner");
    runner.runTest();
}
ractive.findComponent("jsEditor").on({
    "execScript": execScript
});
document.getElementById("js-convert-button").addEventListener("click", execScript);
window.addEventListener("load", function () {
    execScript();
});