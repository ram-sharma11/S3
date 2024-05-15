const { errorResponse } = require("../utils/common")
const { loginUser,
    registerUser
} = require("../services/authServices")


module.exports.register = async (req, res) => {
    try {
        const response = await registerUser(req.body)
        return res.status(201).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};

module.exports.login = async (req, res) => {
    try {
        const response = await loginUser(req.body);
        return res.status(200).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};

