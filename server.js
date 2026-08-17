const express = require('express');
const app = express();

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Strict Check: শুধু মাত্র পজিটিভ ইন্টিজার ডিজিট আছে কি না চেক করার জন্য
function isNaturalNumber(val) {
    if (!val || typeof val !== 'string') return false;
    // শুধু ১ বা তার বেশি অঙ্ক/ডিজিট থাকলে (যেমন "123", কিন্তু "0", "-5", "4.5" বা "abc" নয়)
    return /^[1-9]\d*$/.test(val.trim());
}

app.get('/anikaislam9530_gmail_com', (req, res) => {
    // Response Header Plain Text নিশ্চিত করা
    res.setHeader('Content-Type', 'text/plain');

    const { x, y } = req.query;

    if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
        return res.status(200).send('NaN');
    }

    const numX = parseInt(x, 10);
    const numY = parseInt(y, 10);
    const result = lcm(numX, numY);

    return res.status(200).send(result.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});