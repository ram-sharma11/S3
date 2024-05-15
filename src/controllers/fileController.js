const { errorResponse } = require("../utils/common")
const { uploadFile,getFileStream,getName
} = require("../services/fileServices")


module.exports.uploadfile = async (req, res) => {
    try {
        const response = await uploadFile(req)
        return res.status(201).json(response);
    } catch (err) {
        return errorResponse(err, res);
    }
};


module.exports.getFile = async (req, res) => {
    try {
        const fileName = await getName(req)
        const fileStream = await getFileStream(req);
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        fileStream.pipe(res);

    } catch (err) {
        return errorResponse(err, res);
    }
};


