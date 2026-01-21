const { Router } = require("express");
const controllers = require("../controllers/foods.js");

const router = Router();

router.get("/", controllers.getFoods);
router.get("/new", controllers.addFoods);
// get request to "/foods/new" render form
router.post("/", controllers.createItem);
// post request to "/foods"
// get request to "/foods/:foodId" for the show page
router.get("/:pantryId", controllers.itemDetails);
// get request to "/foods/:foodId/edit" to show edit page
router.get("/:pantryId/edit", controllers.getEditFormPage);
// put request to "/foods/:pantryId" to process update request
router.put("/:pantryId", controllers.updateItem)
// delete request to "/foods/:foodId" to delete a food
router.delete("/:pantryId", controllers.deleteItem);

module.exports = router;
