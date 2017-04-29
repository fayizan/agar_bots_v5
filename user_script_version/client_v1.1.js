// ==UserScript==
// @name         Minions.ovh AGAR.IO [CLIENT]
// @namespace    lefela4
// @version      1.0
// @description  This is the best code I never wrote.
// @author       lefela4
// @license      MIT
// @match        http://agar.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

function replaceRegexFile(a, b, c) {
	var d = new RegExp(b);
	return d.test(a) ? a = a.replace(b, c) : console.log("[Failed] to replace: " + b), a
}

function replaceNormalFile(a, b, c) {
	return a.indexOf(b) != -1 ? a = a.replace(b, c) : console.log("[Failed] to replace: " + b), a;
}


function getBotCore() {
	console.log("ok");
			
            var e2 = new XMLHttpRequest;
            e2.open("GET", "http://agar.io/agario.core.js", !0), e2.onload = function() {
                var script = e2.responseText; // this.deliverRequest(this.parseInboxPacket(i), false)
				script = replaceNormalFile(script, 'console.log("postRun");', 'console.log("postRun2");'),
				script = replaceNormalFile(script, 'setTarget:function(a,b){wb(a,b)}', 'setTarget:function(a,b){window.cell_position.x=a;window.cell_position.y=b;wb(a,b)}'),
				console.log("done 1"),
				eval(script)
            }, e2.send(null);
	
			
			
				
}


window.getBotCore = getBotCore;
window.reCapchaKey = [];

setTimeout(function(){
	
	getBotCore();
	
}, 3000);

console.debug("BOTS ARE BACK ! [MINIONS.OVH]");
console.debug("[INFO] This is the best code I never wrote. -- lefela4");
console.warn("PLEASE DONT TOUCH TO ANYTHING OF THIS SCRIPT. YOU MAY BROKE THEM !");

var ok = true;
var client_uuid = "lefela4";

