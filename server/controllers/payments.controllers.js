const Payment = require("../Models/payments.models");

const savePaymentData = async (req, res) => {
    console.log(req.body)
    const payment1 = new Payment({userEmail:'xyz', cardNumber:'xyz', paymentAmount:'24', couponApplied:'yes'})
    const response = await payment1.save()
    console.log(response)
    return res.json(response)

}


module.exports = {
    savePaymentData
  };