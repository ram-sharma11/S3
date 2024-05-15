
const bucketModel = require("../models/bucket");
const fileModel = require("../models/file");
const CustomError = require('../utils/customError');


exports.registerBucket = async (requestData) => {
     const newUser = await bucketModel.create({
            name: requestData.body.name,
            userId: requestData.userid,
        })
    return {
        status: true,
        message: "Bucket Registered Successfully",
        data: newUser,
    };
}

exports.getBucket = async (req) => {
    const bucketId  = req.params.bucketid
    const bucket = await findBucket(req);
    const files = await fileModel.find({bucketId })
     return {
        status: true,
        data: {bucket, files},
    };
}



exports.updateBucket = async (req) => {
    const bucket = await findBucket(req);
    bucket.name = req.body.name;
    bucket.save();
     return {
        status: true,
        data: bucket,
    };
}


exports.deleteBucket = async (req) => {
    const bucket = await findBucket(req);
    bucket.active = false
    bucket.save();
     return {
        status: true,
        message: "Bucket Deleted Successfully",
    };
}


exports.findAllBucekts = async (req) => {
    const buckets = await bucketModel.find({ active: true, userId:req.userid });
     return {
        status: true,
        data: buckets
    };
}


async function findBucket (req) {
    const userid = req.userid;
    const bucketId = req.params.bucketid
    const bucket = await bucketModel.findOne({ _id: bucketId, userId: userid });
    if(!bucket){
        throw new CustomError("Bucket not found", 404);
    }
    return bucket;
}

exports.checkbucketActive = async (bucketid) => {
    const bucket = await bucketModel.findById( bucketid );
    if (!bucket) {
        return false;
    }
    return true;
}
