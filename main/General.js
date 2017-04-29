var fs = require("fs");
var Logger = require('../modules/Logger');
var ini = require('../modules/ini.js');
var UserRoleEnum = require('../enum/UserRoleEnum');
var server = require("../server/server.js");
var cmd = require("../server/server.js");
var worker = require("../worker/worker.js");
var socket2 = require('socket.io-client');

console.log(worker);

function General_Cordinator() {
	
	
	
	// GeneralConfig
    this.GeneralConfig = {
		
		use_phantomJS: 0,           // DO USE PHANTOMJS
		use_plugins: 0,             // USE PLUGINS
        logVerbosity: 4,            // Console log level (0=NONE; 1=FATAL; 2=ERROR; 3=WARN; 4=INFO; 5=DEBUG)
        logFileVerbosity: 5,        // File log level
		protocol_version: 13,
		use_255: 1,
		use_254: 1,
		use_decompression: 1,
		use_compression: 1,
		use_decryption: 1,
		use_encryption: 1,
		version: 1,
		use_DB: 0,
		username: "",
		password: "",
		host: "",
		
		stop_on_recapcha_error: 1,
		maxBots: 2,
	
    };
	
	this.ServerConfig = {
		
		version: 1,
		client_version: 4,
		
		
		status: "Stable",
		
		serverPort: 8081,
		
	
    };
	
	this.userList = {};
	
	this.whitelist = {};
    
    // Parse GeneralConfig
    this.loadGeneralConfig();
	this.loadServerConfig();
    this.loadUserList();
    this.loadWhitelist();
	
	this.feeder = null;
	
	//CONFIGURING THE SERVER
	this.server = new server.server(this.ServerConfig);
	
	//STARTING SERVER
	this.server.start();
	this.server.cmd();
	
	
	
	this.pcs = {};
	this.bots_count = 0;
	this.bot_count = 0;
	this.max = this.GeneralConfig.maxBots;
	this.id = 0;
	this.game_server = "";
	this.spawnCount = 0;
	
	//CONFIGURING THE MAINBOARD
	//this.MAINBOARD = new worker.MAINBOARD(this.GeneralConfig);
	
	//STARTING SERVER
	//this.MAINBOARD.init();
	//this.MAINBOARD.configure();
	
	this.CPU = new worker.CPU(this.GeneralConfig);
	this.CPU.configure();
	
	this.RAM = new worker.RAM(this.GeneralConfig);
	this.RAM.configure();
	
	this.MEMORY = new worker.MEMORY(this.GeneralConfig);
	this.MEMORY.configure();
	
	var client = this;

	this.MEMORY.download_core(function(){
		
		
		console.log("done !");
		
		client.start_test_bots();
		
	});
	
	//IDK
	//this.MAINBOARD.PC_START();
	//this.start_test_bots();
	
	
	
	
	var socket = socket2("ws://localhost:8081");
	
	var ot = this;
	
	setInterval(function(){
		client.spawnCount = 0;
		for (bot in client.pcs) {
			client.spawnCount = client.spawnCount + client.pcs[bot].spawnCount;
		}
		
		socket.emit("spawn-count", ot.spawnCount + '/' + ot.max);
		
	}, 500);
	
	socket.on("force-login", function(data){
			

			if (data == "server-booted-up") {
				return;
			}
			client.socket.emit("login", {
				"uuid": "lefela4",
				"type": "server"
			});

			
			//client_f.socket.send("login", "lefela4")//{id: "feeder_" + sockets_id, type: 1}); // 1 = feeder, 2 = server, 0 = client
			
		});
		
	socket.on("close", function(){
			
			Logger.warn("IT SHOULD NOT HAPPEN !!! [EXTREM LAGS ?]");
			
		});
		
	socket.on("pos", function(d){
			
		//	console.log(d.x);
			
			for (bot in client.pcs) {
				client.pcs[bot].clientX = d.x;
				client.pcs[bot].clientY = d.y;
			}
				
			
			
			
		});
		
	socket.on("cmd", function(data){
		
			if (data.name == "split") {
			for (bot in client.pcs) {
				client.pcs[bot].split();
				}
			} else if (data.name == "eject") {
				for (bot in client.pcs) {
					client.pcs[bot].eject();
				}
			} else if (data.name == "connect_server") {
				
				client.game_server = data.ip;
				client.startFeederBotOnProxies();
				
			}
			
		});
		
		this.socket = socket;
	
	
}

