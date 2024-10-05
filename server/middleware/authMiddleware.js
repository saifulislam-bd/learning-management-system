import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  req.user = payload;
  next();
};

export default authenticate;
