const app = require("./app");

const PORT = process.env.PORT;
const port = PORT || "9000";

app.listen(port, () => console.log(`Listening on port : ${port}`));
