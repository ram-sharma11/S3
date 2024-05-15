
const userModel = require("../models/user");
const CustomError = require('../utils/customError');
const { JOIValidationRegister,
    JOIValidationlogin,
    generatePasswordHash,
    createJWT,
    comparePasswordHash
} = require("../utils/common");



exports.registerUser = async (requestData) => {

    // check the user send data is in required format
    const value = JOIValidationRegister(requestData);
    if (value.error) {
        console.log(value.error.details[0].message)
        throw new CustomError("VALIDATION ERROR", 400, value.error.message.split('. '));
    };
    // cheeck is email already exists
    const isEmailExists = await userModel.findOne({ email: requestData.email })
    if (isEmailExists) {
        throw new CustomError("EMAIL ALREADY EXISTS", 422);
    }
    const hashedPassword = await generatePasswordHash(requestData.password)
    
        const newUser = await userModel.create({
            name: requestData.name,
            email: requestData.email,
            password: hashedPassword,
        })
    
    return {
        status: true,
        message: "User Registered Successfully",
        data: newUser,
    };
}

exports.loginUser = async (requestData) => {
    // check the user send data is in required format
    const value = JOIValidationlogin(requestData);
    if (value.error) {
        throw new CustomError("validation Error", statusCode.BAD_REQUEST, value.error.message.split('. '));
    };
    const existingUser = await userModel.findOne({ email: requestData.email })
    if (!existingUser) {
        throw new CustomError("Invalid Login Credentials", 401,)
    }
    matchPassword = await comparePasswordHash(requestData.password, existingUser.password)
    if (!matchPassword) {
        throw new CustomError("Invalid Login Credentials", 401)
    }
    const token = await createJWT({ emial: existingUser.email, id: existingUser._id, })

    return {
        status: true,
        message: "User Login Successfully",
        token,
        data: existingUser,
    };
}
