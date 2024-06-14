const { server } = require('./server');

(async () => {
    try {
        await server.start();
        console.log("Server listening: " + server.info.uri);
    } catch (error) {
        console.log(error);
    }
})();