const express = require('express');
const app = express();
app.get('/quote', (request, response) => {
 response.send('Dont waste your time looking back. Youre not going that way.');
});
app.listen(8080, 'localhost');