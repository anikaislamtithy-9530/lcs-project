const express = require('express');
const app = express();

// BigInt দিয়ে GCD বের করার ফাংশন
function gcd(a, b) {
    while (b !== 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// BigInt দিয়ে LCM বের করার ফাংশন
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Strict Natural Number (1, 2, 3...) Validation Check
function isNaturalNumber(val) {
    if (typeof val !== 'string') return false;
    // কেবল পজিটিভ পূর্ণসংখ্যা (স্পেস বা ডেসিমেল ছাড়া) এলাউ করবে
    return /^[1-9]\d*$/.test(val.trim());
}

app.get('/anikaislam9530_gmail_com', (req, res) => {
    // Response strictly Plain Text হওয়া নিশ্চিত করা
    res.setHeader('Content-Type', 'text/plain');

    const { x, y } = req.query;

    // Validation check
    if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
        return res.status(200).send('NaN');
    }

    try {
        const numX = BigInt(x.trim());
        const numY = BigInt(y.trim());

        const result = lcm(numX, numY);

        return res.status(200).send(result.toString());
    } catch (err) {
        return res.status(200).send('NaN');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});