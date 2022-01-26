// server creation

// 1. http module

const http = require('http');

const server = http.createServer( (req, res) => {
    console.log('request has been made from browser to server');
    console.log(req.method);
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');       // what type of data we are sending in response    
    res.write('<h1>hello Sams!</h1>')                   
    res.end();                                         // response end
})


// port number, host, callback func
server.listen(3000, 'localhost', () => {
    console.log('server is listening');
})