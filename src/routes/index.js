const express = require("express")
const router = express.Router();

const authRoutes = require('./authRoutes')
const bucketRoutes = require('./bucketRoutes')
const fileRoutes = require('./filesRoutes')

router.use('/auth', authRoutes);
router.use('/bucket', bucketRoutes);
router.use('/file', fileRoutes);

module.exports = router;