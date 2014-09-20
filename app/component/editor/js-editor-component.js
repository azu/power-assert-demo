"use strict";
var Ractive = require("ractive");
module.exports = Ractive.extend({
    data: {
        "userScript": "",// from parent
        codeMirror: null
    },
    init: function () {
        var ractive = this;

        function saveEditContent(text) {
            ractive.set("userScript", text);
        }

        var placeholder = ractive.find(".placeholder-editor");
        var myCodeMirror = CodeMirror.fromTextArea(placeholder, {
            mode: "javascript",
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
            matchBrackets: true
        });
        if (ractive.data.userScript) {
            myCodeMirror.setValue(ractive.data.userScript);
        }
        myCodeMirror.addKeyMap({
            "Ctrl-Enter": function (cm) {
                saveEditContent(cm.getValue());
            },
            "Cmd-Enter": function (cm) {
                saveEditContent(cm.getValue());
            }
        });
        ractive.set("codeMirror", myCodeMirror);
        // receive message from other
        ractive.on("convert-js", function () {
            saveEditContent(myCodeMirror.getValue());
        });
    },
    template: require("fs").readFileSync(__filename + ".hbs", "utf-8")
});

