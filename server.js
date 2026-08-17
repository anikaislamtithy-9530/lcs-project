const express = require('express');
const app = express();


function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}


function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


function isNaturalNumber(val) {
    let num = Number(val);
    return Number.isInteger(num) && num > 0;
}


app.get('/ridwan_bin_masum2003_gmail_com', (req, res) => {
    const { x, y } = req.query;
    
    
    if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
        return res.send('NaN');
    }
    
    let numX = parseInt(x);
    let numY = parseInt(y);
    let result = lcm(numX, numY);
    
    return res.send(result.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});