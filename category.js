const express = require("express");
const router = express.Router();


const categoryController = require('../controllers/category');

const itemController = require('../controllers/item');


// Require controller modules.


// GET catalog home page.
router.get("/", categoryController.index);


router.get("/item/create", itemController.item_create_get);

// GET request to delete an item.
router.get("/item/:id/delete", itemController.item_delete_get);

// GET request to update an item.
router.get("/item/:id/update", itemController.item_update_get);

// POST request for creating an item.
router.post("/item/create", itemController.item_create_post);

// POST request to delete an item.
router.post("/item/:id/delete", itemController.item_delete_post);

// POST request to update an item.
router.post("/item/:id/update", itemController.item_update_post);

// GET request for one item.
router.get("/item/:id", itemController.item_detail);

// GET request for the list of all items.
router.get("/items", itemController.item_list);



router.get("/category/create", categoryController.category_create_get);

// POST request for creating a category.
router.post("/category/create", categoryController.category_create_post);

// GET request to delete a category.
router.get("/category/:id/delete", categoryController.category_delete_get);

// POST request to delete a category.
router.post("/category/:id/delete", categoryController.category_delete_post);

// GET request to update a category.
router.get("/category/:id/update", categoryController.category_update_get);

// POST request to update a category.
router.post("/category/:id/update", categoryController.category_update_post);

// GET request for one category.
router.get("/category/:id", categoryController.category_detail);

// GET request for the list of all categories.
router.get("/category", categoryController.category_list);

module.exports = router;
