// Imports
const express = require('express');
const request = require('supertest'); // Import Supertest

// Instantiations
const app = express();

// Configurations
app.set('port', process.env.PORT || 8080);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Export the app for testing
module.exports = app;

// Server bootup or unit testing
if (require.main === module) {
    // If the script is run directly, start the server
    app.listen(app.get('port'), () => {
        console.log(`Example app listening on port ${app.get('port')}!`);
    });
} else {
    // If the script is required (e.g., during testing), run the tests
    describe('GET /', function() {
        it('responds with Hello World!', function(done) {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!', done);
        });
    });
}
