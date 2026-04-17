const express = require("express");
const app = express();

const PORT = 3000;

// Addition
app.get("/add/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    const result = num1 + num2;
    res.send(`Addition Result: ${result}`);
});

// Subtraction
app.get("/subtract/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    const result = num1 - num2;
    res.send(`Subtraction Result: ${result}`);
});

// Multiplication
app.get("/multiply/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    const result = num1 * num2;
    res.send(`Multiplication Result: ${result}`);
});

// Division
app.get("/divide/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (num2 === 0) {
        return res.send("Error: Cannot divide by zero");
    }

    const result = num1 / num2;
    res.send(`Division Result: ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
