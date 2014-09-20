"use strict";
var Ractive = require("ractive");
var fs = require("fs");
var espowerSource = require("espower-source");
var runnerHTML = fs.readFileSync(__dirname + "/embed-runner.hbs", "utf-8");
module.exports = Ractive.extend({
    template: require("fs").readFileSync(__filename + ".hbs", "utf-8"),
    data: {
        userScript: "",
        // create embed html for SrcDoc
        embed: function (str) {
            var source = espowerSource(str);
            return runnerHTML.replace("{{embed-script}}", source);
        }
    }
});