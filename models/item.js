const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  price: { type: Number, required: true },
  numberInStock: { type: Number, required: true },
  url: { type: String },
});

// Virtual for item's URL
ItemSchema.virtual("myurl").get(function () {
  return  `/category/item/${this._id}`;

});

// Export model
module.exports = mongoose.model("Item", ItemSchema);
