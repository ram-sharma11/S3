const { errorResponse } = require("../utils/common")
const { getBucket,
    registerBucket,
    updateBucket,
    deleteBucket,
    findAllBucekts
} = require("../services/bucketServices")


module.exports.register = async (req, res) => {
    try {
        const response = await registerBucket(req)
        return res.status(201).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};


module.exports.getbucketById = async (req, res) => {
    try {
        const response = await getBucket(req)
        return res.status(200).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};


module.exports.editBucket = async (req, res) => {
    try {
        const response = await updateBucket(req)
        return res.status(200).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};


module.exports.deleteBucket = async (req, res) => {
    try {
        const response = await deleteBucket(req)
        return res.status(200).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};

module.exports.allBuckets = async (req, res) => {
    try {
        const response = await findAllBucekts(req)
        return res.status(200).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};




