const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/foodController');

app.use("/", routes);

app.listen(PORT);
console.log(`App listening on Port: ${PORT}. \nLocal Development: http://localhost:${PORT}/`);
