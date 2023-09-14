const connect = require('connect');
const app = connect();

function logger(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
 };

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
};

function goodbyebro(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('GoodBye!');
};


app.use('/goodbye',goodbyebro);
app.use('/hello', helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');

