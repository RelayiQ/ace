define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var Mirror = require("../worker/mirror").Mirror;
    var parse = require("./jsonext/jsonext_parse");

    var JsonextWorker = exports.JsonextWorker = function (sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
    };

    oop.inherits(JsonextWorker, Mirror);

    (function () {

        this.onUpdate = function () {
            var value = this.doc.getValue();
            var errors = [];
            try {
                if (value)
                    parse(value);
            } catch (e) {
                var pos = this.doc.indexToPosition(e.at - 1);
                errors.push({
                    row: pos.row,
                    column: pos.column,
                    text: e.message,
                    type: "error"
                });
            }
            this.sender.emit("annotate", errors);
        };

    }).call(JsonextWorker.prototype);

});
