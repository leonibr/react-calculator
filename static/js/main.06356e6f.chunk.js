(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),A=n.n(r),i=n(7),o=n.n(i);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);var a,c=n(2),u=n(1),s=n(4),l=n(3);n(16);!function(e){e[e.Number=0]="Number",e[e.Operation=1]="Operation"}(a||(a={}));var y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,A=new Array(r),i=0;i<r;i++)A[i]=arguments[i];return(e=t.call.apply(t,[this].concat(A))).keyboard=[],e.mountedClass=function(e){return(1===e.span?"key":"key unit-2")+(e.keyType===a.Operation?" operation":"")},e.readResult=function(t){e.props.pressedKey(t)},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){this.keyboard=this.props.keyboard}},{key:"render",value:function(){var e=this;return A.a.createElement("div",{className:"keyboard-container"},A.a.createElement("div",{className:"keyboard"},this.keyboard.map((function(t,n){return A.a.createElement("div",{key:n,onClick:function(){return t.onPressed(e.readResult)},className:e.mountedClass(t)},A.a.createElement("span",null,t.caption))}))))}}]),n}(r.Component),m=(n(17),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.displayText;return A.a.createElement("div",{className:"display-container"},A.a.createElement("span",null,e))}}]),n}(r.Component)),h=function(e,t){return 0},p=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),f=n(8),v=function(){function e(t,n){var r=this,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0;Object(c.a)(this,e),this._caption=t,this._keyType=n,this._span=A,this.performOperation=i,this.executeOperation=function(e,t){if(r.performOperation){var n=0;return null!==t&&(n=t),r.performOperation(e,n)}}}return Object(u.a)(e,[{key:"onPressed",value:function(e){if(!e)throw new Error("Callback not set for this key: "+this._caption);e(this)}},{key:"caption",get:function(){return this._caption}},{key:"keyType",get:function(){return this._keyType}},{key:"span",get:function(){return this._span}}]),Object(u.a)(e,[{key:"toString",value:function(){return"".concat(this.caption," Type: ").concat(this.keyType," span: ").concat(this.span)}}],[{key:"fromNumber",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new e(t,a.Number,n)}},{key:"fromOperation",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0;return new e(t,a.Operation,n,r)}}]),e}(),d=function(e,t){return null===t&&(t=0),e+t},k=function(e,t){return null===t&&(t=0),e-t},g=function(e,t){return null===t&&(t=1),e*t},E=function(e,t){return null===t&&(t=1),e/t},b=function(){function e(){Object(c.a)(this,e),this._entry=null,this._memory=0,this._isDecimal=null}return Object(u.a)(e,[{key:"reset",value:function(){this._memory=0,this._isDecimal=null,this._entry=null}},{key:"updateEntry",value:function(e){this._entry=e}},{key:"setMemory",value:function(e){this._memory=e}},{key:"clearEntry",value:function(){this._entry=null,this._isDecimal=null}},{key:"memory",get:function(){return this._memory}},{key:"entry",get:function(){return this._entry}},{key:"isDecimal",get:function(){return this._isDecimal},set:function(e){this._isDecimal=e}}]),e}(),Q=function(e,t){return e},O=function(){function e(){var t=this;Object(c.a)(this,e),this.keys=[],this.history=new b,this.currentOperation=Q,this.update=function(){return null},this.parseNum=function(e){var t=e.indexOf(".")>0,n=Number.parseFloat(e);return{value:n,isNumber:!isNaN(n),hasDot:t}},this.receiveKey=function(e){if(t.beep(),"%"===e.caption&&t.history.memory>0&&t.history.entry){var n=t.history.entry/100*t.history.memory;t.history.updateEntry(n)}else{if("AC"===e.caption)return t.history.reset(),t.currentOperation=Q,void t.update();var r=t.parseNum(e.caption);if("."===e.caption)return r.hasDot||(t.history.isDecimal=!0),void t.update();if(r.isNumber){if(t.history.entry?r=t.history.isDecimal&&parseFloat(t.history.entry.toString())===parseInt(t.history.entry.toString())?t.parseNum("".concat(t.history.entry,".").concat(r.value)):t.parseNum("".concat(t.history.entry).concat(r.value)):(r=t.parseNum("".concat(r.value)),t.history.isDecimal=!1),r.value.toString().length>14)return void t.beep();t.history.updateEntry(r.value)}if(!r.isNumber){console.log("currentOperation is null",t.currentOperation===Q);var A=null;t.currentOperation!==Q?(A=t.currentOperation(t.history.memory,t.history.entry))&&(A=Math.round(1e12*A)/1e12):A=t.history.entry,t.currentOperation=e.executeOperation,console.log("result",A),null!==A&&void 0!==A&&(t.history.setMemory(A),t.history.clearEntry())}t.update()}},this.loadKeys()}return Object(u.a)(e,[{key:"loadKeys",value:function(){var e="AC:2;%;/;7;8;9;x;4;5;6;-;1;2;3;+;0:2;.;=".split(";");this.keys=e.map((function(e){var t,n=e.indexOf(":2")>0?2:1,r=e.indexOf(":")>0?e.split(":")[0]:e;return t=r,1===["AC","/","x","-","+","="].filter((function(e){return e===t})).length?v.fromOperation(r,n,function(e){return"+"===e?d:"-"===e?k:"x"===e?g:"/"===e?E:"AC"===e?h:void 0}(r)):v.fromNumber(r,n)}))}},{key:"beep",value:function(){var e=Object(f.setTimeout)((function(){p.play().then((function(t){return clearTimeout(e)}))}),50);console.log("beep()")}},{key:"executeKey",value:function(e){this.parseNum(e.caption).isNumber&&e.executeOperation(this.history.memory,this.history.entry)}},{key:"display",get:function(){var e=this.history.entry?this.history.entry:this.history.memory,t=e.toString();console.log("display unformated: ",t);var n=this.history.isDecimal&&-1===e.toString().indexOf(".")?".":"",r=t.split(".")[0].length,A=0;e.toString().indexOf(".")>=0&&(A=t.split(".")[1].length);var i="".concat(e).concat(n);if(r>8&&A>3){var o=t.split(".")[0],a=t.split(".")[1],c=o.substring(0,1),u=(o.substring(1,o.length)+a).substring(0,9);i="".concat(c,".").concat(u,"e").concat(r-1)}return console.log("display formated: ",i),i}}]),e}(),D=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,A=new Array(r),i=0;i<r;i++)A[i]=arguments[i];return(e=t.call.apply(t,[this].concat(A))).controller=new O,e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return this.controller.update=function(){return e.forceUpdate()},A.a.createElement("div",null,A.a.createElement(m,{displayText:this.controller.display}),A.a.createElement(y,{keyboard:this.controller.keys,pressedKey:function(t){return e.controller.receiveKey(t)}}))}}]),n}(r.Component),I=function(e){var t=e.size;return A.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24"},A.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))};var w=function(){return A.a.createElement(r.Fragment,null,A.a.createElement("div",{className:"app-header"},A.a.createElement("label",null,"React Calculator"),A.a.createElement("label",null,A.a.createElement("a",{href:"https://github.com/leonibr/react-calculator",target:"_blank"},A.a.createElement(I,{size:18})," Source Code"))),A.a.createElement("div",{className:"app-container"},A.a.createElement("p",null),A.a.createElement("p",null,"Simple Calculator program to learn react using typescript."),A.a.createElement(D,null),"Source code available on Github"))};o.a.render(A.a.createElement(A.a.StrictMode,null,A.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.06356e6f.chunk.js.map