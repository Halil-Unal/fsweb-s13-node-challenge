const express = require('express');
const server = express();
const actionrouter = require("./actions/actions-router")
// Sunucunuzu yapılandırın
// Eylem routerınızı /api/actions/actions-router.js içinde oluşturun
// Proje roterlarınızı /api/projects/projects-router.js içinde oluşturun
// Bu dosyanın içinde `server.listen()` YAPMAYIN!
server.use(express.json());
server.use("/api/actions",actionrouter);
server.get('/', (req, res) => {
    res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
  });

module.exports = server;
