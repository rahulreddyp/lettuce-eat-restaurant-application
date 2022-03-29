const Coupon = require("../models/coupon.model");

const applyCouponCode = async (req, res) => {
    try{
        const response = await Coupon.findOne({'couponCode':req.params.couponCode})
        const responseToSend = validateAndCheckCoupon(response)
        return res.json(responseToSend)
    } catch(err) {
        console.log(err)
        return res.status(500).send({id: '', version: '', success: false});
    }    

}

const validateAndCheckCoupon = (couponResponse) => {
    if(null == couponResponse) {
        return {'success':false, 'message':'Invalid coupon code'}
    }
    const expirydate = couponResponse.expiryDate
    const todayDate = new Date()
    if(todayDate <= expirydate) {
        return {'success':true, 'message':'Valid coupon', 'discountPercentage':couponResponse.discountPercentage}
    } else {
        return {'success':false, 'message':'Expired coupon'}
    }
}


module.exports = {
    applyCouponCode
  };