/**
 * Module dependencies.
 */
import * as express from 'express';

/**
 * Create Express server.
 */
const app = express();

/**
 * Primary app route.
 */
app.get('/', (req, res) => {
    res.send('App is running.');
});

/**
 * Start Express server.
 */
app.listen(3000, () => {
    console.log(('  App is running at http://localhost:3000'));

});