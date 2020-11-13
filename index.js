const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect to database
connectDB();

app.use(express.json({extented: false}));

//Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port: ${port}`));