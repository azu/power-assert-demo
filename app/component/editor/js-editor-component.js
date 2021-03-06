"use strict";
var Ractive = require("ractive");
module.exports = Ractive.extend({
    data: {
        "userScript": ""// from parent
    },
    template: require("fs").readFileSync(__filename + ".hbs", "utf-8"),
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
        myCodeMirror.on('change', function (cm) {
            saveEditContent(cm.getValue());
        });
        myCodeMirror.addKeyMap({
            "Ctrl-Enter": function (cm) {
                saveEditContent(cm.getValue());
                ractive.execScript();
            },
            "Cmd-Enter": function (cm) {
                saveEditContent(cm.getValue());
                ractive.execScript();
            }
        });
    },
    execScript: function () {
        // fire event caught by index
        this.fire("execScript");
    }
});