setTimeout(function() {
		var thisbuf = null;
		var real_minx = -7071;
		var real_miny = -7071;
		var real_maxx = 7071;
		var real_maxy = 7071;
		var lastsent = {
			minx: 0,
			miny: 0,
			maxx: 0,
			maxy: 0
		};

		function valcompare(Y, Z) {
			return 0.01 > Y - Z && -0.01 < Y - Z
		}
	  
		var canMove = true;
		var movetoMouse = true;
		var moveEvent = new Array(2);
		var canvas = document.getElementById("canvas");
		last_transmited_game_server = null;
		

	window.cell_position = {};
	window.cell_position.x = 0;
	window.cell_position.y = 0;
	window._WebSocket = window.WebSocket;
    window.__botclonsData = {};
    window.__botclonsData.mx = 0;
    window.__botclonsData.my = 0;
    window.__botclonsData.ml = 0;
    window.__botclonsData.ma = 0;
    window.__botclonsData.mb = 0;
    window.__botclonsData.wa = false;
    window.__botclonsData.sa = false;
    window.__botclonsData.w = null;
    window.__botclonsData.s = null;
    window.__botclonsData.aX = -1;
    window.__botclonsData.aY = -1;
    window.__botclonsData.p = 0;
    window.__botclonsData.q=false;
    window.__botclonsData.socketaddr = null;
	window.xo = 0;
	window.yo = 0;
	
	function refer(master, slave, prop) {
	  Object.defineProperty(master, prop, {
	 get: function() {
	   return slave[prop];
	 },
	 set: function(val) {
	   slave[prop] = val;
	 },
	 enumerable: true,
	 configurable: true
	  });
	}
	
	var socket = io.connect('ws://localhost:8081');
	window.socket = socket;
	
	socket.on('force-login', function(data) {
		socket.emit("login", {
			"uuid": "lefela4",
			"type": "client"
		});
		transmit_game_server();
		sendbuf();
	});
	
	function sendbuf () {
		
		var st = setInterval(function () {
			
			if (thisbuf != null) {
				
				socket.emit("buf", thisbuf);
				clearInterval(st);
				
			}
			
			
		}, 500);
					
		
	}
	
	window.WebSocket = function(url, protocols) {
	  if (protocols === undefined) protocols = [];

	  var ws = new _WebSocket(url, protocols);
	  window.ws = this;

	  refer(this, ws, 'binaryType');
	  refer(this, ws, 'bufferedAmount');
	  refer(this, ws, 'extensions');
	  refer(this, ws, 'protocol');
	  refer(this, ws, 'readyState');
	  refer(this, ws, 'url');

	  this.send = function(data) {
		
	 var logData = [];
	 for (var i = 0; i < data.length; i++) logData.push(data[i] & 255);
	 
		var checkif = logData.toString().split(",")[0];
		
		if (checkif == "255" && ok == true){
			ok = false;
			console.log("Sending data", logData);
			
			thisbuf = logData;
			
		}else{
         
          //  console.log(checkif);
            
        }
	// console.log("Sending data", logData);

		//if (logData[0] == 255 || logData[0] == 254 || logData.length == 21 || logData.length < 6) {
		//	if (logData.length > 40)
		//		console.log('Send data', logData);
			return ws.send.call(ws, data);
		//}
	  };

	  this.close = function() {
		return ws.close.call(ws);
	  };

	  this.onopen = function(event) {};
	  this.onclose = function(event) {};
	  this.onerror = function(event) {};
	  this.onmessage = function(event) {};

	  ws.onopen = function(event) {
		console.log('Socket open', this.url);
			window.__botclonsData.socketaddr = ws.url;
			
	 if (this.onopen)
	   return this.onopen.call(ws, event);
	  }.bind(this);

	  ws.onmessage = function(msg) {
		//onsole.log('Message from Server', new Uint8Array(msg.data));
		
		if(msg.byteLength>16){ // Most clones
            if(msg.getUint8(0, true) == 64){
                window.__botclonsData.ma = msg.getFloat64(1, true);
                window.__botclonsData.mb = msg.getFloat64(9, true);
            }
        }
		
		if (this.onmessage)
			return this.onmessage.call(ws, msg);
		
	  }.bind(this);

	  ws.onclose = function(event) {
		  
			console.log('Socket close', (event.code === 1006) ? "abnormal" : "normal");
			ok = true;
			if (this.onclose)
				return this.onclose.call(ws, event);
	  }.bind(this);

	  ws.onerror = function(event) {
			console.log('Socket error', event);
			ok = true;
			if (this.onerror)
				return this.onerror.call(ws, event);
	  }.bind(this);
	};
		function transmit_game_server() {
			last_transmited_game_server = window.__botclonsData.socketaddr;
			socket.emit("cmd", {
				"name": "connect_server",
				"ip": window.__botclonsData.socketaddr,
				"origin": location.origin
			})
		}
	//setTimeout(function() {

		

	   
		$( "#canvas" ).after( "<div style='background-color: #000000; -moz-opacity: 0.4; -khtml-opacity: 0.4; opacity: 0.4; filter: alpha(opacity=40); zoom: 1; width: 205px; top: 10px; left: 10px; display: block; position: absolute; text-align: center; font-size: 15px; color: #ffffff; padding: 5px; font-family: Ubuntu;'> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><a>HistoryBots.tk</a></div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br>Bots: <a id='minionCount' >Offline</a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br>Movement Offset: <a id='ismoveToMouse' >0</a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br>Position: <a id='gh45nmvsy' >-</a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br>Stop Movement: <a id='isStopMove' >Off</a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br>Chat Spam: <a id='dfdghehfj' >Off</a> </div>" );
	   socket.on('spawn-count', function(data) {
			document.getElementById('minionCount').innerHTML = data
		});
		
		socket.emit("login", client_uuid);
		$("#instructions").replaceWith('<br><div class="input-group"><span class="input-group-addon" id="basic-addon1">UUID</span><input type="text" value="' + client_uuid + '" readonly class="form-control"</div>');

		function isMe(cell) {
			for (var i = 0; i < window.agar.myCells.length; i++) {
				if (window.agar.myCells[i] == cell.id) {
					return true
				}
			}
			return false
		}

		function getCell() {
			var me = [];
			for (var key in window.agar.allCells) {
				var cell = window.agar.allCells[key];
				if (isMe(cell)) {
					me.push(cell)
				}
			}
			return me[0]
		}
		var skin_var = 0;

		function emitPosition() {
			document.getElementById('gh45nmvsy').innerHTML=(~~(window.x))+","+(~~(window.y));
			socket.emit("pos", {
				"x": window.cell_position.x,
				"y": window.cell_position.y,
				"l": window.__botclonsData.ml,
				"p": window.__botclonsData.p,
				"c": window.__botclonsData.q
			})
		}

		function toggleMovement() {
			canMove = !canMove;
			switch (canMove) {
				case true:
					canvas.onmousemove = moveEvent[0];
					moveEvent[0] = null;
					canvas.onmousedown = moveEvent[1];
					moveEvent[1] = null;
					break;
				case false:
					canvas.onmousemove({
						clientX: innerWidth / 2,
						clientY: innerHeight / 2
					});
					moveEvent[0] = canvas.onmousemove;
					canvas.onmousemove = null;
					moveEvent[1] = canvas.onmousedown;
					canvas.onmousedown = null;
					break
			}
		}
		interval_id = setInterval(function() {
			emitPosition()
		}, 100);
		interval_id2 = setInterval(function() {
			transmit_game_server_if_changed()
		}, 5000);
		document.addEventListener('keydown', function(e) {
			var key = e.keyCode || e.which;
			switch (key) {
				case 16:
					if(!window.__botclonsData.sa){
						window.__botclonsData.sa=true;
					window.__botclonsData.s = setInterval(function() {
	$("body").trigger($.Event("keydown", { keyCode: 32}));
	$("body").trigger($.Event("keyup", { keyCode: 32}));
	}, 10);
					}
					break;
				case 87:
					if(!window.__botclonsData.wa){
						window.__botclonsData.wa=true;
	window.__botclonsData.w = setInterval(function() {
	$("body").trigger($.Event("keydown", { keyCode: 87}));
	$("body").trigger($.Event("keyup", { keyCode: 87}));
	}, 10);
					}
					break;
					case 65:
					window.__botclonsData.p--;
					document.getElementById('ismoveToMouse').innerHTML = window.__botclonsData.p;
					break;
				case 67:
					window.__botclonsData.q=!window.__botclonsData.q;
					if(window.__botclonsData.q) { document.getElementById('dfdghehfj').innerHTML = "On"; } else { document.getElementById('dfdghehfj').innerHTML = "Off"; }
					break;
				case 69:
					socket.emit("cmd", {
				"name": "split"
			})
					break;
				case 82:
					socket.emit("cmd", {
				"name": "eject"
			})
					break;
				case 80:
					window.__botclonsData.p++;
					document.getElementById('ismoveToMouse').innerHTML = window.__botclonsData.p;
					break
			}
		});
		document.addEventListener('keyup', function(e) {
			var key = e.keyCode || e.which;
			 console.log(key);
			switch (key) {
				case 87:
					clearInterval(window.__botclonsData.w);
					window.__botclonsData.wa=false;
					break;
				case 16:
					clearInterval(window.__botclonsData.s);
					window.__botclonsData.sa=false;
					break;
			}
		});

		function transmit_game_server_if_changed() {
			if (last_transmited_game_server != window.__botclonsData.socketaddr) {
				transmit_game_server()
			}
		}


		var mouseX = 0;
		var mouseY = 0;
		$("body").mousemove(function(event) {
			mouseX = event.clientX;
			mouseY = event.clientY
		});
	//}, 1000);
}, 1000);