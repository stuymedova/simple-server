import * as fs from 'fs';
import * as http from 'http';

fs.readFile('./index.html', function (error, body) {
    if (error) throw error;

	const hostname = 'localhost';
	const port = 3000;
	const server = http.createServer((_, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(body);
	});

	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	});
});
