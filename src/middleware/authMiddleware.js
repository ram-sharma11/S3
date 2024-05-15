const CustomError = require("../utils/customError")
const { errorResponse } = require("../utils/common")
const { verifyJWT } = require("../utils/common")
const userModel = require("../models/user")

async function validateToken(request) {
  if (!(request.headers.authorization)) {
    throw new CustomError("Authentication token required", 401);
  }
  const token = request.headers.authorization.split(' ')[1];
  if (!token) {
    throw new CustomError("Invalid Token", 401);
  }
  const verifyToken = await verifyJWT(token);
  if (!verifyToken) {
    throw new CustomError("Invalid Token", 401);
  }
  return { verifyToken, token };
}

const authorization = async (req, res, next) => {
  try {
    const { verifyToken } = await validateToken(req);
    const user = await userModel.findById(verifyToken.id)
    if (!user) {
      throw new CustomError("User not exist from this token", 401);
    }   
    const objectId = user._id
   req.userid = objectId.toString();
    
    return next();
  } catch (err) {
    return errorResponse(err, res);
  }
};




module.exports = { authorization }