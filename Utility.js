var http = require("http");

module.exports = {
	requestTitle : function(address,getTitle){
		var regex = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
			if(validURL(address)){
			http.get(address, function (res) {
				res.on('data', function (chunk){
					var match = regex.exec(chunk.toString());
					if (match && match[2]) {
						getTitle((res.statusCode == 200) ? match[2] : "Not found");
					}
				});
			}).on('error',function(e){
				getTitle("Error: " + e.message);
			});
		}
		else{
			getTitle("Error processing query");
		}
	},
	getCompleteUrl : function(i, callback){
		return callback(i);
	}
}


function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
  }
