const fileModel = require("../models/file")
const CustomError = require('../utils/customError');
const fs = require('fs')
const{checkbucketActive} = require("./bucketServices")


exports.uploadFile = async (requestData) => {

    const isActive = await checkbucketActive(requestData.body.bucketId);
    if (!isActive) {
        throw new CustomError("Bucket Not found", 400);
    }
    let file
    if (requestData.file) {
          file = await fileModel.create({
        filename: requestData.file.filename,
        bucketId: requestData.body.bucketId,
        size: requestData.file.size,
        url: requestData.file.path
        })
    }
    else {
        throw new CustomError("File Not uploaded", 400);
    }
    return {
        status: true,
        message: "File uploaded Successfully",
        data:file
    };
}

exports.getFileStream = async (req) => {
    const fileId = req.params.fileId;

    const file = await fileModel.findById(fileId)
    if (!file) {
        throw new CustomError("File not found!", 400);
    }
    const filePath = `S3/${file.filename}`;
    const fileStream = fs.createReadStream(filePath);
    return fileStream;
};

exports.getName = async (req) => {
    const fileId = req.params.fileId;

    const file = await fileModel.findById(fileId)
    if (!file) {
        throw new CustomError("File not found!", 400);
    }
    return file.filename;
};




