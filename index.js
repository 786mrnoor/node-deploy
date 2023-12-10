const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;
console.log(index);
console.log(products);

const express = require('express');
const morgan = require('morgan');
const server = express();

//body parser
server.use(express.json());
// server.use(express.urlencoded());

server.use(morgan('dev'))
server.use(express.static('public'));
// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
//     next();
// });

const auth = (req, res, next) => {
    console.log(req.query);

    // if(req.query.password=='123'){
    // if (req.body.password == '123') {
    //     next()
    // }
    // else {
    //     res.sendStatus(401);
    // }
    next();
}


server.get('/product/:id', auth, (req, res) => {
    console.log(req.params);
    res.json({ type: 'GET' });
});
server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' });
});
server.put('/', (req, res) => {
    res.json({ type: 'PUT' });
});
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
});
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
});



server.get('/demo', (req, res) => {
    // res.json(products);
    // res.send('<h1>hello</h1>')
    // res.sendFile('D:\\node js\\node-app\\index.html');
})




server.listen(8080, () => {
    console.log('server started');
});