General_Cordinator.prototype.start_test_bots = function(){
	
	var n = this;
	
fs = require('fs');
var HttpsProxyAgent = require('https-proxy-agent');
var Socks = require('socks');

function getRandomLine(filename) {
    var fs = require('fs');
    var lines = fs.readFileSync(filename).toString().split("\n");
    line = lines[Math.floor(Math.random() * lines.length)];
    return line
}

//object of bots
var bots = {};

var bot_count = 0;

var fs = require('fs');
var lines = fs.readFileSync("./proxy.txt").toString().split("\n");
var url = require('url');
var game_server_ip = null;

function createAgent(ip,type) {

    data = ip.split(":");

    return new Socks.Agent({
            proxy: {
                ipaddress: data[0],
                port: parseInt(data[1]),
                type: parseInt(type)
            }}
    );
}

var proxy_mode = "SOCKS5";

function startFeederBotOnProxies() {

    for (var proxy_line in lines) {

        if(lines[proxy_line].trim() == "#HTTP"){
            proxy_mode = "HTTP";
        }else if(lines[proxy_line].trim() == "#SOCKS4"){
            proxy_mode = "SOCKS4";
        }else if(lines[proxy_line].trim() == "#SOCKS5"){
            proxy_mode = "SOCKS5";
        }

        if (lines[proxy_line][0] == "#" || lines[proxy_line].length < 3) {
            continue;
        }

        //usefull for testing single proxies
        if (process.argv[3] != null && proxy_line != process.argv[3]) {
            continue;
        }

        var proxy = "http://" + lines[proxy_line];
        var proxy_single = lines[proxy_line];
        console.log(proxy_mode + " ; " + proxy_single);

        try {

            var opts = url.parse(proxy);

            if (proxy != null) {
                if(proxy_mode=="HTTP"){
                    agent = HttpsProxyAgent(opts);
                }else if(proxy_mode=="SOCKS4"){
                    agent = createAgent(lines[proxy_line],4);
                }else if(proxy_mode=="SOCKS5"){
                    agent = createAgent(lines[proxy_line],5);
                }
                
            } else {
                var agent = null;
            }

            if (lines[proxy_line] == "NOPROXY") {
                agent = null;
            }
			//game_server_ip = "ws://localhost:8081/";
			//agent = null;
			if(n.bot_count < n.max){
				console.log("Attempting connection to " + game_server_ip);
			}
			
		 for (i = 0; i < 3; i++) {
				if(n.bot_count < n.max){
					
				
                n.bot_count++;
                n.pcs[n.bot_count] = new worker.MAINBOARD(n.GeneralConfig, agent, n.id, n.game_server);
				
				n.pcs[n.bot_count].init();
				n.pcs[n.bot_count].configure();
				n.pcs[n.bot_count].PC_START(n.id);
				n.id++;
				
				setTimeout(function(){
//					console.log(window + " noobs");
				}, 10000)
				
				
            }
		}

        } catch (e) {
            console.log('Error occured on startup: ' + e);
        }
    }
}
	this.startFeederBotOnProxies = startFeederBotOnProxies;
	
}

var fileNameGeneralConfig = './config/GeneralConfig.ini';
var fileNameWhitelist = './config/whitelist.txt';
var fileNameUsers = './config/userRoles.json';
var fileNameServerConfig = './config/ServerConfig.ini';

General_Cordinator.prototype.loadGeneralConfig = function () {
    try {
        if (!fs.existsSync(fileNameGeneralConfig)) {
            // No GeneralConfig
            Logger.warn("GeneralConfig not found... Generating new GeneralConfig");
            // Create a new GeneralConfig
            fs.writeFileSync(fileNameGeneralConfig, ini.stringify(this.GeneralConfig), 'utf-8');
        } else {
            // Load the contents of the GeneralConfig file
            var load = ini.parse(fs.readFileSync(fileNameGeneralConfig, 'utf-8'));
            // Replace all the default GeneralConfig's values with the loaded GeneralConfig's values
            for (var key in load) {
                if (this.GeneralConfig.hasOwnProperty(key)) {
                    this.GeneralConfig[key] = load[key];
                } else {
                    Logger.error("Unknown GeneralConfig.ini value: " + key);
                }
            }
        }
    } catch (err) {
        Logger.error(err.stack);
        Logger.error("Failed to load " + fileNameGeneralConfig + ": " + err.message);
    }

    Logger.setVerbosity(this.GeneralConfig.logVerbosity);
    Logger.setFileVerbosity(this.GeneralConfig.logFileVerbosity);
	this.applyGeneralConfig();
};


General_Cordinator.prototype.applyGeneralConfig = function () {
    try {
        if (!fs.existsSync(fileNameGeneralConfig)) {
            // No GeneralConfig
            Logger.warn("GeneralConfig not found... Generating new GeneralConfig");
            // Create a new GeneralConfig
            fs.writeFileSync(fileNameGeneralConfig, ini.stringify(this.GeneralConfig), 'utf-8');
        } else {
            // Load the contents of the GeneralConfig file
            var load = ini.parse(fs.readFileSync(fileNameGeneralConfig, 'utf-8'));
            // Replace all the default GeneralConfig's values with the loaded GeneralConfig's values
            for (var key in load) {
                if (this.GeneralConfig.hasOwnProperty(key)) {
                    this.GeneralConfig[key] = load[key];
                } else {
                    Logger.error("Unknown GeneralConfig.ini value: " + key);
                }
            }
        }
    } catch (err) {
        Logger.error(err.stack);
        Logger.error("Fail on Apply GeneralConfiguration:" + err.message);
    }

   
};

