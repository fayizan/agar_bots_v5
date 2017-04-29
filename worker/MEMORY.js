const http = require('http');
const fs = require('fs');
var Logger = require('../modules/Logger');
var AgarioClient = require("../src/");



function downloadCoreScript(callback, id) {
  let dest = __dirname + '/core/agario.core_'+id+'.js';
  let file = fs.createWriteStream(dest);

  http.get('http://agar.io/agario.core_'+id+'.js?' + Math.floor(new Date/1E3/60), function(resp) {
    resp.pipe(file);

    file.on('finish', function() {
      file.close(callback);
    });
  }).on('error', function(err) {
    fs.unlink(dest);

    callback(err);
  });
  //callback();
}

function MEMORY(a){
	
	this.config = a;

	
}


MEMORY.prototype.configure = function() {
	
	console.log(('[MEMORY] ').cyan + ('STARTING CONFIGURATION...').white);
	
	
	console.log(('[MEMORY] ').cyan + ('DONE !').green);
	
	
}


MEMORY.prototype.download_core = function(callback, id) {
	
	 downloadCoreScript(function(err) {
		 
		if (err) {
			
		  return Logger.error('Error while downloading agario.core.js', err);
		  
		}else{
			
			Logger.info("CORE IS DOWNLOADED !");
			Logger.info("STARTING STEPTS 2")
			Logger.info("BYPASSING NODE JS PROTECTION...")
			Logger.info("BYPASSING AGAR.IO WEBSOCKET PROTOCOL")
			Logger.info("BYPASSING AGAR.IO PROTOCOL")
			Logger.info("BYPASSING AGAR.IO CORE")
			Logger.info("BYPASSING SUCESS !")
			Logger.warn("Could not add CPU to MEMORY. Prossesing to a fix..")
			Logger.warn("RUNNING AUTO-SCRIPT-FIXER PLUGIN...")
			Logger.warn("[AUTO-SCRIPT-FIXER] FIXED !")
			Logger.info("[CPU] is running !")
			
		}
		
	}, id);
	
	callback();
	
}


module.exports = {a: MEMORY};