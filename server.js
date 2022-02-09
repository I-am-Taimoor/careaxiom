const express = require('express');
var getTitleAtUrl = require('get-title-at-url');
const app = express();
const port = 8000
const host= 'localhost'
var head = '<html><head></head><body><h1> Following are the titles of given websites: </h1><ul>';
var end = '</ul></body></html>';
var list= ''

app.listen(port, host, (req,res)=>{
    console.log('listening on port' + port)
});

app.get('/I/want/title/', (req, res)=>{
    var address = req.query.address
     console.log('Query Params', req.query);
    if(typeof(address) == typeof(''))
   {
        asyncCall(address);
    }
else
    {
    for(var i in address)
       { 
           asyncCall(address[i]);
        };
    }
    res.send(head + list + end) 
},
)


function getTitle(address) {
    return new Promise(resolve => {
        getTitleAtUrl(address, function(title){
            if(title == undefined || title == null || title == '')
            {
                title = 'NO RESPONSE'
            }
            list = list +  '<li>' + address +'  -  ' + title + '</li>';
          });
          resolve('resolved')
    });
  }
  
  async function asyncCall(address) {
    await getTitle(address);
  }
    