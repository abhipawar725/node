const http = require('http');
const server = http.createServer((req, res) =>{
 const date = new Date();
 const current_date = date.toLocaleDateString();

 res.writeHead(200, { 'Content-Type' : 'application/json' });

 const result = {
    today_date : current_date
 };

 const today_date = JSON.stringify(result);

 res.write(today_date);
 res.end();
});
server.listen(5000);