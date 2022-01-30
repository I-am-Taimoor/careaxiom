const express = require('express');
var getTitleAtUrl = require('get-title-at-url');
const app = express();
const port = 8000
const host= 'localhost'


app.listen(port, host, (req,res)=>{
    console.log('listening on port' + port)
});

app.get('/I/want/title/', (req, res)=>{
    var address = req.query.address
     console.log('Query Params', req.query);
    if(typeof(address) == typeof(''))
   {
        getTitleAtUrl(address, function(title){
            res.send('<html><head></head><body><h1> Following are the titles of given websites: </h1><ul>' + 
            '<li>' + address +'  -  ' + title + '</li>'
             + '</ul></body></html>')
      });
      
    }
else
    {
        
        for(var i in address)
       { 
            getTitleAtUrl(address[i], function(title)
            {
                for(var i in address)
                res.send('<html><head></head><body><h1> Following are the titles of given websites: </h1><ul>' + 
                '<li>' + address[i] +'  -  ' + title + '</li>'
                + '</ul></body></html>')

            })
        };
    }
    
},)






