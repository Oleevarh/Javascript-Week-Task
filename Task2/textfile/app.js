const http=require('http');
const fs = require (`fs`);

const server = http.createServer((req, res)=>{
const data = fs.readFileSync(`./assets/index.txt`, 'utf-8')
res.end(data);
})

server.listen(5002, ()=>{
    console.log(`server is running on port 5002`)
})