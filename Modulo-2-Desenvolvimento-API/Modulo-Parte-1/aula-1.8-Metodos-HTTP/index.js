import http from "http";

http.createServer((req, res) => {

    if((req.method === "GET") && (req.url === "/teste")) {

        res.write("GET /test executado com sucesso");

    } else {
        res.write("Hello World"); 
    }
    res.statusCode = 200;
    res.end();
}).listen(9090);