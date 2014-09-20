"use strict";
var Ractive = require("ractive");
var convertEmbedCode = require("./convert-embed-code");
module.exports = Ractive.extend({
    template: require("fs").readFileSync(__filename + ".hbs", "utf-8"),
    data: {
        userScript: "",
        execScript: ""
    },
    runTest: function () {
        this.set("execScript", convertEmbedCode(this.get("userScript")));
    }
});