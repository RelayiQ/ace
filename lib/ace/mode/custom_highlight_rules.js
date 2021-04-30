define(function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var CustomHighlightRules = function () {

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    this.$rules = {
      "start": [
        {
          token: "variable.parameter",
          regex: "{{(?:[a-zA-Z]\\w*)}}"
        }
      ]
    };
  };

  oop.inherits(CustomHighlightRules, TextHighlightRules);

  exports.CustomHighlightRules = CustomHighlightRules;
});