/*
Author - rahulmoje
*/
const Coupon = require("../models/coupon.model");

const applyCouponCode = async (req, res) => {
    try {
        const response = await Coupon.findOne({ 'couponCode': req.params.couponCode })
        const responseToSend = validateAndCheckCoupon(response)
        return res.json(responseToSend)
    } catch (err) {
        console.log(err)
        return res.status(500).send({ id: '', version: '', success: false });
    }

}

const retrieveCoupons = async(req, res) => {
    try {
        const response = await Coupon.find({})
        return res.json(response)
    } catch (err) {
        console.log(err)
        return res.status(500).send({ success: false, message: 'Unable to retrieve coupons' });
    }
}

const saveCoupon = async(req, res) => {
    const coupon1 = new Coupon({
        couponCode: req.body.couponCode,
        discountPercentage: req.body.discountPercentage,
        expiryDate: req.body.expiryDate
    })
    try {
        const response = await coupon1.save()
        console.log(response)
        const responseToSend = { id: response._id, version: response.__v, success: true }
        console.log(responseToSend)
        return res.json(responseToSend)
    } catch (err) {
        console.log(err)
        return res.status(500).send({ id: '', version: '', success: false });
    }
}

const validateAndCheckCoupon = (couponResponse) => {
    if (null == couponResponse) {
        return { 'success': false, 'message': 'Invalid coupon code' }
    }
    const expirydate = couponResponse.expiryDate
    const todayDate = new Date()
    if (todayDate <= expirydate) {
        return { 'success': true, 'message': 'Valid coupon', 'discountPercentage': couponResponse.discountPercentage }
    } else {
        return { 'success': false, 'message': 'Expired coupon' }
    }
}




module.exports = {
    applyCouponCode,
    retrieveCoupons,
    saveCoupon
};