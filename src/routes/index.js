const { Router } = require("express");
const { saveAPIdata } = require("../utils/saveAPIdata");
const { getAllCountry } = require("../controllers/getAllCountry")
const { getById } = require("../controllers/getById")
const { getActivities } = require("../controllers/getActivities")
const { postActivity } = require("../controllers/postActivity")


const router = Router();

router.get('/firstload', saveAPIdata);
router.get('/countries', getAllCountry);
router.get('/countries/:idPais', getById);
router.get('/activities', getActivities);
router.post('/activities', postActivity)

module.exports = router;
