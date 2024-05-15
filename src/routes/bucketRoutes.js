const express = require('express')
const router = express.Router();
const {authorization} = require("../middleware/authMiddleware")
const bucketController = require("../controllers/bucketController")

router.post("",authorization, bucketController.register);
router.get("/getbucket/:bucketid", authorization , bucketController.getbucketById);
router.patch("/editbucket/:bucketid",authorization, bucketController.editBucket);
router.delete("/deletebucket/:bucketid",authorization,bucketController.deleteBucket);
router.get("/getAllBuckets",authorization, bucketController.allBuckets);


module.exports = router;