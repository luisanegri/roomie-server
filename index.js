const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const corsMiddleware = cors();
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(parserMiddleware);

app.listen(port, () => console.log(`app running on port ${port}`));
