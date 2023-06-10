const { body, validationResult } = require("express-validator");

const Category = require("../models/category");
const asyncHandler = require("express-async-handler");


// Display site home page.
exports.index = asyncHandler(async (req, res, next) => {
  // Get category count
  const numCategories = await Category.countDocuments({}).exec();

  // Retrieve category data
  const categories = await Category.find({}).exec();

  res.render("index", {
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
// Handle category create on POST.
// exports.category_create_post = [
//   // Validate and sanitize the name field.
//   body("name", "category name must contain at least 3 characters")
//     .trim()
//     .isLength({ min: 3 })
//     .escape(),

//   // Process request after validation and sanitization.
//   asyncHandler(async (req, res, next) => {
//     // Extract the validation errors from a request.
//     const errors = validationResult(req);

//     // Create a category object with escaped and trimmed data.
//     const category = new category({ name: req.body.name });

//     if (!errors.isEmpty()) {
//       // There are errors. Render the form again with sanitized values/error messages.
//       res.render("category_form", {
//         title: "Create category",
//         category: category,
//         errors: errors.array(),
//       });
//       return;
//     } else {
//       // Data from form is valid.
//       // Check if category with same name already exists.
//       const categoryExists = await category.findOne({ name: req.body.name }).exec();
//       if (categoryExists) {
//         // category exists, redirect to its detail page.
//         res.redirect(categoryExists.url);
//       } else {
//         await category.save();
//         // New category saved. Redirect to category detail page.
//         res.redirect(category.url);
//       }
//     }
//   }),
// ];


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


  