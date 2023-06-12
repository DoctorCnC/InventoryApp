const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String },
});

// Virtual for category's URL
CategorySchema.virtual("myurl").get(function () {
  return  `/category/${this._id}`;
  
});

// Export model
module.exports = mongoose.model("Category", CategorySchema);
