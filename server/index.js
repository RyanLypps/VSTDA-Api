const server = require('./app');

server.listen(8484, (req, res) => {
    console.debug(`Server is listening on http://localhost:8484`);
});