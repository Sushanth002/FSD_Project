const { Router } = require("express");
const router = Router();

const {
  searchHotel,
  getRoomByInput,
  getReviewByHotelID,
} = require("../controllers/common/common.controller");

// ##########common##################
router.route("/search-hotels").post(searchHotel);
router.route("/room").post(getRoomByInput);
router.route("/review/:hotelid").get(getReviewByHotelID);

module.exports = router;
