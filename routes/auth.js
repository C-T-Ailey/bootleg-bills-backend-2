const express = require("express")

const router = express.Router();

//const { attachment } = require("express/lib/response");

const isLoggedIn = require("../helper/isLoggedIn")
const authCtrl = require("../controllers/auth");

router.get("/auth/users", authCtrl.users_get_all);
router.get("/auth/users/detail", isLoggedIn, authCtrl.users_get_one)
//router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);
//router.get("/auth/login", authCtrl.auth_login_get);
router.post("/auth/login", authCtrl.auth_login_post);
router.post("/auth/refresh", authCtrl.auth_session_refresh_post);
//router.get("/auth/logout", authCtrl.auth_logout_get);
router.post("/auth/changepass", authCtrl.auth_password_change);

module.exports = router;