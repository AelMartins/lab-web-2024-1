const {server, plugins} = require('./server');

(async () => {
    try {
        await server.register(plugins);

        await server.start();
        console.log("Server listening: " + server.info.uri);
    } catch (error) {
        console.log(error);
    }
})();