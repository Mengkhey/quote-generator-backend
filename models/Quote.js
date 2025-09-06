// const mongoose = require("mongoose");

// const quoteSchema = mongoose.Schema({
//     text: { type: String, require: true},
//     owner: { type: String, require: true},
// });

// module.exports = mongoose.models("Quote", quoteSchema);
const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: String, required: true }
});

module.exports = mongoose.model("Quote", quoteSchema);
