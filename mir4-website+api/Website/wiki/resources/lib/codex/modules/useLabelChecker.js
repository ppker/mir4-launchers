"use strict";const n=require("./useSlotContents.js"),o=require("./useWarnOnce.cjs");function t(l,e,a){o(()=>n.useSlotContents(l).length===0&&!(e!=null&&e["aria-label"])&&!(e!=null&&e["aria-labelledby"]),"".concat(a,": Inputs must have an associated label. Provide one of the following:\n - A label via the appropriate slot\n - An `aria-label` attribute set to the label text\n - An `aria-labelledby` attribute set to the ID of the label element"))}exports.useLabelChecker=t;