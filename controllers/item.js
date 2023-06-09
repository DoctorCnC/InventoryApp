const items = require("../models/item");
const Category = require("../models/category");

const asyncHandler = require("express-async-handler");

// Display list of all items.
exports.item_list = asyncHandler(async (req, res, next) => {
  const allItems = await items.find({}, 'name category')
    .sort({ name: 1 })
    .populate('category')
    .exec();

  res.render('item_list', { title: 'Item List', item_list: allItems });
});


exports.item_detail = asyncHandler(async (req, res, next) => {
  // Get details of item and populate the category
  const item = await items.findById(req.params.id)
    .populate("category")
    .exec();

  if (item === null) {
    // No results.
    const err = new Error("Item not found");
    err.status = 404;
    return next(err);
  }

  res.render("item_detail", {
    title: "Item Detail",
    item: item,
  });
});











// Display item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: item create GET");
});

// Handle item create on POST.
exports.item_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: item create POST");
});

// Display item delete form on GET.
exports.item_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: item delete GET");
});

// Handle item delete on POST.
exports.item_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: item delete POST");
});

// Display item update form on GET.
exports.item_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: item update GET");
});

// Handle item update on POST.
exports.item_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: item update POST");
});
