let express = require("express");

let router = express.Router();

let controller = require("./controller");

router.post("/todo", controller.addItem);
router.put("/todo/:id", controller.editItem);
router.get("/todo", controller.listItem);
router.get("/todo/:id", controller.getItem);
router.delete("/todo/:id", controller.deleteItem);

module.exports = router;