General_Cordinator.prototype.loadServerConfig = function () {
    try {
        if (!fs.existsSync(fileNameServerConfig)) {
            // No ServerConfig
            Logger.warn("ServerConfig not found... Generating new ServerConfig");
            // Create a new ServerConfig
            fs.writeFileSync(fileNameServerConfig, ini.stringify(this.ServerConfig), 'utf-8');
        } else {
            // Load the contents of the ServerConfig file
            var load = ini.parse(fs.readFileSync(fileNameServerConfig, 'utf-8'));
            // Replace all the default ServerConfig's values with the loaded ServerConfig's values
            for (var key in load) {
                if (this.ServerConfig.hasOwnProperty(key)) {
                    this.ServerConfig[key] = load[key];
                } else {
                    Logger.error("Unknown ServerConfig.ini value: " + key);
                }
            }
        }
    } catch (err) {
        Logger.error(err.stack);
        Logger.error("Failed to load " + fileNameServerConfig + ": " + err.message);
    }

	this.applyServerConfig();
};


General_Cordinator.prototype.applyServerConfig = function () {
    try {
        if (!fs.existsSync(fileNameServerConfig)) {
            // No ServerConfig
            Logger.warn("ServerConfig not found... Generating new ServerConfig");
            // Create a new ServerConfig
            fs.writeFileSync(fileNameServerConfig, ini.stringify(this.ServerConfig), 'utf-8');
        } else {
            // Load the contents of the ServerConfig file
            var load = ini.parse(fs.readFileSync(fileNameServerConfig, 'utf-8'));
            // Replace all the default ServerConfig's values with the loaded ServerConfig's values
            for (var key in load) {
                if (this.ServerConfig.hasOwnProperty(key)) {
                    this.ServerConfig[key] = load[key];
                } else {
                    Logger.error("Unknown ServerConfig.ini value: " + key);
                }
            }
        }
    } catch (err) {
        Logger.error(err.stack);
        Logger.error("Fail on Apply GeneralConfiguration:" + err.message);
    }

   
};

General_Cordinator.prototype.loadUserList = function () {
    try {
        this.userList = [];
        if (!fs.existsSync(fileNameUsers)) {
            Logger.warn(fileNameUsers + " is missing.");
            return;
        }
        var usersJson = fs.readFileSync(fileNameUsers, 'utf-8');
        var list = JSON.parse(usersJson.trim());
        for (var i = 0; i < list.length; ) {
            var item = list[i];
            if (!item.hasOwnProperty("ip") ||
                !item.hasOwnProperty("password") ||
                !item.hasOwnProperty("role") ||
                !item.hasOwnProperty("name")) {
                list.splice(i, 1);
                continue;
            }
            if (!item.password || !item.password.trim()) {
                Logger.warn("User account \"" + item.name + "\" disabled");
                list.splice(i, 1);
                continue;
            }
            if (item.ip) {
                item.ip = item.ip.trim();
            }
            item.password = item.password.trim();
            if (!UserRoleEnum.hasOwnProperty(item.role)) {
                Logger.warn("Unknown user role: " + item.role);
                item.role = UserRoleEnum.USER;
            } else {
                item.role = UserRoleEnum[item.role];
            }
            item.name = (item.name || "").trim();
            i++;
        }
        this.userList = list;
        Logger.info(this.userList.length + " user records loaded.");
    } catch (err) {
        Logger.error(err.stack);
        Logger.error("Failed to load " + fileNameUsers + ": " + err.message);
    }
}

General_Cordinator.prototype.loadWhitelist = function () {
    try {
        if (!fs.existsSync(fileNameWhitelist)) {
            Logger.warn(fileNameWhitelist + " not found");
        } else {
            var words = fs.readFileSync(fileNameWhitelist, 'utf-8');
            words = words.split(/[\r\n]+/);
            words = words.map(function (arg) { return arg.trim().toLowerCase(); });
            words = words.filter(function (arg) { return !!arg; });
            this.whitelist = words;
            Logger.info(this.whitelist.length + " whitelist user loaded");
        }
    } catch (err) {
        Logger.error(err.stack);
        Logger.error("Failed to load " + fileNameWhitelist + ": " + err.message);
    }
};

General_Cordinator.prototype.checkWhitelist = function (value) {
    if (!value) return false;
    value = value.toLowerCase().trim();
    if (!value) return false;
    for (var i = 0; i < this.whitelist.length; i++) {
        if (value.indexOf(this.whitelist[i]) >= 0) {
            return true;
        }
    }
    return false;
};

General_Cordinator.prototype.changeGeneralConfig = function (name, value) {
    if (value == null || isNaN(value)) {
        Logger.warn("Invalid value: " + value);
        return;
    }
    if (!this.GeneralConfig.hasOwnProperty(name)) {
        Logger.warn("Unknown GeneralConfig value: " + name);
        return;
    }
    this.GeneralConfig[name] = value;
    
    // update/validate
    this.GeneralConfig.playerMinSize = Math.max(32, this.GeneralConfig.playerMinSize);
    Logger.setVerbosity(this.GeneralConfig.logVerbosity);
    Logger.setFileVerbosity(this.GeneralConfig.logFileVerbosity);
    
    Logger.print("Set " + name + " = " + this.GeneralConfig[name]);
};


//START EVERYTHING

new General_Cordinator();

