const express = require("express");
const addressRouter = require("./routes/address")
const cors = require('cors')
const app = express();
const port = 3000;

// middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api', addressRouter)

app.listen(port, () => {
  console.log(`AddressBook app listening on port ${port}`);
});
