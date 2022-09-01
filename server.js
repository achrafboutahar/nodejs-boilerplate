const app = require("./app");

// # Load .env file
require("dotenv").config();

const PORT = process.env.PORT;
const port = PORT || "9000";

app.listen(port, () => console.log(`Listening on port : ${port}`));
