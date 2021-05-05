define(function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var HighlightRules = require("./custom_highlight_rules").CustomHighlightRules;

  var Mode = function () {
    this.HighlightRules = HighlightRules;
  };
  oop.inherits(Mode, TextMode);

  (function () {
    this.$id = "ace/mode/custom";
  }).call(Mode.prototype);

  exports.Mode = Mode;
});