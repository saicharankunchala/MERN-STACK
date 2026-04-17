const express = require("express");
 const app = express();
  app.use(express.json()); 
  app.get('/', (req, res) => { 
    res.json({ message: 'hello from express rest api' });
 });
   app.get('/about', (req, res) => { 
    res.json({ message: 'this is aboutr the page' }); }); 
   const PORT = process.env.PORT || 3000; 
   app.listen(PORT, () => { 
    console.log("Express REST api running on http://localhost:${PORT}); 
    });
