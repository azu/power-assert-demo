"use strict";
var Ractive = require("ractive");
var convertEmbedCode = require("./convert-embed-code");
module.exports = Ractive.extend({
    template: require("fs").readFileSync(__filename + ".hbs", "utf-8"),
    data: {
        userScript: "",
        executableScript: ""
    },
    runTest: function () {
        this.set("executableScript", convertEmbedCode(this.get("userScript")));
    }
});