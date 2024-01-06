const express = require('express');
const app = express();

// Rota para a função getInfo
app.get('/episodes', (req, res) => {
    res.json({ message: 'Hello from your API!' });
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello rfom your API!' });
});
// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
