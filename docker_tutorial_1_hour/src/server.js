const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to my awesome app!");
});

app.listen(3000, function () {
	console.log("app listening on port 3000");
});

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
