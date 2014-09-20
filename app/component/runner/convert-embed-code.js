/**
 * Created by azu on 2014/09/20.
 * LICENSE : MIT
 */
"use strict";
var fs = require("fs");
var runnerHTML = fs.readFileSync(__dirname + "/embed-runner.hbs", "utf-8");
var espowerSource = require("espower-source");
module.exports = function convertEmbedCode(string) {
    var source;
    try {
        source = espowerSource(string);
    } catch (e) {
        console.log(e);
        alert(e);
    }
    return runnerHTML.replace("{{embed-script}}", source);
};