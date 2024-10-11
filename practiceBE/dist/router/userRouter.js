"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.route("/register").post(userController_1.createAccount);
router.route("/login").post(userController_1.loginAccount);
router.route("/stage-one/:userID").patch(userController_1.stage1Score);
router.route("/user/:userID").get(userController_1.readSingleAccount);
router.route("/users/").get(userController_1.userAccount);
exports.default = router;