const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { loginController } = require('./controllers/authController');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

app.post('/login', loginController);
app.get('/', (req, res) => {
    res.send('Welcome to the Curse Progress Dashboard Backend!');
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
