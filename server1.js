const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hello from node server!");
    res.end();
});
server.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});

const myserver=http.createServer((req,res)=>{
    res.write("Hello from node server!");
    res.end();
});
myserver.listen(4000,()=>{
    console.log("Server running on http://localhost:4000");
});

const server1=http.createServer((req,res)=>{
    res.write("Hello from node server!");
    res.end();
});
server1.listen(5000,()=>{
    console.log("server running on http://localhost:5000");
});

const server2=http.createServer((req,res)=>{
    res.write("Hello from node server!");
    res.end();
});
server2.listen(6000,()=>{
    console.log("server running on http://localhost:6000");
});

const server3=http.createServer((req,res)=>{
    res.write("Hello from node server!");
    res.end();
});
server3.listen(7000,()=>{
    console.log("server running on http://localhost:7000");
});
