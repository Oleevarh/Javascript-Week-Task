const http = require(`http`);


const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.end(`Name: Dike Oliver, Date Of Birth: 09/06/1900, State Of Origin: Imo State`)
  } else if (req.url === "/about") {
    res.end(`Hi, Oliver is my name. I am from Imo state. Born and raised in Lagos. Born into a Catholic family. I am a web developer`);
  } else if (req.url === "/contact") {
    res.end(`IG: Oleevarh`);
  } else {
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`);
  }
});

server.listen(50000, () => {
  console.log(`server is running on port 50000`);
});
