// const category = require("../models/category")
// const asyncHandler = require("express-async-handler")





// exports.index = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Site Home Page");

// // Display list of all categorys.
// exports.category_list = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category list");
//   });
  
//   // Display detail page for a specific category.
//   exports.category_detail = asyncHandler(async (req, res, next) => {
//     res.send(`NOT IMPLEMENTED: category detail: ${req.params.id}`);
//   });
  
//   // Display category create form on GET.
//   exports.category_create_get = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category create GET");
//   });
  
//   // Handle category create on POST.
//   exports.category_create_post = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category create POST");
//   });
  
//   // Display category delete form on GET.
//   exports.category_delete_get = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category delete GET");
//   });
  
//   // Handle category delete on POST.
//   exports.category_delete_post = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category delete POST");
//   });
  
//   // Display category update form on GET.
//   exports.category_update_get = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category update GET");
//   });
  
//   // Handle category update on POST.
//   exports.category_update_post = asyncHandler(async (req, res, next) => {
//     res.send("NOT IMPLEMENTED: category update POST");
//   });

const Category = require("../models/category");
const asyncHandler = require("express-async-handler");


// Display site home page.
exports.index = asyncHandler(async (req, res, next) => {
  // Get category count
  const numCategories = await Category.countDocuments({}).exec();

  // Retrieve category data
  const categories = await Category.find({}).exec();

  res.render("category/index", {
    title: "All Categories",
    category_count: numCategories,
    categories: categories,
  });
});


// Display list of all categories.
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category list");
});

// Display detail page for a specific category.
exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: category detail: ${req.params.id}`);
});

// Display category create form on GET.
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category create GET");
});

// Handle category create on POST.
exports.category_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category create POST");
});

// Display category delete form on GET.
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category delete GET");
});

// Handle category delete on POST.
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category delete POST");
});

// Display category update form on GET.
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category update GET");
});

// Handle category update on POST.
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category update POST");
});


  