const { body, validationResult } = require("express-validator");
const items = require("../models/item");

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
console.log(
  "Hi"
)

exports.category_list = async(req, res, next) => {
  try {
    const categories = await Category.find().exec();
    res.render('category_list', { title: 'All Categories', categories });
  } catch (err) {
    next(err);
  }
};

console.log(
  "Hi"
)


exports.category_detail = async(req, res, next) => {
  try {
    const category = await Category.findById(req.params.id).exec();
    if (!category) {
      const err = new Error('Category not found');
      err.status = 404;
      throw err;
    }
    const items = await items.find({ category: category._id }).exec();
    res.render('category_detail', { category, items });
  } catch (err) {
    next(err);
  }
};
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.render("category_form", {
    title: "Create Category",
    category: new Category(),
  });
});

console.log(
  "Hi"
)



exports.category_create_post = [
  // Validate and sanitize the name field.
  body("name", "Category name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a category object with escaped and trimmed data.
    const category = new Category({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("category_form", {
        title: "Create Category",
        category: category,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Check if Category with the same name already exists.
      const categoryExists = await Category.findOne({ name: req.body.name }).exec();
      if (categoryExists) {
        // Category exists, redirect to its detail page.
        res.redirect(categoryExists.url);
      } else {
        await category.save();
        // New category saved. Redirect to category detail page.
        res.redirect(category.url);
      }
    }
  }),
];


console.log(
  "Hi"
)




// Display detail page for a specific category.


// Display category create form on GET.
// Display Genre create form on GET.
// exports.category_create_get = asyncHandler(async (req, res, next) => {
//   res.render("category_form", { title: "Create Category" });
// });




// Handle category create on POST.

// Handle Item create on POST.

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


  