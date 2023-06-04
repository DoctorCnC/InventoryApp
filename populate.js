

const Category = require("./models/category");
const Item = require("./models/item");

const categories = [];
const items = [];


const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = "mongodb+srv://robertshah:robertshah@cluster0.1gpkvsk.mongodb.net";






main().catch((err) => console.log(err));




async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
    console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate("Fantasy", "Books of fantasy genre"),
    categoryCreate("Science Fiction", "Books of science fiction genre"),
    categoryCreate("French Poetry", "Books of French poetry genre"),
  ]);
}


async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate(
      "The Name of the Wind",
      "A thrilling fantasy novel.",
      categories[0],
      19.99,
      10,
      "https://example.com/item1"
    ),
    itemCreate(
      "Dune",
      "A science fiction masterpiece.",
      categories[1],
      24.99,
      5,
      "https://example.com/item2"
    ),
    // Add more items as needed
  ]);
}



async function categoryCreate(name, description) {
  const category = new Category({ name: name, description: description });
  await category.save();
  categories.push(category);
  console.log(`Added category: ${name}`);
}



async function itemCreate(name, description, category, price, numberInStock, url) {
  const item = new Item({
    name: name,
    description: description,
    category: category,
    price: price,
    numberInStock: numberInStock,
    url: url,
  });
  await item.save();
  items.push(item);
  console.log(`Added item: ${name}`);
}

