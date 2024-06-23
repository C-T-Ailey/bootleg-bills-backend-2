const express= require("express");

const router = express.Router()

router.use(express.json())

const isLoggedIn = require("../helper/isLoggedIn")
const productCtrl = require("../controllers/product")

router.post("/product/add", isLoggedIn, productCtrl.product_index_post)
router.get("/product/index", productCtrl.product_index_get)
router.delete("/product/delete", isLoggedIn, productCtrl.product_delete_get);
router.get("/product/detail", productCtrl.product_detail_get);
router.get("/product/edit", isLoggedIn, productCtrl.product_edit_get)
router.put("/product/update", isLoggedIn, productCtrl.product_update_put)


module.exports = router;


