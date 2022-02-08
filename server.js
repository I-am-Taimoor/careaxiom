const express = require('express');
var getTitleAtUrl = require('get-title-at-url');
const app = express();
const port = 8000
const host= 'localhost'
var head = '<html><head></head><body><h1> Following are the titles of given websites: </h1><ul>';
var end = '</ul></body></html>';
var list='';

app.listen(port, host, (req,res)=>{
    console.log('listening on port' + port)
});

app.get('/I/want/title/', (req, res)=>{
    var address = req.query.address
     console.log('Query Params', req.query);
    if(typeof(address) == typeof(''))
   {
        getTitleAtUrl(address, function(title){
            list = list +  '<li>' + address +'  -  ' + title + '</li>';
          });
    }
else
    {
    
    var k = 0;    
    for(var i in address)
       { 
           getTitleAtUrl(address[i], function(title)
            {
                list = list +  '<li>' + address[k] +'  -  ' + title + '</li>';
                k=k+1;
   
            },
            )
        };
    }
    res.send(head + list + end) 
},
)
