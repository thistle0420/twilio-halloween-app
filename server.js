let express = require('express');
const path = require('path');
let app = express();
const PORT = 4000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log('server is listening at http://localhost:%s', PORT);
});
