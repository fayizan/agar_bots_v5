// ==UserScript==
// @name         lefela4 agar.io Capcha solver v.1
// @namespace    lefela4
// @version      1.0
// @description  to be writen
// @author       lefela4
// @license      MIT
// @match        http://agar.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
window.cell_position = {};
function replaceRegexFile(a, b, c) {
	var d = new RegExp(b);
	return d.test(a) ? a = a.replace(b, c) : console.log("[Failed] to replace: " + b), a
}

function replaceNormalFile(a, b, c) {
	return a.indexOf(b) != -1 ? a = a.replace(b, c) : console.log("[Failed] to replace: " + b), a;
}


function getBotCore() {
	console.log("ok");1
/*               var script = e.responseText;
				    script = replaceRegexFile(script, /((\w)=(\+\(\(\w\[\w\+\d+>>\d.*;)(\w)=(\+\(\(\w\[.*\/2\|\d\)\|0\)\/\w\+\s\+\w\[\w\+\d+>>3\];).*\4=\4<\w\?\w:\w;)/, "window.cell_position.x = $3 window.cell_position.y = $5 $1");
				console.log("done 2"),
				eval(script);
            }, e.send(null); */
			
            var e2 = new XMLHttpRequest;
            e2.open("GET", "http://agar.io/agario.core.js", !0), e2.onload = function() {
                var script = e2.responseText; // this.deliverRequest(this.parseInboxPacket(i), false)
				script = replaceNormalFile(script, 'console.log("postRun");', 'console.log("postRun2");'),
				script = replaceNormalFile(script, 'setTarget:function(a,b){wb(a,b)}', 'setTarget:function(a,b){console.log("setTraget");window.cell_position.x=a;window.cell_position.y=b;wb(a,b)}'),
				console.log("done 1"),
				eval(script)
            }, e2.send(null);
	
			
			
				
}


window.getBotCore = getBotCore;
window.reCapchaKey = [];

setTimeout(function(){
	
	getBotCore();
	
}, 3000);
