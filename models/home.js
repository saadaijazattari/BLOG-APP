const mongoose = require("mongoose")
const homeSchema = new mongoose.Schema({
  photo: String,
  tech: String,
  heading: String,
  text:  String,
  isWatches:{
    type: Boolean,
    default: false
  }

});
module.exports = mongoose.model("Blog", homeSchema);

