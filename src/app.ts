/**
 * Module dependencies.
 */
import * as express from 'express';

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
    res.send('Luxer Server Up');
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;