const http = require('http');
const hostname = '0.0.0.0';
const port = 4000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!\nBurhanuddin 036\nODD AND EVEN');
    function isEven(number) {
        var number = 6;
        return number % 2 === 0;
    }

    function isOdd(number) {
        return number % 2 !== 0;
    }

    // Test the functions
    console.log(isEven(4));  // Output: true
    console.log(isEven(7));  // Output: false

    console.log(isOdd(4));   // Output: false
    console.log(isOdd(7));   // Output: true

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
