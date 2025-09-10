require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const quoteRoutes = require("./routes/quoteRoutes");
const aiQuoteRouter =require("./routes/gemini.js");

const cors = require("cors");


//app aplication 
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", aiQuoteRouter);

//database connection 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Data connect successfully"))
    .catch(err => console.error("Fail to connect database", err));


// routes
app.use("/api/quotes", quoteRoutes);

// test first api 
app.get("/", (req, res) => {
  res.send("API is running!");
});

//server port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() =>{
    console.log(`Server running on http://localhost:${PORT}`);
});