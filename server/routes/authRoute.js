import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authenticate, (req, res) => {
  const user = req.user;
  res.status(200).json({
    message: "Authenticated",
    data: {
      user,
    },
  });
});

export default router;
